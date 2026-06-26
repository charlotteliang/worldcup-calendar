import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  projectId: "wc2026-calendar-app",
  appId: "1:297118081326:web:3de3ad1730d1eb4ffddabf",
  storageBucket: "wc2026-calendar-app.firebasestorage.app",
  apiKey: "AIzaSyA50lnGaXxbSyKSJBIWBqprrZDzzn878cw",
  authDomain: "wc2026-calendar-app.firebaseapp.com",
  messagingSenderId: "297118081326",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);
