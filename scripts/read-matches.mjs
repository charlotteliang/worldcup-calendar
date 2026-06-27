#!/usr/bin/env node
// Print all Firestore match documents as JSON (for the routine to inspect current state).

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readFileSync } from "fs";

const sa = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64
  ? JSON.parse(Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, "base64").toString("utf8"))
  : JSON.parse(readFileSync("service-account-key.json", "utf8"));

initializeApp({ credential: cert(sa) });
const db = getFirestore();
db.settings({ preferRest: true });

const snap = await db.collection("matches").get();
const matches = snap.docs
  .map((d) => d.data())
  .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
console.log(JSON.stringify(matches, null, 2));
