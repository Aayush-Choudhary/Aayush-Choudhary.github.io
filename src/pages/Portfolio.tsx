import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, LayoutGrid, Disc, Compass, ArrowUpRight, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import CurvedGallery from "../components/CurvedGallery";
import ClientMarquee from "../components/ClientMarquee";
import { GALLERY_ITEMS } from "../data";

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsLoaded(true);
  }, []);

  // Split the first 6 projects for the interactive Cylinder, and show all projects in the Grid Below
  const selectedProductions = GALLERY_ITEMS.slice(0, 6);
  const archiveCompendium = GALLERY_ITEMS;

  // Derive unique categories from the compendium
  const categories = ["All", ...Array.from(new Set(archiveCompendium.flatMap(item => item.categories)))];

  // Filter the archive items based on search query and selected category
  const filteredArchive = archiveCompendium.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white selection:bg-orange-500 selection:text-black relative overflow-y-auto overflow-x-hidden font-sans flex flex-col justify-between">
      
      {/* Immersive background frame (without video) */}
      <div className="absolute top-0 left-0 right-0 h-[100vh] z-0 p-4 sm:p-6 md:p-8">
        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-zinc-900/50 shadow-2xl bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
          {/* Subtle blueprint grid overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none blueprint-grid-dark" />
          
          {/* Moody cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(5,5,5,0.7)_85%)] pointer-events-none" />
          
          {/* Holographic Orange Flare */}
          <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-orange-600/10 blur-[130px] rounded-full pointer-events-none z-10 animate-pulse duration-[8s]" />
        </div>
      </div>

      {/* 5. SELECTED PRODUCTIONS CAROUSEL SECTION */}
      <section className="relative z-10 w-full pt-28 pb-20 px-6 md:px-12 lg:px-24 border-b border-zinc-900 bg-[#020202]/40 overflow-hidden smooth-transition">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping" />
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-orange-500 font-extrabold">
                  Hand Picked Selection 2026
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase select-none leading-none">
                SELECTED <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-red-600">PRODUCTIONS</span>
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 font-mono font-medium max-w-md md:text-right md:ml-auto leading-relaxed border-l-2 md:border-l-0 md:border-r-2 border-orange-500/55 pl-4 md:pl-0 md:pr-4">
              A hand-picked selection of our top 6 signature models showcased inside a responsive three-dimensional curved cylinder layout.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full"
          >
            <CurvedGallery items={selectedProductions} />
          </motion.div>
        </div>
      </section>

      {/* Cylinder Navigation Hints */}
      <div className="relative z-10 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-zinc-500">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-zinc-800/40 px-3 py-1 rounded-full">
            <Compass className="w-3.5 h-3.5 text-orange-500" />
            <span>DRAG THE CYLINDER CAROUSEL OR SCROLL TO ROTATE</span>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-zinc-800/40 px-3 py-1 rounded-full text-zinc-400 font-bold">
          <Disc className="w-3 h-3 text-red-500 animate-spin" />
          <span>PRODUCTIONS LOADED: 06</span>
        </div>
      </div>

      {/* Unique Archive Grid Layout Below */}
      <section className="relative z-10 w-full bg-[#030303] border-t border-zinc-900/60 pt-24 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.03),rgba(255,255,255,0))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                  Secure Compendium Archive
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white uppercase">
                PRODUCTION <br />
                <span className="text-zinc-500">COMPENDIUM</span>
              </h2>
            </div>
            
            <div className="text-[11px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-900 px-4 py-2 rounded-xl">
              DATABASE RECORDS: <span className="text-orange-500 font-black">{filteredArchive.length}</span> / {archiveCompendium.length} ASSETS
            </div>
          </div>

          {/* Controls: Search & Category Filter */}
          <div className="flex flex-col gap-6 mb-12 bg-zinc-950/40 border border-zinc-900/60 p-6 rounded-2xl backdrop-blur-md">
            {/* Search Input */}
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input 
                type="text"
                placeholder="Search database (e.g. Vandal, Phantom, Dagger, Steampunk)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-900 focus:border-orange-500/50 rounded-xl py-3.5 pl-12 pr-4 text-xs font-mono tracking-wider text-white placeholder-zinc-600 outline-none transition-all"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mr-2 hidden sm:inline-block">
                FILTER INDEX:
              </span>
              {categories.map((cat) => {
                const count = cat === "All" 
                  ? archiveCompendium.length 
                  : archiveCompendium.filter(item => item.categories.includes(cat)).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                      selectedCategory === cat 
                        ? "bg-orange-500 text-black font-extrabold shadow-[0_0_12px_rgba(255,77,0,0.3)]" 
                        : "bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800"
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid Layout of Archive */}
          {filteredArchive.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full text-center py-20 border border-dashed border-zinc-900 rounded-3xl"
            >
              <div className="text-zinc-600 font-mono text-xs uppercase mb-3">No asset entries matched your sequence</div>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="text-xs font-mono font-bold text-orange-500 hover:underline cursor-pointer"
              >
                RESET QUERY PARAMETERS
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredArchive.map((item, index) => {
                  // Find index in original database for beautiful sequence numbers (e.g. REC_07)
                  const globalIdx = GALLERY_ITEMS.findIndex(g => g.id === item.id) + 1;
                  const formattedIdx = String(globalIdx).padStart(2, "0");

                  return (
                    <motion.div
                      layout
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: index * 0.03 }}
                      className="group relative flex flex-col justify-between bg-zinc-950/25 border border-zinc-900/80 hover:border-orange-500/30 rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
                    >
                      {/* Image Frame */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none"
                          onContextMenu={(e) => e.preventDefault()}
                          draggable={false}
                        />
                        {/* Shaders overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                        <div className="absolute inset-0 bg-orange-600/5 group-hover:bg-orange-600/10 mix-blend-color opacity-30 pointer-events-none transition-colors" />
                        
                        <div className="absolute top-4 right-4 text-[9px] font-mono text-zinc-500 bg-zinc-950/90 border border-zinc-900 px-2 py-0.5 rounded font-black">
                          DATA_{formattedIdx}
                        </div>
                      </div>

                      {/* Content Frame */}
                      <div className="p-5 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-display font-black uppercase text-zinc-100 tracking-tight group-hover:text-orange-500 transition-colors line-clamp-1">
                              {item.title.split("-")[0].trim()}
                            </h3>
                            <span className="text-[10px] font-mono text-zinc-500 font-bold ml-2">
                              {item.year}
                            </span>
                          </div>
                          
                          <p className="text-[11px] text-zinc-400 font-light leading-relaxed mb-4 line-clamp-2">
                            {item.description}
                          </p>

                          {/* Separate tiles under the description */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {item.categories.map((cat, catIdx) => (
                              <span 
                                key={catIdx} 
                                className="text-[9px] font-mono text-orange-500 bg-orange-950/30 border border-orange-500/20 px-2.5 py-1 rounded-md uppercase tracking-wider font-semibold hover:bg-orange-950/50 transition-colors"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Interactive Trigger */}
                        <div className="pt-3 border-t border-zinc-900/60 flex items-center justify-between">
                          <Link
                            to={`/project/${item.id}`}
                            className="inline-flex items-center gap-1.5 text-[10px] font-mono font-black text-orange-500 hover:text-white uppercase transition-all"
                          >
                            <span>Inspect Specs</span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </Link>
                          
                          <a 
                            href={item.artstationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[9px] font-mono text-zinc-600 hover:text-zinc-400 uppercase transition-colors"
                          >
                            ARTSTATION ↗
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* CLIENT MARQUEE SCROLL */}
      <ClientMarquee isLightTheme={false} />

      {/* Persistent Page Footer */}
      <footer className="relative z-10 py-12 border-t border-zinc-950 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              © {new Date().getFullYear()} Aayush Choudhary. All rights reserved.
            </p>
            <p className="text-[9px] font-mono text-zinc-600 uppercase mt-1">
              PRODUCTIONS RENDERED LIVE AT INTERACTIVE MEMORY POOL CONTROLS
            </p>
          </div>
          <div className="flex gap-6 text-[10px] font-mono">
            <Link to="/" className="text-zinc-500 hover:text-white transition-colors">HOME</Link>
            <span className="text-zinc-800">|</span>
            <Link to="/portfolio" className="text-orange-500 hover:text-white transition-colors">PORTFOLIO</Link>
            <span className="text-zinc-800">|</span>
            <a href="https://www.artstation.com/aayush_dgamer" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">ARTSTATION</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
