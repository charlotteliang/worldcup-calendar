# FIFA World Cup 2026 Calendar

Weekly match schedule for the 2026 FIFA World Cup with live group standings, country flags, and Google Calendar integration.

**Live site:** https://wc2026-calendar-app.web.app

## Stack

- [Next.js](https://nextjs.org) — frontend
- [Firebase Hosting](https://firebase.google.com/docs/hosting) — deployment
- [Firestore](https://firebase.google.com/docs/firestore) — match data and scores (single source of truth)
- GitHub Actions — auto-deploys on push to `main`

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Data

Match data lives in Firestore. A daily cloud routine (5 am PT) fetches the latest scores and confirmed teams and patches Firestore directly — no code commits needed.

To re-seed Firestore from scratch:

```bash
npx tsx scripts/seed-firestore.ts
```

To manually patch a match:

```bash
node scripts/update-match.mjs '{"g5":{"homeScore":1,"awayScore":1}}'
```
