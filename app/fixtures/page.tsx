"use client";

import { useState } from "react";

const matches = [
  { id: 1, team1: "Kanyakumari", team2: "Vellore", winners: ""},
  { id: 2, team1: "Madurai", team2: "Tuticorin" },
  { id: 3, team1: "Coimbatore", team2: "Ramnad" },
  { id: 4, team1: "Krishnagiri", team2: "Dharmapuri" },
  { id: 5, team1: "Namakkal", team2: "Tiruppur" },
  { id: 6, team1: "Sivagangai", team2: "Chennai" },
  { id: 7, team1: "Kanyakumari", team2: "Krishnagiri" },
  { id: 8, team1: "Madurai", team2: "Ramnad" },
  { id: 9, team1: "Coimbatore", team2: "Tuticorin" },
  { id: 10, team1: "Dharmapuri", team2: "Tiruppur" },
  { id: 11, team1: "Vellore", team2: "Namakkal" },
  { id: 12, team1: "Sivagangai", team2: "Madurai" },
  { id: 13, team1: "Ramnad", team2: "Tuticorin" },
  { id: 14, team1: "Coimbatore", team2: "Chennai" },
  { id: 15, team1: "Krishnagiri", team2: "Tiruppur" },
  { id: 16, team1: "Kanyakumari", team2: "Dharmapuri" },
  { id: 17, team1: "Sivagangai", team2: "Tuticorin" },
  { id: 18, team1: "Chennai", team2: "Ramnad" },
  { id: 19, team1: "Coimbatore", team2: "Madurai" },
  { id: 20, team1: "Krishnagiri", team2: "Namakkal" },
  { id: 21, team1: "Vellore", team2: "Dharmapuri" },
  { id: 22, team1: "Chennai", team2: "Tuticorin" },
  { id: 23, team1: "Ramnad", team2: "Sivagangai" },
  { id: 24, team1: "Kanyakumari", team2: "Tiruppur" },
  { id: 25, team1: "Namakkal", team2: "Dharmapuri" },
  { id: 26, team1: "Chennai", team2: "Madurai" },
  { id: 27, team1: "Krishnagiri", team2: "Vellore" },
  { id: 28, team1: "Coimbatore", team2: "Sivagangai" },
  { id: 29, team1: "Namakkal", team2: "Kanyakumari" },
  { id: 30, team1: "Vellore", team2: "Tiruppur" },
];

const teamMatches: Record<string, string[]> = {
  Kanyakumari: [
    "🏐 Match 1 vs Vellore – Court 1",
    "🏐 Match 7 vs Krishnagiri – Court 1",
    "🏐 Match 16 vs Dharmapuri – Court 2",
    "🏐 Match 24 vs Tiruppur – Court 2",
    "🏐 Match 29 vs Namakkal – Court 1",
  ],
  Vellore: [
    "🏐 Match 1 vs Kanyakumari – Court 1",
    "🏐 Match 11 vs Namakkal – Court 1",
    "🏐 Match 21 vs Dharmapuri – Court 1",
    "🏐 Match 27 vs Krishnagiri – Court 1",
    "🏐 Match 30 vs Tiruppur – Court 2",
  ],
  Coimbatore: [
    "🏐 Match 3 vs Ramnad – Court 1",
    "🏐 Match 9 vs Tuticorin – Court 1",
    "🏐 Match 14 vs Chennai – Court 2",
    "🏐 Match 19 vs Madurai – Court 1",
    "🏐 Match 28 vs Sivagangai – Court 2",
  ],
  Ramnad: [
    "🏐 Match 3 vs Coimbatore – Court 1",
    "🏐 Match 8 vs Madurai – Court 2",
    "🏐 Match 13 vs Tuticorin – Court 1",
    "🏐 Match 18 vs Chennai – Court 2",
    "🏐 Match 23 vs Sivagangai – Court 1",
  ],
  Namakkal: [
    "🏐 Match 5 vs Tiruppur – Court 1",
    "🏐 Match 11 vs Vellore – Court 1",
    "🏐 Match 20 vs Krishnagiri – Court 2",
    "🏐 Match 25 vs Dharmapuri – Court 1",
    "🏐 Match 29 vs Kanyakumari – Court 1",
  ],
  Tiruppur: [
    "🏐 Match 5 vs Namakkal – Court 1",
    "🏐 Match 10 vs Dharmapuri – Court 2",
    "🏐 Match 15 vs Krishnagiri – Court 1",
    "🏐 Match 24 vs Kanyakumari – Court 2",
    "🏐 Match 30 vs Vellore – Court 2",
  ],
  Krishnagiri: [
    "🏐 Match 7 vs Kanyakumari – Court 1",
    "🏐 Match 4 vs Dharmapuri – Court 2",
    "🏐 Match 15 vs Tiruppur – Court 1",
    "🏐 Match 20 vs Namakkal – Court 2",
    "🏐 Match 27 vs Vellore – Court 1",
  ],
  Dharmapuri: [
    "🏐 Match 4 vs Krishnagiri – Court 2",
    "🏐 Match 10 vs Tiruppur – Court 2",
    "🏐 Match 16 vs Kanyakumari – Court 2",
    "🏐 Match 21 vs Vellore – Court 1",
    "🏐 Match 25 vs Namakkal – Court 1",
  ],
  Madurai: [
    "🏐 Match 2 vs Tuticorin – Court 2",
    "🏐 Match 8 vs Ramnad – Court 2",
    "🏐 Match 12 vs Sivagangai – Court 2",
    "🏐 Match 19 vs Coimbatore – Court 1",
    "🏐 Match 26 vs Chennai – Court 2",
  ],
  Tuticorin: [
    "🏐 Match 2 vs Madurai – Court 2",
    "🏐 Match 9 vs Coimbatore – Court 1",
    "🏐 Match 13 vs Ramnad – Court 1",
    "🏐 Match 17 vs Sivagangai – Court 1",
    "🏐 Match 22 vs Chennai – Court 2",
  ],
  Sivagangai: [
    "🏐 Match 6 vs Chennai – Court 2",
    "🏐 Match 12 vs Madurai – Court 2",
    "🏐 Match 17 vs Tuticorin – Court 1",
    "🏐 Match 23 vs Ramnad – Court 1",
    "🏐 Match 28 vs Coimbatore – Court 2",
  ],
  Chennai: [
    "🏐 Match 6 vs Sivagangai – Court 2",
    "🏐 Match 14 vs Coimbatore – Court 2",
    "🏐 Match 18 vs Ramnad – Court 2",
    "🏐 Match 22 vs Tuticorin – Court 2",
    "🏐 Match 26 vs Madurai – Court 2",
  ],
};

