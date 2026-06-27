#!/usr/bin/env node
// Patch one or more Firestore match documents.
// Usage: node scripts/update-match.mjs '{"g5":{"homeScore":1,"awayScore":1},"r32-10":{"awayTeam":{"name":"Bosnia & Herzegovina","flag":"🇧🇦","code":"BA"}}}'

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync, existsSync } from "fs";

const sa = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64
  ? JSON.parse(Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, "base64").toString("utf8"))
  : JSON.parse(readFileSync("service-account-key.json", "utf8"));

initializeApp({ credential: cert(sa) });
const db = getFirestore();
db.settings({ preferRest: true });

const updates = JSON.parse(process.argv[2] ?? "{}");
if (Object.keys(updates).length === 0) {
  console.log("No updates provided.");
  process.exit(0);
}

for (const [id, fields] of Object.entries(updates)) {
  await db.collection("matches").doc(id).update(fields);
  console.log(`✓ ${id}:`, JSON.stringify(fields));
}
console.log(`Updated ${Object.keys(updates).length} document(s).`);
