"use client";

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Match } from "@/data/matches";

type FirestoreMatchDoc = {
  id: string;
  date: string;
  time: string;
  homeTeam: { name: string; flag: string; code: string };
  awayTeam: { name: string; flag: string; code: string };
  homeScore?: number;
  awayScore?: number;
  penaltyHomeScore?: number;
  penaltyAwayScore?: number;
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
    homeTeam: data.homeTeam,
    awayTeam: data.awayTeam,
    homeScore: data.homeScore,
    awayScore: data.awayScore,
    penaltyHomeScore: data.penaltyHomeScore,
    penaltyAwayScore: data.penaltyAwayScore,
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
    getDocs(collection(db, "matches"))
      .then((snap) => {
        const data = snap.docs.map((d) => docToMatch(d.data() as FirestoreMatchDoc));
        data.sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
        setMatches(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Firestore fetch failed:", err);
        setLoading(false);
      });
  }, []);

  return { matches, loading };
}
