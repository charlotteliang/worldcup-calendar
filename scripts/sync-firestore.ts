import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { MATCHES } from "../src/data/matches";
import * as fs from "fs";

let serviceAccount: object;
if (process.env.FIREBASE_SERVICE_ACCOUNT_BASE64) {
  serviceAccount = JSON.parse(Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, "base64").toString("utf8"));
} else if (fs.existsSync("service-account-key.json")) {
  serviceAccount = JSON.parse(fs.readFileSync("service-account-key.json", "utf8"));
} else {
  console.error("No service account credentials found.");
  process.exit(1);
}

initializeApp({ credential: cert(serviceAccount as Parameters<typeof cert>[0]) });
const db = getFirestore();

async function sync() {
  const batch = db.batch();
  for (const match of MATCHES) {
    batch.set(db.collection("matches").doc(match.id), match);
  }
  await batch.commit();
  console.log(`Synced ${MATCHES.length} matches to Firestore.`);
}

sync().catch((err) => {
  console.error("Firestore sync failed:", err);
  process.exit(1);
});
