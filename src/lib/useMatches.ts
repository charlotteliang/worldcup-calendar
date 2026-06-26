"use client";

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Match } from "@/data/matches";

type FirestoreMatchDoc = {
  id: string;
  date: string;
  time: string;
  homeTeamName: string;
  homeTeamFlag: string;
  homeTeamCode: string;
  awayTeamName: string;
  awayTeamFlag: string;
  awayTeamCode: string;
  homeScore?: number;
  awayScore?: number;
  group?: string;
  stage: Match["stage"];
  venue: string;
  city: string;
};

function docToMatch(data: FirestoreMatchDoc): Match {
  return {
    id: data.id,
    date: data.date,
    time: data.time,
    homeTeam: { name: data.homeTeamName, flag: data.homeTeamFlag, code: data.homeTeamCode },
    awayTeam: { name: data.awayTeamName, flag: data.awayTeamFlag, code: data.awayTeamCode },
    homeScore: data.homeScore,
    awayScore: data.awayScore,
    group: data.group,
    stage: data.stage,
    venue: data.venue,
    city: data.city,
  };
}

export function useMatches() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDocs(collection(db, "matches")).then((snap) => {
      const data = snap.docs.map((d) => docToMatch(d.data() as FirestoreMatchDoc));
      data.sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
      setMatches(data);
      setLoading(false);
    });
  }, []);

  return { matches, loading };
}
