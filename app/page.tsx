import Image from "next/image";
import Navbar from "./(components)/navbar";
// import backgroundImage from "../public/images/background.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-[Montserrat] overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-4">
        {/* Background Image */}
        {/* <Image
          src={backgroundImage}
          alt="Background"
          fill
          priority
          className="object-cover"
        /> */}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0076fe]/75 to-black/90"></div>

        {/* Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] animate-pulse"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block bg-white/10 backdrop-blur-lg px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
            Official Tournament Platform
          </span>

          <h1 className="text-[clamp(32px,6vw,64px)] font-black uppercase tracking-widest text-[#0076fe] drop-shadow-2xl mb-3">
            Covai Challengers Trophy
          </h1>

          <p className="text-[clamp(18px,3vw,28px)] font-bold tracking-wider mb-6">
            Para Volleyball Championship
          </p>

          <p className="max-w-3xl mx-auto text-[clamp(14px,2.5vw,20px)] leading-relaxed font-medium mb-10">
            Your central hub for teams, pools, fixtures, and tournament updates — all in one powerful platform.
          </p>
        </div>
      </section>

      {/* TOURNAMENT EDITIONS */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-lg font-extrabold uppercase tracking-widest text-[#0076fe] mb-4">
            Tournament Editions
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-gray-300 leading-relaxed mb-12">
            Explore past and upcoming seasons of the Covai Challengers Trophy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {/* 2025 CARD */}
            <div className="relative bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-10 text-center shadow-2xl border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,118,254,0.35)]">
              <span className="absolute top-4 right-4 bg-gradient-to-r from-[#00ff9c] to-[#00c37a] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Completed
              </span>
              <h3 className="text-5xl font-black mb-4">2025</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                The thrilling 2025 season concluded with unforgettable matches.
              </p>
              <a
                href="/tournament2025"
                className="inline-block bg-[#0076fe] text-white rounded-full px-8 py-3 font-bold uppercase tracking-wider transition-all hover:bg-[#005acc] hover:-translate-y-1 hover:shadow-xl"
              >
                View 2025 Tournament
              </a>
            </div>

            {/* 2026 CARD */}
            <div className="relative bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-10 text-center shadow-2xl border border-white/10 opacity-95 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,152,0,0.35)]">
              <span className="absolute top-4 right-4 bg-gradient-to-r from-[#ff9800] to-[#ff5722] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Upcoming
              </span>
              <h3 className="text-5xl font-black mb-4">2026</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Get ready for the next edition of the Covai Challengers Trophy!
              </p>
              <span className="inline-block bg-[#444] text-gray-400 rounded-full px-8 py-3 font-bold uppercase tracking-wider cursor-not-allowed">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm tracking-wide">
          © Para Volleyball Association of Coimbatore
        </div>
      </footer>
    </div>
  );
}
