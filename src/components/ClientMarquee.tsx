import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface ClientMarqueeProps {
  isLightTheme?: boolean;
}

const CLIENT_LIST_1 = [
  "RIOT GAMES",
  "EPIC GAMES",
  "NVIDIA",
  "ACTIVISION BLIZZARD",
  "UBISOFT",
  "BUNGIE",
  "RESPAWN ENTERTAINMENT",
  "VALVE CORPORATION"
];

const CLIENT_LIST_2 = [
  "ELECTRONIC ARTS",
  "SLEDGEHAMMER GAMES",
  "CD PROJEKT RED",
  "SONY INTERACTIVE",
  "NAUGHTY DOG",
  "INSOMNIAC GAMES",
  "TENCENT GAMES",
  "DECIMA ENGINE LABS"
];

export default function ClientMarquee({ isLightTheme = false }: ClientMarqueeProps) {
  // Duplicate array to enable seamless infinite scrolling loop
  const row1 = [...CLIENT_LIST_1, ...CLIENT_LIST_1, ...CLIENT_LIST_1, ...CLIENT_LIST_1];
  const row2 = [...CLIENT_LIST_2, ...CLIENT_LIST_2, ...CLIENT_LIST_2, ...CLIENT_LIST_2];

  return (
    <section className={`w-full py-16 border-t smooth-transition relative overflow-hidden ${
      isLightTheme 
        ? "border-zinc-100 bg-zinc-50/40" 
        : "border-zinc-900/60 bg-[#020202]"
    }`}>
      {/* Decorative technical grids */}
      <div className={`absolute inset-0 opacity-40 pointer-events-none ${
        isLightTheme ? "blueprint-grid-light" : "blueprint-grid-dark"
      }`} />

      {/* Grid overlay borders */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/15 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-10 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-1.5 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500 font-bold">
              Production Integrity
            </span>
          </div>
          <h4 className={`text-xs font-mono uppercase tracking-widest font-black ${
            isLightTheme ? "text-zinc-800" : "text-zinc-200"
          }`}>
            STUDIOS & CLIENTS COLLABORATIONS
          </h4>
          <p className="text-[10px] font-mono text-zinc-500 mt-1 uppercase">
            Validated game-ready integrations across major pipelines
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="w-full flex flex-col gap-4 relative z-10 select-none overflow-hidden py-2">
        
        {/* Row 1: Left to Right / Normal */}
        <div className={`w-full overflow-hidden flex whitespace-nowrap border-y py-3.5 ${
          isLightTheme 
            ? "border-zinc-100 bg-white" 
            : "border-zinc-900/40 bg-zinc-950/40"
        }`}>
          <div className="animate-marquee flex items-center">
            {row1.map((client, idx) => (
              <div key={`r1-${idx}`} className="flex items-center mx-10">
                <span className={`text-base sm:text-lg font-display font-black tracking-widest uppercase ${
                  isLightTheme 
                    ? "text-zinc-800 hover:text-orange-500" 
                    : "text-zinc-400 hover:text-orange-500"
                } transition-colors cursor-default`}>
                  {client}
                </span>
                <span className="w-1.5 h-1.5 bg-orange-500 rotate-45 ml-10 opacity-70" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left / Reverse */}
        <div className={`w-full overflow-hidden flex whitespace-nowrap border-b py-3.5 ${
          isLightTheme 
            ? "border-zinc-100 bg-white" 
            : "border-zinc-900/40 bg-zinc-950/40"
        }`}>
          <div className="animate-marquee-reverse flex items-center">
            {row2.map((client, idx) => (
              <div key={`r2-${idx}`} className="flex items-center mx-10">
                <span className={`text-base sm:text-lg font-display font-black tracking-widest uppercase ${
                  isLightTheme 
                    ? "text-zinc-800 hover:text-orange-500" 
                    : "text-zinc-400 hover:text-orange-500"
                } transition-colors cursor-default`}>
                  {client}
                </span>
                <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full ml-10 opacity-60" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
