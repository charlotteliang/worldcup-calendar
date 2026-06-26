export interface Match {
  id: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM PT
  homeTeam: Country;
  awayTeam: Country;
  homeScore?: number;
  awayScore?: number;
  group?: string;
  stage: "Group Stage" | "Round of 32" | "Round of 16" | "Quarter-final" | "Semi-final" | "Third Place" | "Final";
  venue: string;
  city: string;
}

export interface Country {
  name: string;
  flag: string;
  code: string;
}

// All 48 qualified teams
const MEX: Country = { name: "Mexico", flag: "🇲🇽", code: "MX" };
const RSA: Country = { name: "South Africa", flag: "🇿🇦", code: "ZA" };
const KOR: Country = { name: "South Korea", flag: "🇰🇷", code: "KR" };
const CZE: Country = { name: "Czechia", flag: "🇨🇿", code: "CZ" };

const CAN: Country = { name: "Canada", flag: "🇨🇦", code: "CA" };
const BIH: Country = { name: "Bosnia & Herzegovina", flag: "🇧🇦", code: "BA" };
const SUI: Country = { name: "Switzerland", flag: "🇨🇭", code: "CH" };
const QAT: Country = { name: "Qatar", flag: "🇶🇦", code: "QA" };

const BRA: Country = { name: "Brazil", flag: "🇧🇷", code: "BR" };
const MAR: Country = { name: "Morocco", flag: "🇲🇦", code: "MA" };
const HAI: Country = { name: "Haiti", flag: "🇭🇹", code: "HT" };
const SCO: Country = { name: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", code: "GB-SCO" };

const USA: Country = { name: "United States", flag: "🇺🇸", code: "US" };
const PAR: Country = { name: "Paraguay", flag: "🇵🇾", code: "PY" };
const AUS: Country = { name: "Australia", flag: "🇦🇺", code: "AU" };
const TUR: Country = { name: "Türkiye", flag: "🇹🇷", code: "TR" };

const GER: Country = { name: "Germany", flag: "🇩🇪", code: "DE" };
const CUW: Country = { name: "Curaçao", flag: "🇨🇼", code: "CW" };
const CIV: Country = { name: "Côte d'Ivoire", flag: "🇨🇮", code: "CI" };
const ECU: Country = { name: "Ecuador", flag: "🇪🇨", code: "EC" };

const NED: Country = { name: "Netherlands", flag: "🇳🇱", code: "NL" };
const JPN: Country = { name: "Japan", flag: "🇯🇵", code: "JP" };
const SWE: Country = { name: "Sweden", flag: "🇸🇪", code: "SE" };
const TUN: Country = { name: "Tunisia", flag: "🇹🇳", code: "TN" };

const BEL: Country = { name: "Belgium", flag: "🇧🇪", code: "BE" };
const EGY: Country = { name: "Egypt", flag: "🇪🇬", code: "EG" };
const IRN: Country = { name: "Iran", flag: "🇮🇷", code: "IR" };
const NZL: Country = { name: "New Zealand", flag: "🇳🇿", code: "NZ" };

const ESP: Country = { name: "Spain", flag: "🇪🇸", code: "ES" };
const CPV: Country = { name: "Cape Verde", flag: "🇨🇻", code: "CV" };
const SAU: Country = { name: "Saudi Arabia", flag: "🇸🇦", code: "SA" };
const URU: Country = { name: "Uruguay", flag: "🇺🇾", code: "UY" };

const FRA: Country = { name: "France", flag: "🇫🇷", code: "FR" };
const SEN: Country = { name: "Senegal", flag: "🇸🇳", code: "SN" };
const IRQ: Country = { name: "Iraq", flag: "🇮🇶", code: "IQ" };
const NOR: Country = { name: "Norway", flag: "🇳🇴", code: "NO" };

const ARG: Country = { name: "Argentina", flag: "🇦🇷", code: "AR" };
const ALG: Country = { name: "Algeria", flag: "🇩🇿", code: "DZ" };
const AUT: Country = { name: "Austria", flag: "🇦🇹", code: "AT" };
const JOR: Country = { name: "Jordan", flag: "🇯🇴", code: "JO" };

const POR: Country = { name: "Portugal", flag: "🇵🇹", code: "PT" };
const COD: Country = { name: "DR Congo", flag: "🇨🇩", code: "CD" };
const UZB: Country = { name: "Uzbekistan", flag: "🇺🇿", code: "UZ" };
const COL: Country = { name: "Colombia", flag: "🇨🇴", code: "CO" };

const ENG: Country = { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", code: "GB-ENG" };
const CRO: Country = { name: "Croatia", flag: "🇭🇷", code: "HR" };
const GHA: Country = { name: "Ghana", flag: "🇬🇭", code: "GH" };
const PAN: Country = { name: "Panama", flag: "🇵🇦", code: "PA" };

const TBD: Country = { name: "TBD", flag: "🏳️", code: "TBD" };

export const MATCHES: Match[] = [
  // ── GROUP A: Mexico · South Africa · South Korea · Czechia ──
  { id: "a1", date: "2026-06-11", time: "09:00", homeTeam: MEX, awayTeam: RSA, homeScore: 2, awayScore: 0, group: "A", stage: "Group Stage", venue: "Estadio Azteca", city: "Mexico City" },
  { id: "a2", date: "2026-06-11", time: "12:00", homeTeam: KOR, awayTeam: CZE, homeScore: 2, awayScore: 1, group: "A", stage: "Group Stage", venue: "Estadio Akron", city: "Guadalajara" },
  { id: "a3", date: "2026-06-18", time: "09:00", homeTeam: CZE, awayTeam: RSA, homeScore: 1, awayScore: 1, group: "A", stage: "Group Stage", venue: "Mercedes-Benz Stadium", city: "Atlanta" },
  { id: "a4", date: "2026-06-18", time: "12:00", homeTeam: MEX, awayTeam: KOR, homeScore: 1, awayScore: 0, group: "A", stage: "Group Stage", venue: "Estadio Akron", city: "Guadalajara" },
  { id: "a5", date: "2026-06-24", time: "18:00", homeTeam: CZE, awayTeam: MEX, homeScore: 0, awayScore: 3, group: "A", stage: "Group Stage", venue: "Estadio Azteca", city: "Mexico City" },
  { id: "a6", date: "2026-06-24", time: "18:00", homeTeam: RSA, awayTeam: KOR, homeScore: 1, awayScore: 0, group: "A", stage: "Group Stage", venue: "Estadio BBVA", city: "Monterrey" },

  // ── GROUP B: Canada · Bosnia & Herzegovina · Switzerland · Qatar ──
  { id: "b1", date: "2026-06-12", time: "09:00", homeTeam: CAN, awayTeam: BIH, homeScore: 1, awayScore: 1, group: "B", stage: "Group Stage", venue: "BMO Field", city: "Toronto" },
  { id: "b2", date: "2026-06-12", time: "12:00", homeTeam: SUI, awayTeam: QAT, homeScore: 1, awayScore: 1, group: "B", stage: "Group Stage", venue: "Lumen Field", city: "Seattle" },
  { id: "b3", date: "2026-06-18", time: "15:00", homeTeam: SUI, awayTeam: BIH, homeScore: 4, awayScore: 1, group: "B", stage: "Group Stage", venue: "SoFi Stadium", city: "Los Angeles" },
  { id: "b4", date: "2026-06-18", time: "18:00", homeTeam: CAN, awayTeam: QAT, homeScore: 6, awayScore: 0, group: "B", stage: "Group Stage", venue: "BC Place", city: "Vancouver" },
  { id: "b5", date: "2026-06-24", time: "12:00", homeTeam: SUI, awayTeam: CAN, homeScore: 2, awayScore: 1, group: "B", stage: "Group Stage", venue: "BC Place", city: "Vancouver" },
  { id: "b6", date: "2026-06-24", time: "12:00", homeTeam: BIH, awayTeam: QAT, homeScore: 3, awayScore: 1, group: "B", stage: "Group Stage", venue: "Lumen Field", city: "Seattle" },

  // ── GROUP C: Brazil · Morocco · Haiti · Scotland ──
  { id: "c1", date: "2026-06-13", time: "09:00", homeTeam: BRA, awayTeam: MAR, homeScore: 1, awayScore: 1, group: "C", stage: "Group Stage", venue: "MetLife Stadium", city: "East Rutherford" },
  { id: "c2", date: "2026-06-13", time: "12:00", homeTeam: HAI, awayTeam: SCO, homeScore: 0, awayScore: 1, group: "C", stage: "Group Stage", venue: "Gillette Stadium", city: "Foxborough" },
  { id: "c3", date: "2026-06-19", time: "09:00", homeTeam: SCO, awayTeam: MAR, homeScore: 0, awayScore: 1, group: "C", stage: "Group Stage", venue: "Gillette Stadium", city: "Foxborough" },
  { id: "c4", date: "2026-06-19", time: "12:00", homeTeam: BRA, awayTeam: HAI, homeScore: 3, awayScore: 0, group: "C", stage: "Group Stage", venue: "Lincoln Financial Field", city: "Philadelphia" },
  { id: "c5", date: "2026-06-24", time: "15:00", homeTeam: SCO, awayTeam: BRA, homeScore: 0, awayScore: 3, group: "C", stage: "Group Stage", venue: "Hard Rock Stadium", city: "Miami" },
  { id: "c6", date: "2026-06-24", time: "15:00", homeTeam: MAR, awayTeam: HAI, homeScore: 4, awayScore: 2, group: "C", stage: "Group Stage", venue: "Mercedes-Benz Stadium", city: "Atlanta" },

  // ── GROUP D: United States · Paraguay · Australia · Türkiye ──
  { id: "d1", date: "2026-06-12", time: "15:00", homeTeam: USA, awayTeam: PAR, homeScore: 4, awayScore: 1, group: "D", stage: "Group Stage", venue: "SoFi Stadium", city: "Los Angeles" },
  { id: "d2", date: "2026-06-13", time: "15:00", homeTeam: AUS, awayTeam: TUR, homeScore: 2, awayScore: 0, group: "D", stage: "Group Stage", venue: "BC Place", city: "Vancouver" },
  { id: "d3", date: "2026-06-19", time: "15:00", homeTeam: USA, awayTeam: AUS, homeScore: 2, awayScore: 0, group: "D", stage: "Group Stage", venue: "Lumen Field", city: "Seattle" },
  { id: "d4", date: "2026-06-19", time: "18:00", homeTeam: TUR, awayTeam: PAR, homeScore: 0, awayScore: 1, group: "D", stage: "Group Stage", venue: "Levi's Stadium", city: "Santa Clara" },
  { id: "d5", date: "2026-06-25", time: "19:00", homeTeam: TUR, awayTeam: USA, homeScore: 3, awayScore: 2, group: "D", stage: "Group Stage", venue: "SoFi Stadium", city: "Los Angeles" },
  { id: "d6", date: "2026-06-25", time: "19:00", homeTeam: PAR, awayTeam: AUS, homeScore: 0, awayScore: 0, group: "D", stage: "Group Stage", venue: "Levi's Stadium", city: "Santa Clara" },

  // ── GROUP E: Germany · Curaçao · Côte d'Ivoire · Ecuador ──
  { id: "e1", date: "2026-06-14", time: "09:00", homeTeam: GER, awayTeam: CUW, homeScore: 7, awayScore: 1, group: "E", stage: "Group Stage", venue: "NRG Stadium", city: "Houston" },
  { id: "e2", date: "2026-06-14", time: "12:00", homeTeam: CIV, awayTeam: ECU, homeScore: 1, awayScore: 0, group: "E", stage: "Group Stage", venue: "Lincoln Financial Field", city: "Philadelphia" },
  { id: "e3", date: "2026-06-20", time: "09:00", homeTeam: GER, awayTeam: CIV, homeScore: 2, awayScore: 1, group: "E", stage: "Group Stage", venue: "BMO Field", city: "Toronto" },
  { id: "e4", date: "2026-06-20", time: "12:00", homeTeam: ECU, awayTeam: CUW, homeScore: 0, awayScore: 0, group: "E", stage: "Group Stage", venue: "Arrowhead Stadium", city: "Kansas City" },
  { id: "e5", date: "2026-06-25", time: "13:00", homeTeam: ECU, awayTeam: GER, homeScore: 2, awayScore: 1, group: "E", stage: "Group Stage", venue: "MetLife Stadium", city: "East Rutherford" },
  { id: "e6", date: "2026-06-25", time: "13:00", homeTeam: CUW, awayTeam: CIV, homeScore: 0, awayScore: 2, group: "E", stage: "Group Stage", venue: "Lincoln Financial Field", city: "Philadelphia" },

  // ── GROUP F: Netherlands · Japan · Sweden · Tunisia ──
  { id: "f1", date: "2026-06-14", time: "15:00", homeTeam: NED, awayTeam: JPN, homeScore: 2, awayScore: 2, group: "F", stage: "Group Stage", venue: "AT&T Stadium", city: "Arlington" },
  { id: "f2", date: "2026-06-14", time: "18:00", homeTeam: SWE, awayTeam: TUN, homeScore: 5, awayScore: 1, group: "F", stage: "Group Stage", venue: "Estadio Akron", city: "Guadalajara" },
  { id: "f3", date: "2026-06-20", time: "15:00", homeTeam: NED, awayTeam: SWE, homeScore: 5, awayScore: 1, group: "F", stage: "Group Stage", venue: "NRG Stadium", city: "Houston" },
  { id: "f4", date: "2026-06-20", time: "18:00", homeTeam: TUN, awayTeam: JPN, homeScore: 0, awayScore: 4, group: "F", stage: "Group Stage", venue: "Estadio Akron", city: "Guadalajara" },
  { id: "f5", date: "2026-06-25", time: "16:00", homeTeam: JPN, awayTeam: SWE, homeScore: 1, awayScore: 1, group: "F", stage: "Group Stage", venue: "AT&T Stadium", city: "Arlington" },
  { id: "f6", date: "2026-06-25", time: "16:00", homeTeam: TUN, awayTeam: NED, homeScore: 1, awayScore: 3, group: "F", stage: "Group Stage", venue: "Arrowhead Stadium", city: "Kansas City" },

  // ── GROUP G: Belgium · Egypt · Iran · New Zealand ──
  { id: "g1", date: "2026-06-15", time: "09:00", homeTeam: BEL, awayTeam: EGY, homeScore: 1, awayScore: 1, group: "G", stage: "Group Stage", venue: "Lumen Field", city: "Seattle" },
  { id: "g2", date: "2026-06-15", time: "12:00", homeTeam: IRN, awayTeam: NZL, homeScore: 2, awayScore: 2, group: "G", stage: "Group Stage", venue: "SoFi Stadium", city: "Los Angeles" },
  { id: "g3", date: "2026-06-21", time: "12:00", homeTeam: BEL, awayTeam: IRN, homeScore: 0, awayScore: 0, group: "G", stage: "Group Stage", venue: "SoFi Stadium", city: "Los Angeles" },
  { id: "g4", date: "2026-06-21", time: "18:00", homeTeam: NZL, awayTeam: EGY, homeScore: 1, awayScore: 3, group: "G", stage: "Group Stage", venue: "BC Place", city: "Vancouver" },
  { id: "g5", date: "2026-06-26", time: "20:00", homeTeam: EGY, awayTeam: IRN, group: "G", stage: "Group Stage", venue: "Lumen Field", city: "Seattle" },
  { id: "g6", date: "2026-06-26", time: "20:00", homeTeam: NZL, awayTeam: BEL, group: "G", stage: "Group Stage", venue: "BC Place", city: "Vancouver" },

  // ── GROUP H: Spain · Cape Verde · Saudi Arabia · Uruguay ──
  { id: "h1", date: "2026-06-15", time: "15:00", homeTeam: ESP, awayTeam: CPV, homeScore: 0, awayScore: 0, group: "H", stage: "Group Stage", venue: "Mercedes-Benz Stadium", city: "Atlanta" },
  { id: "h2", date: "2026-06-15", time: "18:00", homeTeam: SAU, awayTeam: URU, homeScore: 1, awayScore: 1, group: "H", stage: "Group Stage", venue: "Hard Rock Stadium", city: "Miami" },
  { id: "h3", date: "2026-06-21", time: "09:00", homeTeam: ESP, awayTeam: SAU, homeScore: 4, awayScore: 0, group: "H", stage: "Group Stage", venue: "Mercedes-Benz Stadium", city: "Atlanta" },
  { id: "h4", date: "2026-06-21", time: "15:00", homeTeam: URU, awayTeam: CPV, homeScore: 2, awayScore: 2, group: "H", stage: "Group Stage", venue: "Hard Rock Stadium", city: "Miami" },
  { id: "h5", date: "2026-06-26", time: "17:00", homeTeam: CPV, awayTeam: SAU, group: "H", stage: "Group Stage", venue: "NRG Stadium", city: "Houston" },
  { id: "h6", date: "2026-06-26", time: "17:00", homeTeam: URU, awayTeam: ESP, group: "H", stage: "Group Stage", venue: "Estadio Akron", city: "Guadalajara" },

  // ── GROUP I: France · Senegal · Iraq · Norway ──
  { id: "i1", date: "2026-06-16", time: "09:00", homeTeam: FRA, awayTeam: SEN, homeScore: 3, awayScore: 1, group: "I", stage: "Group Stage", venue: "MetLife Stadium", city: "East Rutherford" },
  { id: "i2", date: "2026-06-16", time: "12:00", homeTeam: IRQ, awayTeam: NOR, homeScore: 1, awayScore: 4, group: "I", stage: "Group Stage", venue: "Gillette Stadium", city: "Foxborough" },
  { id: "i3", date: "2026-06-22", time: "14:00", homeTeam: FRA, awayTeam: IRQ, homeScore: 3, awayScore: 0, group: "I", stage: "Group Stage", venue: "Lincoln Financial Field", city: "Philadelphia" },
  { id: "i4", date: "2026-06-22", time: "17:00", homeTeam: NOR, awayTeam: SEN, homeScore: 3, awayScore: 2, group: "I", stage: "Group Stage", venue: "MetLife Stadium", city: "East Rutherford" },
  { id: "i5", date: "2026-06-26", time: "12:00", homeTeam: NOR, awayTeam: FRA, group: "I", stage: "Group Stage", venue: "Gillette Stadium", city: "Foxborough" },
  { id: "i6", date: "2026-06-26", time: "12:00", homeTeam: SEN, awayTeam: IRQ, group: "I", stage: "Group Stage", venue: "BMO Field", city: "Toronto" },

  // ── GROUP J: Argentina · Algeria · Austria · Jordan ──
  { id: "j1", date: "2026-06-16", time: "15:00", homeTeam: ARG, awayTeam: ALG, homeScore: 3, awayScore: 0, group: "J", stage: "Group Stage", venue: "Arrowhead Stadium", city: "Kansas City" },
  { id: "j2", date: "2026-06-16", time: "18:00", homeTeam: AUT, awayTeam: JOR, homeScore: 3, awayScore: 1, group: "J", stage: "Group Stage", venue: "Levi's Stadium", city: "Santa Clara" },
  { id: "j3", date: "2026-06-22", time: "10:00", homeTeam: ARG, awayTeam: AUT, homeScore: 2, awayScore: 0, group: "J", stage: "Group Stage", venue: "AT&T Stadium", city: "Arlington" },
  { id: "j4", date: "2026-06-22", time: "20:00", homeTeam: JOR, awayTeam: ALG, homeScore: 1, awayScore: 2, group: "J", stage: "Group Stage", venue: "Levi's Stadium", city: "Santa Clara" },
  { id: "j5", date: "2026-06-27", time: "19:00", homeTeam: ALG, awayTeam: AUT, group: "J", stage: "Group Stage", venue: "Arrowhead Stadium", city: "Kansas City" },
  { id: "j6", date: "2026-06-27", time: "19:00", homeTeam: JOR, awayTeam: ARG, group: "J", stage: "Group Stage", venue: "AT&T Stadium", city: "Arlington" },

  // ── GROUP K: Portugal · DR Congo · Uzbekistan · Colombia ──
  { id: "k1", date: "2026-06-17", time: "09:00", homeTeam: POR, awayTeam: COD, homeScore: 1, awayScore: 1, group: "K", stage: "Group Stage", venue: "NRG Stadium", city: "Houston" },
  { id: "k2", date: "2026-06-17", time: "12:00", homeTeam: UZB, awayTeam: COL, homeScore: 1, awayScore: 3, group: "K", stage: "Group Stage", venue: "Estadio Azteca", city: "Mexico City" },
  { id: "k3", date: "2026-06-23", time: "10:00", homeTeam: POR, awayTeam: UZB, homeScore: 5, awayScore: 0, group: "K", stage: "Group Stage", venue: "NRG Stadium", city: "Houston" },
  { id: "k4", date: "2026-06-23", time: "19:00", homeTeam: COL, awayTeam: COD, homeScore: 1, awayScore: 0, group: "K", stage: "Group Stage", venue: "Estadio Akron", city: "Guadalajara" },
  { id: "k5", date: "2026-06-27", time: "16:30", homeTeam: COL, awayTeam: POR, group: "K", stage: "Group Stage", venue: "Hard Rock Stadium", city: "Miami" },
  { id: "k6", date: "2026-06-27", time: "16:30", homeTeam: COD, awayTeam: UZB, group: "K", stage: "Group Stage", venue: "Mercedes-Benz Stadium", city: "Atlanta" },

  // ── GROUP L: England · Croatia · Ghana · Panama ──
  { id: "l1", date: "2026-06-17", time: "15:00", homeTeam: ENG, awayTeam: CRO, homeScore: 4, awayScore: 2, group: "L", stage: "Group Stage", venue: "AT&T Stadium", city: "Arlington" },
  { id: "l2", date: "2026-06-17", time: "18:00", homeTeam: GHA, awayTeam: PAN, homeScore: 1, awayScore: 0, group: "L", stage: "Group Stage", venue: "BMO Field", city: "Toronto" },
  { id: "l3", date: "2026-06-23", time: "13:00", homeTeam: ENG, awayTeam: GHA, homeScore: 0, awayScore: 0, group: "L", stage: "Group Stage", venue: "Gillette Stadium", city: "Foxborough" },
  { id: "l4", date: "2026-06-23", time: "16:00", homeTeam: PAN, awayTeam: CRO, homeScore: 0, awayScore: 1, group: "L", stage: "Group Stage", venue: "BMO Field", city: "Toronto" },
  { id: "l5", date: "2026-06-27", time: "14:00", homeTeam: PAN, awayTeam: ENG, group: "L", stage: "Group Stage", venue: "MetLife Stadium", city: "East Rutherford" },
  { id: "l6", date: "2026-06-27", time: "14:00", homeTeam: CRO, awayTeam: GHA, group: "L", stage: "Group Stage", venue: "Lincoln Financial Field", city: "Philadelphia" },

  // ── ROUND OF 32 ── (✅ = confirmed qualifier)
  // Jun 28
  { id: "r32-1",  date: "2026-06-28", time: "12:00", homeTeam: RSA, awayTeam: CAN, stage: "Round of 32", venue: "SoFi Stadium", city: "Los Angeles" },
  // Jun 29
  { id: "r32-2",  date: "2026-06-29", time: "10:00", homeTeam: BRA, awayTeam: JPN, stage: "Round of 32", venue: "NRG Stadium", city: "Houston" },
  { id: "r32-3",  date: "2026-06-29", time: "13:30", homeTeam: GER, awayTeam: { name: "3rd (A/B/C/D/F)", flag: "🏳️", code: "TBD" }, stage: "Round of 32", venue: "Gillette Stadium", city: "Foxborough" },
  { id: "r32-4",  date: "2026-06-29", time: "18:00", homeTeam: NED, awayTeam: MAR, stage: "Round of 32", venue: "Estadio BBVA", city: "Monterrey" },
  // Jun 30
  { id: "r32-5",  date: "2026-06-30", time: "10:00", homeTeam: CIV, awayTeam: { name: "2nd Group I", flag: "🏳️", code: "TBD" }, stage: "Round of 32", venue: "AT&T Stadium", city: "Arlington" },
  { id: "r32-6",  date: "2026-06-30", time: "14:00", homeTeam: { name: "1st Group I", flag: "🏳️", code: "TBD" }, awayTeam: { name: "3rd (C/D/F/G/H)", flag: "🏳️", code: "TBD" }, stage: "Round of 32", venue: "MetLife Stadium", city: "East Rutherford" },
  { id: "r32-7",  date: "2026-06-30", time: "18:00", homeTeam: MEX, awayTeam: { name: "3rd (C/E/F/H/I)", flag: "🏳️", code: "TBD" }, stage: "Round of 32", venue: "Estadio Azteca", city: "Mexico City" },
  // Jul 1
  { id: "r32-8",  date: "2026-07-01", time: "09:00", homeTeam: { name: "1st Group L", flag: "🏳️", code: "TBD" }, awayTeam: { name: "3rd (E/H/I/J/K)", flag: "🏳️", code: "TBD" }, stage: "Round of 32", venue: "Mercedes-Benz Stadium", city: "Atlanta" },
  { id: "r32-9",  date: "2026-07-01", time: "13:00", homeTeam: { name: "1st Group G", flag: "🏳️", code: "TBD" }, awayTeam: { name: "3rd (A/E/H/I/J)", flag: "🏳️", code: "TBD" }, stage: "Round of 32", venue: "Lumen Field", city: "Seattle" },
  { id: "r32-10", date: "2026-07-01", time: "17:00", homeTeam: USA, awayTeam: { name: "3rd (B/E/F/I/J)", flag: "🏳️", code: "TBD" }, stage: "Round of 32", venue: "Levi's Stadium", city: "Santa Clara" },
  // Jul 2
  { id: "r32-11", date: "2026-07-02", time: "12:00", homeTeam: { name: "1st Group H", flag: "🏳️", code: "TBD" }, awayTeam: { name: "2nd Group J", flag: "🏳️", code: "TBD" }, stage: "Round of 32", venue: "SoFi Stadium", city: "Los Angeles" },
  { id: "r32-12", date: "2026-07-02", time: "16:00", homeTeam: { name: "2nd Group K", flag: "🏳️", code: "TBD" }, awayTeam: { name: "2nd Group L", flag: "🏳️", code: "TBD" }, stage: "Round of 32", venue: "BMO Field", city: "Toronto" },
  { id: "r32-13", date: "2026-07-02", time: "20:00", homeTeam: SUI, awayTeam: { name: "3rd (E/F/G/I/J)", flag: "🏳️", code: "TBD" }, stage: "Round of 32", venue: "BC Place", city: "Vancouver" },
  // Jul 3
  { id: "r32-14", date: "2026-07-03", time: "11:00", homeTeam: AUS, awayTeam: { name: "2nd Group G", flag: "🏳️", code: "TBD" }, stage: "Round of 32", venue: "AT&T Stadium", city: "Arlington" },
  { id: "r32-15", date: "2026-07-03", time: "15:00", homeTeam: ARG, awayTeam: { name: "2nd Group H", flag: "🏳️", code: "TBD" }, stage: "Round of 32", venue: "Hard Rock Stadium", city: "Miami" },
  { id: "r32-16", date: "2026-07-03", time: "18:30", homeTeam: { name: "1st Group K", flag: "🏳️", code: "TBD" }, awayTeam: { name: "3rd (D/E/I/J/L)", flag: "🏳️", code: "TBD" }, stage: "Round of 32", venue: "Arrowhead Stadium", city: "Kansas City" },

  // ── ROUND OF 16 ──
  { id: "r16-1", date: "2026-07-07", time: "12:00", homeTeam: TBD, awayTeam: TBD, stage: "Round of 16", venue: "TBD", city: "TBD" },
  { id: "r16-2", date: "2026-07-07", time: "18:00", homeTeam: TBD, awayTeam: TBD, stage: "Round of 16", venue: "TBD", city: "TBD" },
  { id: "r16-3", date: "2026-07-08", time: "12:00", homeTeam: TBD, awayTeam: TBD, stage: "Round of 16", venue: "TBD", city: "TBD" },
  { id: "r16-4", date: "2026-07-08", time: "18:00", homeTeam: TBD, awayTeam: TBD, stage: "Round of 16", venue: "TBD", city: "TBD" },
  { id: "r16-5", date: "2026-07-09", time: "12:00", homeTeam: TBD, awayTeam: TBD, stage: "Round of 16", venue: "TBD", city: "TBD" },
  { id: "r16-6", date: "2026-07-09", time: "18:00", homeTeam: TBD, awayTeam: TBD, stage: "Round of 16", venue: "TBD", city: "TBD" },
  { id: "r16-7", date: "2026-07-10", time: "12:00", homeTeam: TBD, awayTeam: TBD, stage: "Round of 16", venue: "TBD", city: "TBD" },
  { id: "r16-8", date: "2026-07-10", time: "18:00", homeTeam: TBD, awayTeam: TBD, stage: "Round of 16", venue: "TBD", city: "TBD" },

  // ── QUARTER-FINALS ──
  { id: "qf-1", date: "2026-07-12", time: "12:00", homeTeam: TBD, awayTeam: TBD, stage: "Quarter-final", venue: "TBD", city: "TBD" },
  { id: "qf-2", date: "2026-07-12", time: "18:00", homeTeam: TBD, awayTeam: TBD, stage: "Quarter-final", venue: "TBD", city: "TBD" },
  { id: "qf-3", date: "2026-07-13", time: "12:00", homeTeam: TBD, awayTeam: TBD, stage: "Quarter-final", venue: "TBD", city: "TBD" },
  { id: "qf-4", date: "2026-07-13", time: "18:00", homeTeam: TBD, awayTeam: TBD, stage: "Quarter-final", venue: "TBD", city: "TBD" },

  // ── SEMI-FINALS ──
  { id: "sf-1", date: "2026-07-15", time: "18:00", homeTeam: TBD, awayTeam: TBD, stage: "Semi-final", venue: "TBD", city: "TBD" },
  { id: "sf-2", date: "2026-07-16", time: "18:00", homeTeam: TBD, awayTeam: TBD, stage: "Semi-final", venue: "TBD", city: "TBD" },

  // ── THIRD PLACE & FINAL ──
  { id: "3rd",   date: "2026-07-18", time: "12:00", homeTeam: TBD, awayTeam: TBD, stage: "Third Place", venue: "TBD", city: "TBD" },
  { id: "final", date: "2026-07-19", time: "12:00", homeTeam: TBD, awayTeam: TBD, stage: "Final", venue: "MetLife Stadium", city: "East Rutherford" },
];

export function getMatchesForWeek(weekStart: Date): Match[] {
  const start = new Date(weekStart);
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  end.setDate(end.getDate() + 7);
  return MATCHES.filter((m) => {
    const d = new Date(m.date + "T12:00:00");
    return d >= start && d < end;
  });
}

export function getCurrentWeekStart(): Date {
  const today = new Date();
  const day = today.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  const monday = new Date(today);
  monday.setDate(today.getDate() + diff);
  monday.setHours(0, 0, 0, 0);
  return monday;
}
