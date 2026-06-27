"use client";

import { useState, useEffect, useMemo } from "react";
import { TIMEZONES, detectLocalTimezone, type Timezone } from "@/lib/timezone";
import { useMatches } from "@/lib/useMatches";
import MatchCard from "@/components/MatchCard";
import GroupsView from "@/components/GroupsView";
import { Button } from "@/components/ui/button";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function getMonday(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function addDays(date: Date, n: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function isTournamentActive(weekStart: Date): boolean {
  const start = new Date("2026-06-11");
  const end = new Date("2026-07-30");
  const weekEnd = addDays(weekStart, 6);
  return weekStart <= end && weekEnd >= start;
}

export default function WeekCalendar() {
  const { matches, loading } = useMatches();
  const [activeTab, setActiveTab] = useState<"calendar" | "groups">("calendar");
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [weekStart, setWeekStart] = useState<Date>(() => getMonday(new Date()));
  const [tz, setTz] = useState<Timezone>(TIMEZONES[0]); // PT default; overridden after mount
  const [todayStr, setTodayStr] = useState(""); // set client-side only to avoid UTC/local mismatch

  useEffect(() => {
    setTodayStr(toISODate(new Date()));
  }, []);

  // Load saved timezone (or auto-detect) after hydration
  useEffect(() => {
    const saved = localStorage.getItem("wc-tz");
    if (saved) {
      const found = TIMEZONES.find((t) => t.abbr === saved);
      if (found) { setTz(found); return; }
    }
    setTz(detectLocalTimezone());
  }, []);

  const weekDays = useMemo(
    () => Array.from({ length: 7 }, (_, i) => addDays(weekStart, i)),
    [weekStart]
  );
  const weekMatches = useMemo(() => {
    const start = toISODate(weekStart);
    const end = toISODate(addDays(weekStart, 6));
    return matches.filter((m) => m.date >= start && m.date <= end);
  }, [matches, weekStart]);

  const weekLabel = (() => {
    const end = addDays(weekStart, 6);
    if (weekStart.getMonth() === end.getMonth()) {
      return `${MONTHS[weekStart.getMonth()]} ${weekStart.getFullYear()}`;
    }
    return `${MONTHS[weekStart.getMonth()]} – ${MONTHS[end.getMonth()]} ${end.getFullYear()}`;
  })();

  function handleTzChange(selected: Timezone) {
    setTz(selected);
    localStorage.setItem("wc-tz", selected.abbr);
  }

  useEffect(() => {
    function handlePopState(e: PopStateEvent) {
      if (e.state?.tab === "groups") {
        setActiveTab("groups");
        setActiveGroup(e.state.group ?? null);
      } else {
        setActiveTab("calendar");
      }
    }
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function handleGroupClick(group: string) {
    setActiveGroup(group);
    setActiveTab("groups");
    history.pushState({ tab: "groups", group }, "");
  }

  if (loading) {
    return <div className="text-center py-16 text-slate-400">Loading matches...</div>;
  }

  return (
    <div className="w-full">
      {/* Tab bar */}
      <div className="flex gap-1 border-b border-slate-200 mb-4">
        {(["calendar", "groups"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium capitalize transition-colors border-b-2 -mb-px ${
              activeTab === tab
                ? "border-green-600 text-green-700"
                : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            {tab === "calendar" ? "Calendar" : "Groups"}
          </button>
        ))}
      </div>

      {activeTab === "groups" && <GroupsView activeGroup={activeGroup} matches={matches} />}

      {activeTab === "calendar" && (
        <>
          {/* Controls bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">{weekLabel}</h2>
              <p className="text-sm text-slate-500">
                {weekMatches.length === 0
                  ? "No matches this week"
                  : `${weekMatches.length} match${weekMatches.length !== 1 ? "es" : ""} this week`}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <select
                value={tz.abbr}
                onChange={(e) => {
                  const found = TIMEZONES.find((t) => t.abbr === e.target.value);
                  if (found) handleTzChange(found);
                }}
                className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {TIMEZONES.map((t) => (
                  <option key={t.abbr} value={t.abbr}>
                    {t.label}
                  </option>
                ))}
              </select>
              <Button variant="outline" size="sm" onClick={() => setWeekStart(getMonday(new Date()))} className="text-xs">
                Today
              </Button>
              <Button variant="outline" size="sm" onClick={() => setWeekStart((d) => addDays(d, -7))}>←</Button>
              <Button variant="outline" size="sm" onClick={() => setWeekStart((d) => addDays(d, 7))}>→</Button>
            </div>
          </div>

          {/* Calendar Grid */}
          {!isTournamentActive(weekStart) ? (
            <div className="text-center py-16 text-slate-400">
              <div className="text-5xl mb-3">⚽</div>
              <p className="text-lg font-medium text-slate-600">No matches this week</p>
              <p className="text-sm mt-1">FIFA World Cup 2026 runs June 11 – July 19, 2026</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => setWeekStart(getMonday(new Date("2026-06-11")))}
              >
                Jump to Opening Week
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
              {weekDays.map((day, i) => {
                const dateStr = toISODate(day);
                const dayMatches = weekMatches.filter((m) => m.date === dateStr).sort((a, b) => a.time.localeCompare(b.time));
                const isToday = dateStr === todayStr;

                return (
                  <div key={dateStr} className="flex flex-col min-w-0">
                    <div
                      className={`text-center py-2 px-1 rounded-lg mb-2 ${
                        isToday ? "bg-green-600 text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <div className="text-xs font-semibold uppercase tracking-wide">{DAYS[i]}</div>
                      <div className={`text-lg font-bold ${isToday ? "text-white" : "text-slate-900"}`}>
                        {day.getDate()}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      {dayMatches.length === 0 ? (
                        <div className="text-center text-xs text-slate-300 py-4">—</div>
                      ) : (
                        dayMatches.map((match) => (
                          <MatchCard key={match.id} match={match} tz={tz} onGroupClick={handleGroupClick} />
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
