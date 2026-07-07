import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS } from "../data";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, Calendar, Clock, ChevronRight, Share2, Check } from "lucide-react";

export default function SingleArticle() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);

  // Fallback if slug does not match any blog post
  if (!post) {
    return (
      <div className="w-full min-h-screen bg-[#050505] flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-4xl font-display font-bold text-white mb-4">
          ARTICLE_NOT_FOUND
        </h1>
        <p className="text-sm text-zinc-500 font-mono mb-8 max-w-sm">
          The requested system log entry does not exist or has been archived.
        </p>
        <Link
          to="/blog"
          className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-black text-xs font-mono font-bold uppercase transition-colors"
        >
          Return to Blog Logs
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] pt-32 pb-24 px-4 sm:px-6 md:px-12">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <article className="max-w-3xl mx-auto">
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-2 text-[9px] font-mono text-zinc-500 mb-8 uppercase tracking-widest">
          <Link to="/" className="hover:text-orange-500 transition-colors">
            PORTFOLIO
          </Link>
          <ChevronRight className="w-3 h-3 text-zinc-700" />
          <Link to="/blog" className="hover:text-orange-500 transition-colors">
            INSIGHTS
          </Link>
          <ChevronRight className="w-3 h-3 text-zinc-700" />
          <span className="text-white font-semibold truncate max-w-[200px]">
            {post.id}
          </span>
        </div>

        {/* Dynamic header animation block in a bento outline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 bg-zinc-950 border border-zinc-900 rounded-3xl p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-600/5 blur-2xl rounded-full pointer-events-none" />

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 mb-6 uppercase">
            <span className="text-orange-500 bg-orange-500/5 px-2.5 py-1 border border-orange-500/20 rounded">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          {/* Majestic Oversized Header */}
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tighter leading-tight mb-6">
            {post.title}
          </h1>

          {/* Standfirst Summary (larger, italic/muted font) */}
          <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed border-l-2 border-orange-500 pl-6 italic">
            {post.summary}
          </p>
        </motion.div>

        {/* Main Content Body */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-sm sm:text-base text-zinc-300 font-light leading-relaxed tracking-wide bg-zinc-900/10 border border-zinc-900 rounded-3xl p-8 md:p-10"
        >
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-justify leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Article Footer & Actions */}
        <div className="mt-12 pt-8 border-t border-zinc-800/80 flex flex-wrap justify-between items-center gap-6">
          <Link
            to="/blog"
            className="group flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            BACK TO INSIGHTS
          </Link>

          {/* Custom sharing / copy-link interactions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs font-mono text-zinc-300 hover:border-orange-500/50 hover:text-orange-500 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>COPIED LINK!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>SHARE LINK</span>
                </>
              )}
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
