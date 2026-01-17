"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `transition font-semibold ${
      pathname === path
        ? "text-white border-b-2 border-white pb-1"
        : "text-white/80 hover:text-white"
    }`;

  const mobileLinkClass = (path: string) =>
    `block py-2 font-semibold transition ${
      pathname === path
        ? "text-white bg-white/20 rounded-lg px-3"
        : "text-white/80 hover:text-white px-3"
    }`;

  return (
    <nav className="bg-[#0076fe] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-white text-xl font-extrabold tracking-widest uppercase">
          CCT
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/teams" className={linkClass("/teams")}>
            Teams
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0076fe] px-4 pb-4 space-y-1">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={mobileLinkClass("/")}
          >
            Home
          </Link>
          <Link
            href="/teams"
            onClick={() => setOpen(false)}
            className={mobileLinkClass("/teams")}
          >
            Teams
          </Link>
        </div>
      )}
    </nav>
  );
}
