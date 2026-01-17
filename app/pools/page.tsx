"use client";

import Link from "next/link";

export default function PoolPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b1d3a] via-[#030712] to-black text-white">
      {/* BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Link
          href="/"
          className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur hover:bg-white/20 transition"
        >
          ← Back
        </Link>
      </div>

      {/* HEADER */}
      <section className="text-center pt-14 pb-10 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-widest text-[#00d4ff] font-orbitron mb-3">
          TOURNAMENT POOLS
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base">
          Teams are divided into pools for the group stage. Get ready for intense
          matchups and thrilling performances.
        </p>
      </section>

      {/* POOLS GRID */}
      <section className="max-w-7xl mx-auto px-4 pb-20 grid gap-10 md:grid-cols-2">
        {/* POOL A */}
        <div className="group relative rounded-[30px] border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.8)] transition hover:scale-[1.02] hover:shadow-[0_35px_90px_rgba(0,170,255,0.35)]">
          <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
          
          <h2 className="relative text-center text-xl md:text-2xl font-extrabold tracking-[0.35em] text-cyan-300 border-b border-cyan-300/60 pb-4 mb-8 font-orbitron">
            POOL A
          </h2>

          <div className="relative space-y-3">
            {["Coimbatore", "Chennai", "Thoothukudi", "Madurai", "Ramnad", "Sivagangai"].map(
              (team) => (
                <div
                  key={team}
                  className="group/team relative cursor-pointer rounded-xl border border-white/20 bg-gradient-to-r from-cyan-500/20 to-teal-400/10 px-5 py-3 font-semibold tracking-wide transition hover:translate-x-2 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,255,213,0.35)]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition group-hover/team:translate-x-full duration-700" />
                  {team === "Thoothukudi" ? "Tuticorin" : team}
                </div>
              )
            )}
          </div>
        </div>

        {/* POOL B */}
        <div className="group relative rounded-[30px] border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.8)] transition hover:scale-[1.02] hover:shadow-[0_35px_90px_rgba(0,255,153,0.35)]">
          <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

          <h2 className="relative text-center text-xl md:text-2xl font-extrabold tracking-[0.35em] text-orange-300 border-b border-orange-300/60 pb-4 mb-8 font-orbitron">
            POOL B
          </h2>

          <div className="relative space-y-3">
            {["Namakkal", "Krishnagiri", "Tiruppur", "Dharmapuri", "Kanyakumari", "Vellore"].map(
              (team) => (
                <div
                  key={team}
                  className="group/team relative cursor-pointer rounded-xl border border-white/20 bg-gradient-to-r from-orange-500/20 to-yellow-400/10 px-5 py-3 font-semibold tracking-wide transition hover:translate-x-2 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(255,170,0,0.35)]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition group-hover/team:translate-x-full duration-700" />
                  {team === "Tiruppur" ? "Tirupur" : team}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm tracking-wide">
          © Para Volleyball Association of Coimbatore
        </div>
      </footer>
    </main>
  );
}
