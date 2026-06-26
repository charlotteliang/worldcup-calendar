import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { MATCHES } from "../src/data/matches.js";

const b64 = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;
if (!b64) {
  console.error("FIREBASE_SERVICE_ACCOUNT_BASE64 is not set");
  process.exit(1);
}

const serviceAccount = JSON.parse(Buffer.from(b64, "base64").toString("utf8"));

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function sync() {
  const batch = db.batch();
  for (const match of MATCHES) {
    const ref = db.collection("matches").doc(match.id);
    batch.set(ref, match);
  }
  await batch.commit();
  console.log(`Synced ${MATCHES.length} matches to Firestore.`);
}

sync().catch((err) => {
  console.error("Firestore sync failed:", err);
  process.exit(1);
});
