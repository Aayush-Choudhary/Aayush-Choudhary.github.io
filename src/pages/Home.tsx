import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ARSENAL_ITEMS, BLOG_POSTS, GALLERY_ITEMS } from "../data";
import ShowreelBackground from "../components/ShowreelBackground";
import CurvedGallery from "../components/CurvedGallery";
import ClientMarquee from "../components/ClientMarquee";
import { 
  Cpu, Flame, Layers, Award, Clock, Users, Shield, 
  ArrowUpRight, ExternalLink, Linkedin, Sparkles, MoveRight, HelpCircle, 
  Check, Moon, Sun, Monitor, Radio
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Theme state: dark vs. light
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [copiedStatus, setCopiedStatus] = useState(false);
  const [hoveredArsenal, setHoveredArsenal] = useState<string | null>("houdini");

  // Telemetry status variables
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleCopyMail = () => {
    navigator.clipboard.writeText("aayush.choudhary@sickritstuido.in");
    setCopiedStatus(true);
    setTimeout(() => setCopiedStatus(false), 2000);
  };

  const toggleTheme = () => {
    setIsLightTheme((prev) => !prev);
  };

  return (
    <div 
      className={`w-full min-h-screen smooth-transition relative ${
        isLightTheme ? "blueprint-grid-light text-zinc-900" : "blueprint-grid-dark text-white"
      }`}
      ref={scrollContainerRef}
    >
      {/* 1. TOP GLOBAL NOTIFIER / HEADER EXTENSION WITH MODE SWITCHER */}
      <div className={`fixed top-18 left-0 w-full z-40 px-6 md:px-12 py-2 flex justify-between items-center text-[9px] font-mono border-b uppercase tracking-wider smooth-transition ${
        isLightTheme ? "bg-white/70 backdrop-blur-md border-zinc-200 text-zinc-500" : "bg-black/70 backdrop-blur-md border-zinc-900 text-zinc-500"
      }`}>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping" />
          <span>SIZZLE REEl RENDER: ACTIVE</span>
        </div>
        
        {/* Dynamic theme switch toggle (Trionn Award Style) */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">THEME MODE:</span>
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all duration-300 ${
              isLightTheme 
                ? "bg-zinc-100 hover:bg-zinc-200 border-zinc-300 text-zinc-900" 
                : "bg-zinc-900 hover:bg-zinc-800 border-zinc-800 text-white"
            }`}
          >
            {isLightTheme ? (
              <>
                <Moon className="w-3 h-3 text-orange-500" />
                <span>GO DARK</span>
              </>
            ) : (
              <>
                <Sun className="w-3 h-3 text-amber-500" />
                <span>GO BRIGHT</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. DYNAMIC MOUSE COORDINATES FLOATER */}
      <div className={`fixed bottom-4 left-6 z-30 hidden lg:block text-[9px] font-mono uppercase tracking-widest pointer-events-none select-none smooth-transition ${
        isLightTheme ? "text-zinc-400" : "text-zinc-600"
      }`}>
        X: {mousePosition.x} / Y: {mousePosition.y} | PROJ: AAYUSH_CHOUDHARY
      </div>
    
      {/* 3. HERO SHOWREEL SECTION */}
      <section className="relative w-full min-h-screen flex flex-col justify-end pt-52 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        
        {/* Live dynamic Showreel acting as interactive background */}
        <div className="absolute inset-0 bottom-0 top-20 z-0 p-4 sm:p-6 md:p-8">
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-zinc-900/50 shadow-2xl">
            <ShowreelBackground />
          </div>
        </div>

        {/* Hero content positioned on top of Showreel overlay */}
        <div className="relative z-20 max-w-7xl mx-auto w-full mt-auto flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-orange-500 font-mono font-extrabold bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full">
                Showreel 2026
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-7xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter text-white uppercase select-none">
              AAYUSH<br />
              CHOUDHARY
            </h1>
            
            <p className="text-sm sm:text-base text-zinc-300 font-light mt-6 max-w-xl leading-relaxed">
              Hi, I'm Aayush. A generalist 3D Artist and Motion Graphic Aritst specializing in Lighitng and LookDevelopemnt, procedurally simulated chaotic environments, real-time kinetic layouts, Compositing and hyper-detailed surfaceing.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-black font-mono text-xs font-black uppercase rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(255,77,0,0.25)] active:scale-95"
              >
                <span>Explore 3D Portfolio</span>
                <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Socials & quick action links with high-end interaction */}
          <div className="flex flex-col gap-3 min-w-60">
            <a
              href="https://www.artstation.com/aayush_dgamer"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-zinc-800/80 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-800 text-white">
                  <Monitor className="w-4 h-4 text-orange-500" />
                </div>
                <div className="text-left font-mono">
                  <p className="text-[9px] text-zinc-500 uppercase font-bold">Inspect Work</p>
                  <p className="text-xs text-white uppercase font-bold">ARTSTATION</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/in/aayush-c/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-zinc-800/80 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-800 text-white">
                  <Linkedin className="w-4 h-4 text-sky-500" />
                </div>
                <div className="text-left font-mono">
                  <p className="text-[9px] text-zinc-500 uppercase font-bold">Contact & Info</p>
                  <p className="text-xs text-white uppercase font-bold">LINKEDIN</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

        </div>
      </section>

      {/* 4. MARQUEE BANNER (TRIONN EXQUISITE TRADEMARK STYLE) */}
      <div className={`w-full py-1 bg-transparent select-none z-10 flex flex-col gap-3 my-8 smooth-transition`}>
        <div className={`relative w-full overflow-hidden border-y py-4 smooth-transition ${
          isLightTheme ? "bg-white border-zinc-200" : "bg-zinc-950 border-zinc-900"
        }`}>
          <div className="animate-marquee whitespace-nowrap flex gap-12 text-5xl sm:text-7xl font-display font-black tracking-tighter uppercase">
            <span className={isLightTheme ? "text-zinc-900" : "text-white"}>CINEMATIC PIPELINES</span>
            <span className={isLightTheme ? "text-stroke-light" : "text-stroke"}>WE THINK</span>
            <span className={isLightTheme ? "text-zinc-900" : "text-white"}>PROCEDURAL CGI</span>
            <span className={isLightTheme ? "text-stroke-light" : "text-stroke"}>WE CREATE</span>
            <span className={isLightTheme ? "text-zinc-900" : "text-white"}>LIGHTING CINEMATIC</span>
            <span className={isLightTheme ? "text-stroke-light" : "text-stroke"}>WE DO</span>
            <span className={isLightTheme ? "text-zinc-900" : "text-white"}>MOTION DESIGN</span>
            <span className={isLightTheme ? "text-stroke-light" : "text-stroke"}>WE MOVE</span>
          </div>
        </div>
      </div>

      {/* 5. SELECTED PRODUCTIONS CAROUSEL SECTION */}
      <section className={`relative w-full py-20 px-6 md:px-12 lg:px-24 border-t border-b overflow-hidden smooth-transition ${
        isLightTheme ? "border-zinc-100 bg-zinc-50/20" : "border-zinc-900 bg-[#020202]/40"
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping" />
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-orange-500 font-extrabold">
                  Hand Picked Selection 2026
                </span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase">
                SELECTED <br />
                <span className={isLightTheme ? "text-zinc-400" : "text-zinc-500"}>PRODUCTIONS</span>
              </h3>
            </div>
            
            <Link 
              to="/portfolio" 
              className="group text-[10px] font-mono text-orange-500 hover:text-white flex items-center gap-1.5 uppercase font-bold border-b border-orange-500/30 pb-0.5 transition-colors"
            >
              <span>View Full Compendium</span>
              <MoveRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <CurvedGallery items={GALLERY_ITEMS.slice(0, 6)} />
        </div>
      </section>

      {/* 6. TECHNICAL QUADRANT GRID SYSTEM (db-longbow.webflow.io style) */}
      {/* Pristine off-white/cream white or high-contrast technical grid container */}
      <section className={`relative w-full py-20 px-6 md:px-12 lg:px-24 border-t border-b smooth-transition ${
        isLightTheme ? "border-zinc-200" : "border-zinc-900"
      }`}>
        
        {/* db-longbow coordinate crosshairs */}
        <div className={`absolute top-0 left-1/2 w-px h-full pointer-events-none hidden md:block smooth-transition ${
          isLightTheme ? "bg-zinc-200/80" : "bg-zinc-900/60"
        }`} />
        <div className={`absolute top-1/2 left-0 w-full h-pxinter-events-none hidden md:block smooth-transition ${
          isLightTheme ? "bg-zinc-200/80" : "bg-zinc-900/60"
        }`} />

        {/* Grid labels */}
        <div className="absolute top-4 left-6 text-[9px] font-mono text-zinc-400 select-none">GRID: SECTOR_A // CR_01</div>
        <div className="absolute top-4 right-6 text-[9px] font-mono text-zinc-400 select-none">COORDS: 42.10.N // 15.34.W</div>
        <div className="absolute bottom-4 left-6 text-[9px] font-mono text-zinc-400 select-none">SYS: HOUDINI_SIMULATION_ENGINE</div>
        <div className="absolute bottom-4 right-6 text-[9px] font-mono text-zinc-400 select-none">STAGE_V.08: STABLE</div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-left mb-12">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-orange-500 font-bold block mb-2">
              Integrated Capabilities
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-black tracking-tight uppercase">
              THE ARSENAL & PROFICIENCIES
            </h3>
          </div>

          {/* Quadrants Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            
            {/* QUADRANT 1: SKILLS MATRIX SELECTION */}
            <div className={`p-6 sm:p-8 rounded-3xl smooth-transition ${
              isLightTheme ? "glass-frost-light" : "glass-frost-dark"
            }`}>
              <div className="flex justify-between items-start mb-6 border-b border-zinc-800/20 pb-4">
                <div>
                  <span className="text-[9px] font-mono text-zinc-500 block">QUADRANT_01</span>
                  <h4 className="text-base font-display font-bold uppercase tracking-tight">Digital Instruments</h4>
                </div>
                <Sparkles className="w-4 h-4 text-orange-500" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {ARSENAL_ITEMS.map((item, index) => {
                  const isHovered = hoveredArsenal === item.id;
                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => setHoveredArsenal(item.id)}
                      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isHovered
                          ? "bg-orange-500/10 border-orange-500 shadow-[0_0_15px_rgba(255,77,0,0.1)]"
                          : isLightTheme 
                            ? "bg-white/40 border-zinc-200 hover:border-zinc-400" 
                            : "bg-dark/40 border-zinc-900 hover:border-zinc-800"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[9px] font-mono text-zinc-500">0{index + 1}</span>
                        {item.id === "houdini" && <Flame className="w-3.5 h-3.5 text-orange-500" />}
                        {item.id === "unreal" && <Cpu className="w-3.5 h-3.5 text-sky-500" />}
                        {item.id === "blender" && <Layers className="w-3.5 h-3.5 text-amber-500" />}
                        {item.id === "maya" && <Award className="w-3.5 h-3.5 text-red-500" />}
                      </div>
                      
                      <span className={`text-xs font-display font-bold uppercase block ${isHovered ? "text-orange-500" : ""}`}>
                        {item.name}
                      </span>
                      <div className="w-full bg-zinc-800/20 h-0.5 mt-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-orange-500 h-full transition-all duration-500"
                          style={{ width: `${item.proficiency}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* QUADRANT 2: DEEP LOGICAL DECK OVERVIEWS */}
            <div className={`p-6 sm:p-8 rounded-3xl flex flex-col justify-between smooth-transition ${
              isLightTheme ? "glass-frost-light" : "glass-frost-dark"
            }`}>
              <div>
                <div className="flex justify-between items-start mb-6 border-b border-zinc-800/20 pb-4">
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 block">QUADRANT_02</span>
                    <h4 className="text-base font-display font-bold uppercase tracking-tight">Active Engine Profile</h4>
                  </div>
                  <Cpu className="w-4 h-4 text-orange-500 animate-pulse" />
                </div>

                <AnimatePresence mode="wait">
                  {ARSENAL_ITEMS.map((item) => {
                    if (item.id !== hoveredArsenal) return null;
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <h5 className="text-lg font-display font-black text-orange-500 uppercase tracking-wide">
                          {item.name} // {item.category}
                        </h5>
                        <p className={`text-xs sm:text-sm font-light leading-relaxed ${
                          isLightTheme ? "text-zinc-600" : "text-zinc-300"
                        }`}>
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.tags.map((t) => (
                            <span 
                              key={t} 
                              className={`text-[9px] font-mono px-2.5 py-1 rounded border smooth-transition ${
                                isLightTheme 
                                  ? "bg-zinc-100/50 border-zinc-200 text-zinc-600" 
                                  : "bg-zinc-900/50 border-zinc-800 text-zinc-400"
                              }`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              <div className={`mt-8 pt-4 border-t border-zinc-800/10 flex justify-between items-center text-[10px] font-mono ${
                isLightTheme ? "text-zinc-400" : "text-zinc-500"
              }`}>
                <span>SKILL: DEFINED</span>
                <span>STATUS: STABLE</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. CREDENTIALS, LINKEDIN & COLLABORATIVE BLOCK (db-longbow grid representation) */}
      <section className="relative w-full py-20 px-6 md:px-12 lg:px-24 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* About / Creative Info (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse shadow-[0_0_8px_rgba(234,88,12,0.8)]" />
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">
                  About the Artist
                </span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-display font-black tracking-tighter uppercase mb-6 leading-none">
                BUILDING<br />
                DIGITAL WORLD<br />
                MECHANICS
              </h3>

              <p className={`text-xs sm:text-sm font-light leading-relaxed mb-6 ${
                isLightTheme ? "text-zinc-600" : "text-zinc-400"
              }`}>
                Hi, I am Aayush. Operating globally across VFX agencies, digital boutique studios, and design firms. My work converges at the absolute bleeding edge of high-velocity physics simulations and real-time cinematics. I translate complex physical phenomena into striking audio-visual experiences.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-zinc-800/10">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">
                Social Registers
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.artstation.com/aayush_dgamer"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 border rounded-full text-xs font-mono font-bold uppercase transition-all duration-300 ${
                    isLightTheme 
                      ? "bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-900" 
                      : "bg-zinc-900 hover:bg-zinc-800 border-zinc-800 text-white"
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5 text-orange-500" />
                  <span>ArtStation</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href="https://www.linkedin.com/in/aayush-c/"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 border rounded-full text-xs font-mono font-bold uppercase transition-all duration-300 ${
                    isLightTheme 
                      ? "bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-900" 
                      : "bg-zinc-900 hover:bg-zinc-800 border-zinc-800 text-white"
                  }`}
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-500" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive contact card in bento glass-frost structure (Col Span 7) */}
          <div className={`lg:col-span-7 p-6 sm:p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden smooth-transition ${
            isLightTheme ? "glass-frost-light" : "glass-frost-dark"
          }`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 blur-3xl rounded-full pointer-events-none" />
            
            <div>
              <div className="flex justify-between items-center mb-8 border-b border-zinc-800/20 pb-4">
                <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest font-black">
                  ESTABLISH CO-PRODUCTIONS //
                </span>
                <span className="text-[10px] font-mono text-zinc-400">V.04_LOCK</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-display font-black tracking-tight uppercase mb-4">
                Let's launch custom cinematic pipelines.
              </h4>
              <p className={`text-xs sm:text-sm font-light leading-relaxed mb-8 ${
                isLightTheme ? "text-zinc-600" : "text-zinc-400"
              }`}>
                Seeking procedural design setups, character rigs, particle systems, or full 3D layout staging? Shoot a message to collaborate on production-ready environments or cinematics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-zinc-800/10">
              <button
                onClick={handleCopyMail}
                className="group flex flex-col items-start text-left cursor-pointer"
              >
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                  Official Email Inbox
                </span>
                <span className="text-base sm:text-lg font-mono font-bold text-orange-500 group-hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                  aayush.choudhary@sickritstudio.in
                  {copiedStatus ? (
                    <span className="text-[10px] font-mono text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                      [COPIED!]
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-zinc-400 font-normal">
                      [CLICK TO COPY]
                    </span>
                  )}
                </span>
              </button>

              <a
                href="https://www.linkedin.com/in/aayush-c/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-black text-xs font-mono font-bold uppercase rounded-2xl transition-all duration-300"
              >
                <span>INITIATE CHAT</span>
                <MoveRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 8. RECENT JOURNAL ENTRIES (BENTO WRAPPER) */}
      <section className={`relative w-full py-16 px-6 md:px-12 lg:px-24 border-t smooth-transition ${
        isLightTheme ? "border-zinc-200" : "border-zinc-900"
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-orange-500 font-bold block mb-2">
                Production Diaries
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-black tracking-tight uppercase">
                THE TECHNICAL JOURNAL
              </h3>
            </div>
            <Link 
              to="/blog" 
              className="text-[10px] font-mono text-orange-500 hover:text-white flex items-center gap-1.5 uppercase font-bold border-b border-orange-500/30 pb-0.5"
            >
              All Logs <Radio className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post, index) => (
              <div 
                key={post.id}
                className={`p-6 sm:p-8 rounded-3xl flex flex-col justify-between min-h-65 smooth-transition border hover:border-orange-500/40 ${
                  isLightTheme 
                    ? "bg-white/40 border-zinc-200 hover:bg-white" 
                    : "bg-zinc-900/10 border-zinc-900 hover:bg-zinc-900/30"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4 text-[9px] font-mono text-zinc-500 uppercase">
                    <span className="text-orange-500 bg-orange-500/5 px-2 py-0.5 border border-orange-500/20 rounded font-bold">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`} className="group">
                    <h4 className="text-base font-display font-bold leading-tight group-hover:text-orange-500 smooth-transition uppercase mb-3">
                      {post.title}
                    </h4>
                  </Link>

                  <p className={`text-xs font-light line-clamp-3 leading-relaxed ${
                    isLightTheme ? "text-zinc-500" : "text-zinc-400"
                  }`}>
                    {post.summary}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-zinc-800/10">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-orange-500 hover:text-white uppercase"
                  >
                    <span>Read Technical Log</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT MARQUEE SCROLL */}
      <ClientMarquee isLightTheme={isLightTheme} />

      {/* FOOTER */}
      <footer className={`max-w-7xl mx-auto py-16 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.15em] font-mono border-t smooth-transition ${
        isLightTheme ? "border-zinc-200 text-zinc-500" : "border-zinc-900 text-zinc-500"
      }`}>
        <div className="flex gap-2.5 items-center">
          <div className="w-2 h-2 rounded-full bg-orange-600 shadow-[0_0_8px_rgba(234,88,12,0.8)]" />
          <span>Currently optimizing rigid body dynamics in SideFX Houdini</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="https://www.artstation.com/aayush_dgamer" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition-colors">
            ARTSTATION
          </a>
          <a href="https://www.linkedin.com/in/aayush-c/" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition-colors">
            LINKEDIN
          </a>
        </div>

        <div>
          © {new Date().getFullYear()} Aayush Choudhary . Artist // Generalist
        </div>
      </footer>
    </div>
  );
}
