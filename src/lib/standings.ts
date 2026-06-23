import { MATCHES } from "@/data/matches";

export const GROUPS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"] as const;
export type Group = (typeof GROUPS)[number];

export interface TeamStanding {
  name: string;
  flag: string;
  code: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
}

export function getGroupStandings(group: string): TeamStanding[] {
  const teamMap = new Map<string, TeamStanding>();

  for (const m of MATCHES) {
    if (m.group !== group || m.stage !== "Group Stage") continue;

    for (const t of [m.homeTeam, m.awayTeam]) {
      if (!teamMap.has(t.code)) {
        teamMap.set(t.code, { ...t, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 });
      }
    }

    if (m.homeScore === undefined || m.awayScore === undefined) continue;

    const home = teamMap.get(m.homeTeam.code)!;
    const away = teamMap.get(m.awayTeam.code)!;

    home.played++; away.played++;
    home.gf += m.homeScore; home.ga += m.awayScore;
    away.gf += m.awayScore; away.ga += m.homeScore;
    home.gd = home.gf - home.ga;
    away.gd = away.gf - away.ga;

    if (m.homeScore > m.awayScore) {
      home.won++; home.points += 3; away.lost++;
    } else if (m.homeScore < m.awayScore) {
      away.won++; away.points += 3; home.lost++;
    } else {
      home.drawn++; away.drawn++; home.points++; away.points++;
    }
  }

  return Array.from(teamMap.values()).sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.gd !== a.gd) return b.gd - a.gd;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.name.localeCompare(b.name);
  });
}
