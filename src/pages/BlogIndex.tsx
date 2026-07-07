import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../data";
import { motion } from "motion/react";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";

export default function BlogIndex() {
  return (
    <div className="w-full min-h-screen bg-[#050505] pt-32 pb-24 px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Background ambient light flare */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Header / Intro */}
        <div className="mb-12 bg-zinc-950 border border-zinc-900 rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/5 blur-3xl rounded-full pointer-events-none" />
          
          <div className="flex items-center gap-2 mb-4 relative z-10">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse shadow-[0_0_8px_rgba(234,88,12,0.8)]" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-500 uppercase font-bold">
              Digital Logs & Technical Insights
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tighter uppercase mb-4 relative z-10">
            INSIGHTS // LOGS
          </h1>
          
          <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl leading-relaxed relative z-10">
            Diving into advanced procedural workflows, detailed hard-surface modeling pipelines, and kinetic camera choreography simulations for modern animation.
          </p>
        </div>

        {/* Minimalist, typography-driven list in card format with cursor actions */}
        <div className="flex flex-col gap-4">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-view group bg-zinc-900/20 border border-zinc-900 hover:border-orange-500/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 relative"
            >
              <Link to={`/blog/${post.slug}`} className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  {/* Category and date row */}
                  <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-zinc-500 mb-4 uppercase tracking-wider">
                    <span className="text-orange-500 bg-orange-500/5 px-2 py-0.5 border border-orange-500/20 rounded">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Oversized Hover Title */}
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-orange-500 transition-colors duration-200 tracking-tight mb-3">
                    {post.title}
                  </h2>

                  {/* Narrative Summary */}
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                {/* Kinetic Link Icon */}
                <div className="flex items-center self-start md:self-center">
                  <div className="w-11 h-11 rounded-full border border-zinc-900 group-hover:border-orange-500/50 flex items-center justify-center bg-zinc-950 group-hover:bg-orange-500/5 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