const teams = Object.keys(teamMatches);

export default function FixturesPage() {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent">
          Tournament Fixtures
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-200">
          Complete match schedule for the Covai Challengers Trophy — view all
          matches, knockout rounds, courts, and team-wise fixtures in one place.
        </p>
      </section>

      {/* All Matches */}
      <section className="px-6 max-w-7xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-10">All Matches</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {matches.map((match) => (
            <div
              key={match.id}
              className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-xl hover:shadow-blue-500/30 transition group"
            >
              <span className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-200">
                Upcoming
              </span>
              <p className="text-sm text-blue-300 mb-2">
                Match {match.id}
              </p>
              <div className="flex items-center justify-between font-bold text-lg">
                <span>{match.team1}</span>
                <span className="text-blue-400">vs</span>
                <span>{match.team2}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Knockout Stage */}
      <section className="px-6 max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Knockout Stage
        </h2>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Semifinals */}
          <div className="space-y-6">
            <div className="bg-white/10 rounded-2xl p-6 text-center shadow-lg">
              <span className="text-sm text-blue-300 font-semibold">
                SEMIFINAL 1
              </span>
              <h3 className="mt-2 text-xl font-bold">Pool A 1st</h3>
              <p className="text-blue-400 my-2">VS</p>
              <h3 className="text-xl font-bold">Pool B 2nd</h3>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 text-center shadow-lg">
              <span className="text-sm text-blue-300 font-semibold">
                SEMIFINAL 2
              </span>
              <h3 className="mt-2 text-xl font-bold">Pool A 2nd</h3>
              <p className="text-blue-400 my-2">VS</p>
              <h3 className="text-xl font-bold">Pool B 1st</h3>
            </div>
          </div>

          {/* Final */}
          <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl p-8 text-center shadow-2xl scale-105">
            <span className="text-sm font-semibold text-yellow-300">
              FINAL
            </span>
            <div className="text-6xl my-4">🏆</div>
            <p className="text-lg font-semibold">
              Winner SF1 <span className="text-yellow-300">vs</span> Winner SF2
            </p>
          </div>

          {/* Third Place */}
          <div className="bg-white/10 rounded-2xl p-6 text-center shadow-lg">
            <span className="text-sm text-blue-300 font-semibold">
              3rd / 4th PLACE
            </span>
            <h3 className="mt-2 text-xl font-bold">Loser SF1</h3>
            <p className="text-blue-400 my-2">VS</p>
            <h3 className="text-xl font-bold">Loser SF2</h3>
          </div>
        </div>
      </section>

      {/* Courts */}
      <section className="px-6 max-w-5xl mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Courts</h2>
        <p className="text-blue-200 mb-10">
          Tap a court to view match details
        </p>
        <div className="grid sm:grid-cols-2 gap-8">
          <a
            href="/court1"
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-10 text-2xl font-extrabold shadow-xl hover:scale-105 transition"
          >
            Court 1
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
          </a>
          <a
            href="/court2"
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 p-10 text-2xl font-extrabold shadow-xl hover:scale-105 transition"
          >
            Court 2
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
          </a>
        </div>
      </section>

      {/* Team Overview */}
      <section className="px-6 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Team Match Overview
        </h2>
        <p className="text-blue-200 text-center mb-10">
          Tap a team to view individual match details
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {teams.map((team) => (
            <button
              key={team}
              onClick={() => setSelectedTeam(team)}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center font-semibold shadow-lg hover:bg-white/20 hover:scale-105 transition"
            >
              {team}
            </button>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedTeam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-white text-slate-900 rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 flex items-center justify-between">
              <h3 className="font-bold text-lg">{selectedTeam}</h3>
              <button
                onClick={() => setSelectedTeam(null)}
                className="text-xl font-bold hover:scale-110 transition"
              >
                ✕
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <ul className="space-y-3">
                {(teamMatches[selectedTeam] || ["No matches scheduled"]).map(
                  (match, idx) => (
                    <li
                      key={idx}
                      className="bg-slate-100 rounded-xl p-3 text-sm shadow"
                    >
                      {match}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 py-6 text-center text-sm text-blue-300 bg-black/20">
        © Para Volleyball Association of Coimbatore
      </footer>
    </main>
  );
}
