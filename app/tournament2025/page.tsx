import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Covai Challengers Trophy 2025",
  description: "Official tournament page for Covai Challengers Trophy 2025",
};

export default function Tournament2025Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center bg-[url('/images/background.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest uppercase text-[#0076fe] drop-shadow-lg">
            Covai Challengers Trophy
          </h1>
          <p className="mt-3 text-xl md:text-2xl font-semibold tracking-wide text-gray-200">
            Tournament Edition 2025
          </p>
          <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
            The ultimate volleyball championship platform — explore teams,
            pools, fixtures, and experience the passion, competition, and glory
            of the Covai Challengers Trophy.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/teams"
              className="rounded-full bg-[#0076fe] px-8 py-3 font-bold uppercase tracking-wide transition hover:bg-blue-600 hover:shadow-2xl"
            >
              View Teams
            </Link>
            <Link
              href="/fixtures"
              className="rounded-full border border-[#0076fe] px-8 py-3 font-bold uppercase tracking-wide transition hover:bg-[#0076fe] hover:text-white"
            >
              View Fixtures
            </Link>
          </div>
        </div>
      </section>

      {/* TOURNAMENT SECTIONS */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-3">
          {/* Teams */}
          <div className="rounded-3xl bg-gradient-to-br from-[#0076fe] to-blue-900 p-8 shadow-2xl hover:scale-105 transition">
            <h2 className="text-2xl font-extrabold uppercase tracking-widest mb-4">
              Teams
            </h2>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Meet the teams competing for the Covai Challengers Trophy 2025 —
              skill, spirit, and sportsmanship at its finest.
            </p>
            <Link
              href="/teams"
              className="inline-block rounded-full bg-black px-6 py-2 font-semibold uppercase tracking-wide transition hover:bg-gray-900"
            >
              Explore Teams →
            </Link>
          </div>

          {/* Pools */}
          <div className="rounded-3xl bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-[#0076fe]/40 p-8 shadow-2xl hover:scale-105 transition">
            <h2 className="text-2xl font-extrabold uppercase tracking-widest mb-4 text-[#0076fe]">
              Pools
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              View team groupings, pool standings, and track the road to the
              knockout stages.
            </p>
            <Link
              href="/pools"
              className="inline-block rounded-full border border-[#0076fe] px-6 py-2 font-semibold uppercase tracking-wide transition hover:bg-[#0076fe] hover:text-white"
            >
              View Pools →
            </Link>
          </div>

          {/* Fixtures */}
          <div className="rounded-3xl bg-gradient-to-br from-[#0076fe] to-indigo-900 p-8 shadow-2xl hover:scale-105 transition">
            <h2 className="text-2xl font-extrabold uppercase tracking-widest mb-4">
              Fixtures
            </h2>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Stay updated with match schedules, venues, and match timings
              throughout the tournament.
            </p>
            <Link
              href="/fixtures"
              className="inline-block rounded-full bg-black px-6 py-2 font-semibold uppercase tracking-wide transition hover:bg-gray-900"
            >
              View Fixtures →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-16 bg-[#0076fe] text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-widest mb-4">
          Ready to Witness the Action?
        </h3>
        <p className="max-w-2xl mx-auto text-white/90 mb-8">
          Follow every match, every point, and every victory in the Covai
          Challengers Trophy 2025.
        </p>
        <Link
          href="/fixtures"
          className="inline-block rounded-full bg-black px-10 py-3 font-bold uppercase tracking-wide transition hover:bg-gray-900 hover:scale-105"
        >
          Go to Fixtures
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-6 text-center text-gray-400 text-sm tracking-wide">
        © Para Volleyball Association of Coimbatore
      </footer>
    </main>
  );
}
