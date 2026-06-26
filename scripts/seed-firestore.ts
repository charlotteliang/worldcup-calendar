import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { MATCHES } from "../src/data/matches";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const serviceAccount = require("../service-account-key.json");

initializeApp({ credential: cert(serviceAccount), projectId: "wc2026-calendar-app" });
const db = getFirestore();

async function seed() {
  const batch = db.batch();
  for (const match of MATCHES) {
    const ref = db.collection("matches").doc(match.id);
    batch.set(ref, match);
  }
  await batch.commit();
  console.log(`Seeded ${MATCHES.length} matches to Firestore.`);
  process.exit(0);
}

seed();
