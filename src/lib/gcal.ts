import { Match } from "@/data/matches";

function padTwo(n: number): string {
  return n.toString().padStart(2, "0");
}

function toGCalDate(dateStr: string, timeStr: string): string {
  // Returns YYYYMMDDTHHmmSS (local time, no Z)
  const [year, month, day] = dateStr.split("-");
  const [hour, minute] = timeStr.split(":");
  return `${year}${month}${day}T${padTwo(Number(hour))}${padTwo(Number(minute))}00`;
}

function addThreeHours(dateStr: string, timeStr: string): string {
  const [hour, minute] = timeStr.split(":").map(Number);
  const totalMinutes = hour * 60 + minute + 180;
  const endHour = Math.floor(totalMinutes / 60);
  const endMinute = totalMinutes % 60;
  return toGCalDate(dateStr, `${padTwo(endHour)}:${padTwo(endMinute)}`);
}

export function buildGoogleCalendarUrl(match: Match): string {
  const title = encodeURIComponent(
    `⚽ ${match.homeTeam.flag} ${match.homeTeam.name} vs ${match.awayTeam.flag} ${match.awayTeam.name} | FIFA World Cup 2026`
  );
  const start = toGCalDate(match.date, match.time);
  const end = addThreeHours(match.date, match.time);
  const details = encodeURIComponent(
    `${match.stage}${match.group ? ` - Group ${match.group}` : ""}\n${match.venue}, ${match.city}\n\nFIFA World Cup 2026`
  );
  const location = encodeURIComponent(`${match.venue}, ${match.city}`);

  // ctz tells Google Calendar the stored times are in PT so it converts correctly
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}&ctz=America%2FLos_Angeles`;
}
