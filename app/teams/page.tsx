"use client";

import { useState } from "react";
import Image from "next/image";
import { teamImages } from "../(components)/constants/image";

export default function TeamsPage() {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);


  const teamColors: Record<string, string> = {
    Coimbatore: "bg-[#0076fe]",
    Chennai: "bg-[#ffdb19] text-black",
    Thoothukudi: "bg-[#8b60f8]",
    Kanyakumari: "bg-[#e51e0b] text-black",
    Vellore: "bg-[#374550]",
    Madurai: "bg-white text-black",
    Ramnad: "bg-[#b565a7]",
    Sivagangai: "bg-[#d66262]",
    Namakkal: "bg-[#385110]",
    Krishnagiri: "bg-[#203838]",
    Tiruppur: "bg-[#d1b48c] text-black",
    Dharmapuri: "bg-[#894c39]",
  };

  const teamsLeft = [
    "Coimbatore",
    "Chennai",
    "Thoothukudi",
    "Kanyakumari",
    "Vellore",
    "Madurai",
  ];

  const teamsRight = [
    "Ramnad",
    "Sivagangai",
    "Namakkal",
    "Krishnagiri",
    "Tiruppur",
    "Dharmapuri",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* CONTENT */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-4">
          <a
            href="/"
            className="inline-block bg-[#0076fe] text-white font-bold px-5 py-2 rounded-full text-sm transition hover:bg-[#005fcc]"
          >
            ← Back
          </a>
        </div>

        <h2 className="text-center text-[#0076fe] text-2xl font-extrabold tracking-widest uppercase mb-1 drop-shadow-md">
          Meet the Teams
        </h2>
        <p className="text-center text-cyan-400 text-sm mb-6">
          Tap team name for player info
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            {teamsLeft.map((team) => (
              <div
                key={team}
                onClick={() => setSelectedTeam(team)}
                className={`cursor-pointer rounded-xl py-4 text-center uppercase font-bold tracking-wide text-sm transition-all hover:-translate-y-1 hover:shadow-xl ${teamColors[team]}`}
              >
                {team === "Thoothukudi" ? "Tuticorin" : team}
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {teamsRight.map((team) => (
              <div
                key={team}
                onClick={() => setSelectedTeam(team)}
                className={`cursor-pointer rounded-xl py-4 text-center uppercase font-bold tracking-wide text-sm transition-all hover:-translate-y-1 hover:shadow-xl ${teamColors[team]}`}
              >
                {team === "Tiruppur" ? "Tirupur" : team}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* MODAL */}
   {selectedTeam && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0076fe] to-[#00a0ff] text-white px-5 py-3 flex items-center justify-between">
        <h5 className="font-bold text-base tracking-wide">{selectedTeam}</h5>
        <button
          onClick={() => setSelectedTeam(null)}
          className="text-white text-lg font-bold hover:scale-110 transition"
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="bg-gray-100 p-4 flex justify-center">
        <Image
          src={teamImages[selectedTeam]}
          alt={`${selectedTeam} players`}
          width={800}
          height={600}
          className="rounded-lg shadow-md w-auto h-auto max-h-[60vh] max-w-full object-contain"
        />
      </div>
    </div>
  </div>
)}


      {/* FOOTER */}
      <footer className="bg-black py-6 border-t border-white/10 mt-12">
        <div className="text-center text-gray-400 text-sm tracking-wide">
          © Para Volleyball Association of Coimbatore
        </div>
      </footer>
    </div>
  );
}
