import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Compass, Film, Radio } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-zinc-800/80 py-4 px-6 md:px-12 flex justify-between items-center">
      {/* Brand Logo */}
      <Link to="/" className="group flex items-center gap-3">
        <div className="relative w-8 h-8 rounded-full bg-orange-600/10 border border-orange-500/30 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-orange-600 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
          <span className="relative text-xs font-mono font-bold text-orange-500 group-hover:text-black transition-colors duration-300">
            AC
          </span>
        </div>
        <div>
          <h1 className="text-sm font-display font-bold tracking-tighter text-white uppercase group-hover:text-orange-500 transition-colors duration-200">
            Aayush Choudhary
          </h1>
          <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest hidden sm:block">
            3D Artist & Animator
          </p>
        </div>
      </Link>

      {/* Nav Links */}
      <nav className="flex items-center gap-2 sm:gap-6 font-mono text-xs">
        <Link
          to="/"
          className={`relative px-3 py-1.5 rounded-full transition-colors duration-200 ${
            currentPath === "/" ? "text-orange-500" : "text-zinc-400 hover:text-white"
          }`}
        >
          {currentPath === "/" && (
            <motion.div
              layoutId="nav-bg"
              className="absolute inset-0 bg-orange-600/10 border border-orange-500/20 rounded-full -z-10"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            Home
          </span>
        </Link>

        <Link
          to="/portfolio"
          className={`relative px-3 py-1.5 rounded-full transition-colors duration-200 ${
            currentPath === "/portfolio" ? "text-orange-500" : "text-zinc-400 hover:text-white"
          }`}
        >
          {currentPath === "/portfolio" && (
            <motion.div
              layoutId="nav-bg"
              className="absolute inset-0 bg-orange-600/10 border border-orange-500/20 rounded-full -z-10"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-1.5">
            <Film className="w-3.5 h-3.5" />
            Portfolio
          </span>
        </Link>

        <Link
          to="/blog"
          className={`relative px-3 py-1.5 rounded-full transition-colors duration-200 ${
            currentPath.startsWith("/blog") ? "text-orange-500" : "text-zinc-400 hover:text-white"
          }`}
        >
          {currentPath.startsWith("/blog") && (
            <motion.div
              layoutId="nav-bg"
              className="absolute inset-0 bg-orange-600/10 border border-orange-500/20 rounded-full -z-10"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            Insights
          </span>
        </Link>
      </nav>

      {/* Quick Status Pill */}
      <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[9px] font-mono text-zinc-400 uppercase tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
        <span>Available for Cinematics</span>
      </div>
    </header>
  );
}
