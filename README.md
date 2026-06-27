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

Match data and scores are stored in Firestore. A daily routine automatically fetches the latest results and updates Firestore — no manual intervention needed.
