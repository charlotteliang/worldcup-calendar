export interface Country {
  name: string;
  flag: string;
  code: string;
}

export interface Match {
  id: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM PT
  homeTeam: Country;
  awayTeam: Country;
  homeScore?: number;
  awayScore?: number;
  group?: string;
  stage: "Group Stage" | "Round of 32" | "Round of 16" | "Quarter-final" | "Semi-final" | "Third Place" | "Final";
  venue: string;
  city: string;
}
