import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { MATCHES } from "../src/data/matches";
import * as fs from "fs";

// Support key via file path or base64 env var
let serviceAccount: object;
if (process.env.FIREBASE_SERVICE_ACCOUNT_BASE64) {
  const json = Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, "base64").toString("utf8");
  serviceAccount = JSON.parse(json);
} else if (fs.existsSync("service-account-key.json")) {
  serviceAccount = JSON.parse(fs.readFileSync("service-account-key.json", "utf8"));
} else {
  console.error("No service account credentials found.");
  process.exit(1);
}

if (!getApps().length) {
  initializeApp({ credential: cert(serviceAccount as Parameters<typeof cert>[0]), projectId: "wc2026-calendar-app" });
}
const db = getFirestore();

async function sync() {
  const batch = db.batch();
  for (const match of MATCHES) {
    const { homeTeam, awayTeam, ...rest } = match;
    const ref = db.collection("matches").doc(match.id);
    batch.set(ref, {
      ...rest,
      homeTeamName: homeTeam.name,
      homeTeamFlag: homeTeam.flag,
      homeTeamCode: homeTeam.code,
      awayTeamName: awayTeam.name,
      awayTeamFlag: awayTeam.flag,
      awayTeamCode: awayTeam.code,
    }, { merge: true });
  }
  await batch.commit();
  console.log(`Synced ${MATCHES.length} matches to Firestore.`);
  process.exit(0);
}

sync();
