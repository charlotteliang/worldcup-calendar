#!/usr/bin/env node
// Propagate winners (and SF losers to 3rd place) through the knockout bracket.
// Safe to run anytime — only writes when a slot's team has actually changed.
// Usage: node scripts/advance-bracket.mjs

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync } from "fs";

const sa = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64
  ? JSON.parse(Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, "base64").toString("utf8"))
  : JSON.parse(readFileSync("service-account-key.json", "utf8"));

initializeApp({ credential: cert(sa) });
const db = getFirestore();
db.settings({ preferRest: true });

function getWinner(match) {
  if (!match || match.homeScore === undefined || match.awayScore === undefined) return null;
  if (match.homeScore > match.awayScore) return match.homeTeam;
  if (match.awayScore > match.homeScore) return match.awayTeam;
  // Tied after 90 min — check penalties
  if (match.penaltyHomeScore !== undefined && match.penaltyAwayScore !== undefined) {
    if (match.penaltyHomeScore > match.penaltyAwayScore) return match.homeTeam;
    if (match.penaltyAwayScore > match.penaltyHomeScore) return match.awayTeam;
  }
  return null; // no result yet
}

function getLoser(match) {
  if (!match || match.homeScore === undefined || match.awayScore === undefined) return null;
  if (match.homeScore > match.awayScore) return match.awayTeam;
  if (match.awayScore > match.homeScore) return match.homeTeam;
  if (match.penaltyHomeScore !== undefined && match.penaltyAwayScore !== undefined) {
    if (match.penaltyHomeScore > match.penaltyAwayScore) return match.awayTeam;
    if (match.penaltyAwayScore > match.penaltyHomeScore) return match.homeTeam;
  }
  return null;
}

// Each entry: [sourceId, role, targetId]
// role "home"/"away"       → winner fills that slot
// role "loser-home"/"loser-away" → loser fills that slot (3rd place match)
const BRACKET = [
  // R32 → R16 (pairs: 1-2, 3-4, 5-6, 7-8, 9-10, 11-12, 13-14, 15-16)
  ["r32-1",  "home",       "r16-1"],
  ["r32-2",  "away",       "r16-1"],
  ["r32-3",  "home",       "r16-2"],
  ["r32-4",  "away",       "r16-2"],
  ["r32-5",  "home",       "r16-3"],
  ["r32-6",  "away",       "r16-3"],
  ["r32-7",  "home",       "r16-4"],
  ["r32-8",  "away",       "r16-4"],
  ["r32-9",  "home",       "r16-5"],
  ["r32-10", "away",       "r16-5"],
  ["r32-11", "home",       "r16-6"],
  ["r32-12", "away",       "r16-6"],
  ["r32-13", "home",       "r16-7"],
  ["r32-14", "away",       "r16-7"],
  ["r32-15", "home",       "r16-8"],
  ["r32-16", "away",       "r16-8"],
  // R16 → QF
  ["r16-1",  "home",       "qf-1"],
  ["r16-2",  "away",       "qf-1"],
  ["r16-3",  "home",       "qf-2"],
  ["r16-4",  "away",       "qf-2"],
  ["r16-5",  "home",       "qf-3"],
  ["r16-6",  "away",       "qf-3"],
  ["r16-7",  "home",       "qf-4"],
  ["r16-8",  "away",       "qf-4"],
  // QF → SF
  ["qf-1",   "home",       "sf-1"],
  ["qf-2",   "away",       "sf-1"],
  ["qf-3",   "home",       "sf-2"],
  ["qf-4",   "away",       "sf-2"],
  // SF winners → Final
  ["sf-1",   "home",       "final"],
  ["sf-2",   "away",       "final"],
  // SF losers → 3rd place match
  ["sf-1",   "loser-home", "3rd"],
  ["sf-2",   "loser-away", "3rd"],
];

const snap = await db.collection("matches").get();
const matches = {};
snap.docs.forEach(d => { matches[d.id] = d.data(); });

const updates = {};
for (const [sourceId, role, targetId] of BRACKET) {
  const source = matches[sourceId];
  if (!source) continue;

  const isLoser = role.startsWith("loser");
  const team = isLoser ? getLoser(source) : getWinner(source);
  if (!team) continue;

  const target = matches[targetId];
  if (!target) continue;

  const field = (role === "home" || role === "loser-home") ? "homeTeam" : "awayTeam";
  if (target[field]?.code === team.code) continue; // already correct

  if (!updates[targetId]) updates[targetId] = {};
  updates[targetId][field] = team;
}

if (Object.keys(updates).length === 0) {
  console.log("No bracket updates needed.");
  process.exit(0);
}

for (const [id, fields] of Object.entries(updates)) {
  await db.collection("matches").doc(id).update(fields);
  console.log(`✓ ${id}:`, JSON.stringify(fields));
}
console.log(`Updated ${Object.keys(updates).length} document(s).`);
