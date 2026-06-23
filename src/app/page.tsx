import WeekCalendar from "@/components/WeekCalendar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-green-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex items-center gap-3">
            <span className="text-4xl">⚽</span>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight leading-tight">
                FIFA World Cup 2026
              </h1>
              <p className="text-green-200 text-sm mt-0.5">
                June 11 – July 19, 2026 · USA · Canada · Mexico
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Legend */}
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            { label: "Group Stage", color: "bg-slate-100 text-slate-700 border-slate-300" },
            { label: "Round of 32", color: "bg-blue-100 text-blue-700 border-blue-300" },
            { label: "Round of 16", color: "bg-indigo-100 text-indigo-700 border-indigo-300" },
            { label: "Quarter-final", color: "bg-purple-100 text-purple-700 border-purple-300" },
            { label: "Semi-final", color: "bg-orange-100 text-orange-700 border-orange-300" },
            { label: "Final", color: "bg-red-100 text-red-700 border-red-300" },
          ].map(({ label, color }) => (
            <span
              key={label}
              className={`px-2 py-0.5 rounded-full border font-medium ${color}`}
            >
              {label}
            </span>
          ))}
          <span className="px-2 py-0.5 rounded-full border bg-green-600 text-white border-green-600 font-medium">
            Today
          </span>
        </div>
      </div>

      {/* Calendar */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <WeekCalendar />
      </div>

      <footer className="text-center text-xs text-slate-400 pb-6">
        Click &ldquo;+ Cal&rdquo; on any match to add it to your Google Calendar
      </footer>
    </main>
  );
}
