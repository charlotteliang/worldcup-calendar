"use client";

import { useEffect, useRef } from "react";
import { GROUPS, getGroupStandings } from "@/lib/standings";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function GroupCard({ group, isActive }: { group: string; isActive: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isActive]);

  const standings = getGroupStandings(group);

  return (
    <div ref={ref} id={`group-${group}`}>
      <Card className={`border transition-shadow ${isActive ? "border-green-500 shadow-md" : "border-slate-200"}`}>
        <CardHeader className="py-2.5 px-4 bg-slate-50 rounded-t-lg">
          <CardTitle className="text-sm font-bold text-slate-700 tracking-wide">Group {group}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 pb-1">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-slate-400 border-b border-slate-100">
                <th className="text-left px-4 py-1.5 font-medium">Team</th>
                <th className="px-2 py-1.5 font-medium text-center">P</th>
                <th className="px-2 py-1.5 font-medium text-center">W</th>
                <th className="px-2 py-1.5 font-medium text-center">D</th>
                <th className="px-2 py-1.5 font-medium text-center">L</th>
                <th className="px-2 py-1.5 font-medium text-center">GD</th>
                <th className="px-2 py-1.5 font-medium text-center">Pts</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((t, i) => (
                <tr
                  key={t.code}
                  className={`border-b border-slate-50 last:border-0 ${i < 2 ? "bg-green-50" : ""}`}
                >
                  <td className="px-4 py-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-base leading-none">{t.flag}</span>
                      <span className={`font-medium truncate ${i < 2 ? "text-green-800" : "text-slate-600"}`}>
                        {t.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-2 py-1.5 text-center text-slate-500">{t.played}</td>
                  <td className="px-2 py-1.5 text-center text-slate-500">{t.won}</td>
                  <td className="px-2 py-1.5 text-center text-slate-500">{t.drawn}</td>
                  <td className="px-2 py-1.5 text-center text-slate-500">{t.lost}</td>
                  <td className="px-2 py-1.5 text-center text-slate-500">
                    {t.gd > 0 ? `+${t.gd}` : t.gd}
                  </td>
                  <td className="px-2 py-1.5 text-center font-bold text-slate-800">{t.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

export default function GroupsView({ activeGroup }: { activeGroup: string | null }) {
  return (
    <div>
      <p className="text-xs text-slate-400 mb-3">Top 2 teams advance automatically · 8 best 3rd-place teams also advance</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {GROUPS.map((g) => (
          <GroupCard key={g} group={g} isActive={activeGroup === g} />
        ))}
      </div>
    </div>
  );
}
