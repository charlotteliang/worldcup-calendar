export interface Timezone {
  label: string;
  abbr: string;
  offsetFromPT: number; // hours offset from PDT (UTC-7)
  ianaName: string;     // for Google Calendar ctz param
}

export const TIMEZONES: Timezone[] = [
  { label: "Pacific Time (PT)",          abbr: "PT",   offsetFromPT: 0,  ianaName: "America/Los_Angeles" },
  { label: "Mountain Time (MT)",         abbr: "MT",   offsetFromPT: 1,  ianaName: "America/Denver"      },
  { label: "Central Time (CT)",          abbr: "CT",   offsetFromPT: 2,  ianaName: "America/Chicago"     },
  { label: "Eastern Time (ET)",          abbr: "ET",   offsetFromPT: 3,  ianaName: "America/New_York"    },
  { label: "UTC / GMT",                  abbr: "UTC",  offsetFromPT: 7,  ianaName: "UTC"                 },
  { label: "London – British Summer (BST)",   abbr: "BST",  offsetFromPT: 8,  ianaName: "Europe/London"       },
  { label: "Paris / Berlin – Central European Summer (CEST)", abbr: "CEST", offsetFromPT: 9,  ianaName: "Europe/Paris"        },
  { label: "Sydney – Australian Eastern (AEST)", abbr: "AEST", offsetFromPT: 17, ianaName: "Australia/Sydney"    },
];

export function convertFromPT(ptTime: string, tz: Timezone): { time: string; nextDay: boolean } {
  const [h, m] = ptTime.split(":").map(Number);
  const totalMin = h * 60 + m + tz.offsetFromPT * 60;
  const totalHour = Math.floor(totalMin / 60);
  const displayHour = totalHour % 24;
  return {
    time: `${String(displayHour).padStart(2, "0")}:${String(totalMin % 60).padStart(2, "0")}`,
    nextDay: totalHour >= 24,
  };
}

export function detectLocalTimezone(): Timezone {
  try {
    const iana = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return TIMEZONES.find((t) => t.ianaName === iana) ?? TIMEZONES[0];
  } catch {
    return TIMEZONES[0];
  }
}
