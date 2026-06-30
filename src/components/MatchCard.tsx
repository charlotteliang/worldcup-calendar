"use client";

import { Match } from "@/data/matches";
import { Timezone, convertFromPT } from "@/lib/timezone";
import { buildGoogleCalendarUrl } from "@/lib/gcal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CITY_STATE: Record<string, string> = {
  Arlington: "TX", Atlanta: "GA", "East Rutherford": "NJ", Foxborough: "MA",
  Houston: "TX", "Kansas City": "MO", "Los Angeles": "CA", Miami: "FL",
  Philadelphia: "PA", "Santa Clara": "CA", Seattle: "WA",
  Toronto: "ON", Vancouver: "BC",
  Guadalajara: "Mexico", "Mexico City": "Mexico", Monterrey: "Mexico",
};

const stageColors: Record<string, string> = {
  "Group Stage": "bg-slate-100 text-slate-700",
  "Round of 32": "bg-blue-100 text-blue-700",
  "Round of 16": "bg-indigo-100 text-indigo-700",
  "Quarter-final": "bg-purple-100 text-purple-700",
  "Semi-final": "bg-orange-100 text-orange-700",
  "Third Place": "bg-yellow-100 text-yellow-700",
  Final: "bg-red-100 text-red-700",
};

function ScorePill({ home, away, penHome, penAway }: { home: number; away: number; penHome?: number; penAway?: number }) {
  return (
    <span className="inline-flex items-center gap-1 bg-slate-800 text-white text-xs font-bold rounded px-1.5 py-0.5">
      {home}–{away}{penHome !== undefined && penAway !== undefined ? ` (${penHome}–${penAway}p)` : ""}
    </span>
  );
}

export default function MatchCard({ match, tz, onGroupClick }: { match: Match; tz: Timezone; onGroupClick?: (group: string) => void }) {
  const isTBD = match.homeTeam.code === "TBD" && match.awayTeam.code === "TBD";
  const hasScore = match.homeScore !== undefined && match.awayScore !== undefined;
  const hasPenalties = hasScore && match.homeScore === match.awayScore
    && match.penaltyHomeScore !== undefined && match.penaltyAwayScore !== undefined;
  const homeWins = hasScore && (
    match.homeScore! > match.awayScore! ||
    (hasPenalties && match.penaltyHomeScore! > match.penaltyAwayScore!)
  );
  const awayWins = hasScore && (
    match.awayScore! > match.homeScore! ||
    (hasPenalties && match.penaltyAwayScore! > match.penaltyHomeScore!)
  );
  const { time: displayTime, nextDay } = convertFromPT(match.time, tz);
  const gcalUrl = buildGoogleCalendarUrl(match);

  if (isTBD) {
    return (
      <Card className="border border-dashed border-slate-200 opacity-60">
        <CardContent className="p-3">
          <div className="text-xs text-slate-400 text-center">
            {match.stage} · {displayTime} {tz.abbr}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-md transition-shadow border border-slate-200">
      <CardContent className="p-3">
        <div className="flex items-center gap-2">
          <div className="flex-1 min-w-0">
            {/* Home team */}
            <div className="flex items-center gap-1.5">
              <span className="text-lg leading-none shrink-0">{match.homeTeam.flag}</span>
              <span className={`text-sm font-semibold truncate ${homeWins ? "text-green-700" : "text-slate-900"}`}>
                {match.homeTeam.name}
              </span>
            </div>
            {/* Away team */}
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-lg leading-none shrink-0">{match.awayTeam.flag}</span>
              <span className={`text-sm font-semibold truncate ${awayWins ? "text-green-700" : "text-slate-900"}`}>
                {match.awayTeam.name}
              </span>
            </div>
            {/* Meta */}
            <div className="flex items-center gap-1.5 mt-1 flex-wrap">
              <span className="text-xs text-slate-500">
                {displayTime} {tz.abbr}{nextDay ? " +1d" : ""} · {match.city}{CITY_STATE[match.city] ? `, ${CITY_STATE[match.city]}` : ""}
              </span>
              {match.group && onGroupClick ? (
                <button
                  onClick={() => onGroupClick(match.group!)}
                  className={`text-xs px-1.5 py-0 rounded border font-medium cursor-pointer hover:opacity-70 transition-opacity ${stageColors[match.stage]}`}
                >
                  Group {match.group}
                </button>
              ) : (
                <Badge variant="outline" className={`text-xs px-1.5 py-0 ${stageColors[match.stage]}`}>
                  {match.group ? `Group ${match.group}` : match.stage}
                </Badge>
              )}
              {hasScore
                ? <ScorePill home={match.homeScore!} away={match.awayScore!} penHome={match.penaltyHomeScore} penAway={match.penaltyAwayScore} />
                : (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(gcalUrl, "_blank", "noopener,noreferrer")}
                    className="text-xs h-5 px-1.5 py-0 text-green-700 border-green-300 hover:bg-green-50 hover:border-green-400"
                    title="Add to Google Calendar"
                  >
                    + Cal
                  </Button>
                )
              }
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
