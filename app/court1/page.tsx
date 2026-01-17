"use client";

const matches = [
  { id: 1, team1: "Kanyakumari", team2: "Vellore", court: "Court 1" },
  { id: 3, team1: "Coimbatore", team2: "Ramnad", court: "Court 1" },
  { id: 5, team1: "Namakkal", team2: "Tiruppur", court: "Court 1" },
  { id: 7, team1: "Kanyakumari", team2: "Krishnagiri", court: "Court 1" },
  { id: 9, team1: "Coimbatore", team2: "Tuticorin", court: "Court 1" },
  { id: 11, team1: "Vellore", team2: "Namakkal", court: "Court 1" },
  { id: 13, team1: "Ramnad", team2: "Tuticorin", court: "Court 1" },
  { id: 15, team1: "Krishnagiri", team2: "Tiruppur", court: "Court 1" },
  { id: 17, team1: "Sivagangai", team2: "Tuticorin", court: "Court 1" },
  { id: 19, team1: "Coimbatore", team2: "Madurai", court: "Court 1" },
  { id: 21, team1: "Vellore", team2: "Dharmapuri", court: "Court 1" },
  { id: 23, team1: "Ramnad", team2: "Sivagangai", court: "Court 1" },
  { id: 25, team1: "Namakkal", team2: "Dharmapuri", court: "Court 1" },
  { id: 27, team1: "Krishnagiri", team2: "Vellore", court: "Court 1" },
  { id: 29, team1: "Namakkal", team2: "Kanyakumari", court: "Court 1" },
];

export default function Court1FixturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0b0f1a] to-[#050505] text-white">
      {/* Header */}
      <section className="text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-black tracking-widest uppercase bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
          Fixtures 
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-blue-200 text-base md:text-lg leading-relaxed">
          Exciting matches scheduled on <span className="font-bold">Court 1</span>{" "}
          of the Covai Challengers Trophy 2025.
        </p>
      </section>

      {/* Fixtures Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {matches.map((match) => (
            <div
              key={match.id}
              className="relative group bg-gradient-to-br from-blue-600/10 to-cyan-400/5 border border-white/10 backdrop-blur-xl rounded-3xl p-7 text-center shadow-[0_15px_45px_rgba(0,0,0,0.7)] transition-all duration-300 hover:scale-[1.05] hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,118,254,0.9)] overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Match Badge */}
              <span className="absolute top-4 left-4 text-[0.7rem] font-black tracking-widest px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 shadow-[0_0_18px_rgba(0,118,254,0.9)]">
                MATCH {match.id}
              </span>

              {/* Teams */}
              <div className="mt-10 space-y-2">
                <p className="text-lg font-extrabold tracking-wide">
                  {match.team1}
                </p>
                <p className="text-xs font-bold tracking-[0.3em] text-cyan-300">
                  VS
                </p>
                <p className="text-lg font-extrabold tracking-wide">
                  {match.team2}
                </p>
              </div>

              {/* Court Chip */}
              <div className="mt-5 inline-block px-4 py-1 text-xs font-semibold rounded-full bg-blue-500/20 border border-white/20 text-blue-200">
                {match.court}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-6 text-center text-sm text-blue-300 tracking-wide">
        © Para Volleyball Association of Coimbatore
      </footer>
    </main>
  );
}
