import { useEffect, useState } from "react";
import { Volume2, VolumeX, Play, Pause, ExternalLink, RefreshCw } from "lucide-react";

export default function YoutubeShowreelBackground() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timestamp, setTimestamp] = useState("00:00:00");
  const [frameCount, setFrameCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const pad = (n: number) => n.toString().padStart(2, "0");
      const ms = Math.floor(now.getMilliseconds() / 10).toString().padStart(2, "0");
      setTimestamp(`${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}.${ms}`);
      setFrameCount((prev) => (prev + 1) % 9999);
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Construct YouTube URL with parameters to make it auto-loop, autoplay, hide controls, and brandings
  // We use the playlist parameter to ensure looping works without user interaction
  const videoId = "1fc9QiFZ9ZA";
// Replace line 31 with this:
const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&playsinline=1&origin=${window.location.origin}`;
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl select-none bg-black">
      {/* 1. YouTube Iframe Embed Layer */}
      {isPlaying ? (
        <div className="absolute inset-0 w-full h-full pointer-events-none scale-[1.15] md:scale-[1.08] transition-transform duration-1000">
          <iframe
            src={embedUrl}
            title="Aayush Choudhary 3D Showreel"
            className="w-full h-full object-cover border-0 pointer-events-none"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ) : (
        <div className="absolute inset-0 w-full h-full bg-zinc-950 flex flex-col items-center justify-center gap-4">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Feed Paused</p>
          <button 
            onClick={togglePlay}
            className="flex items-center gap-2 px-4 py-2 border border-orange-500/30 hover:border-orange-500 text-orange-500 hover:text-white bg-orange-500/10 rounded-full text-xs font-mono font-bold uppercase transition-all duration-300"
          >
            <Play className="w-3.5 h-3.5" />
            Resume Feed
          </button>
        </div>
      )}

      {/* 2. CRT scanline / Raster scanning overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
            linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))
          `,
          backgroundSize: "100% 4px, 6px 100%",
        }}
      />

      {/* Fine technical blueprint matrix overlay (mesh) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* 3. Dark, moody cinematic gradient overlays */}
      <div className="absolute inset-0 z-10 bg-linear-to-t from-dark via-dark/40 to-dark/80 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(5,5,5,0.65)_85%)] pointer-events-none" />

      {/* Holographic Orange Flare */}
      <div className="absolute top-1/4 right-1/4 w-100 h-100 bg-orange-600/15 blur-[140px] rounded-full pointer-events-none z-10 animate-pulse duration-[8s]" />

      {/* 4. Interactive floating controllers */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2.5">
        <button
          onClick={togglePlay}
          className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-zinc-800/80 hover:border-orange-500 hover:bg-orange-500 hover:text-black flex items-center justify-center text-zinc-300 transition-all duration-300 active:scale-95"
          title={isPlaying ? "Pause Feed" : "Play Feed"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 pl-0.5" />}
        </button>

        <button
          onClick={toggleMute}
          className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-zinc-800/80 hover:border-orange-500 hover:bg-orange-500 hover:text-black flex items-center justify-center text-zinc-300 transition-all duration-300 active:scale-95"
          title={isMuted ? "Unmute Showreel" : "Mute Showreel"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        <a
          href="https://youtu.be/1fc9QiFZ9ZA"
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-zinc-800/80 hover:border-orange-500 hover:bg-orange-500 hover:text-black flex items-center justify-center text-zinc-300 transition-all duration-300 active:scale-95"
          title="Watch on YouTube"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Telemetry metadata readouts */}
      <div className="absolute top-6 left-6 z-20 hidden sm:flex items-center gap-6 font-mono text-[9px] text-zinc-400 tracking-wider">
        <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-zinc-800/60 px-2.5 py-1 rounded-md">
          <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" />
          <span className="text-white font-bold">YOUTUBE SHOWREEL [STREAM]</span>
        </div>
        <div className="bg-black/50 backdrop-blur-md border border-zinc-800/60 px-2.5 py-1 rounded-md">
          <span>TIMECODE: </span>
          <span className="text-orange-500 font-bold">{timestamp}</span>
        </div>
        <div className="bg-black/50 backdrop-blur-md border border-zinc-800/60 px-2.5 py-1 rounded-md hidden md:block">
          <span>FRAME: </span>
          <span className="text-zinc-300 font-bold">{frameCount.toString().padStart(4, "0")}</span>
        </div>
      </div>

      <div className="absolute top-6 right-6 z-20 hidden sm:flex items-center gap-3 font-mono text-[9px] text-zinc-500">
        <div className="bg-black/50 backdrop-blur-md border border-zinc-800/60 px-2.5 py-1 rounded-md">
          <span>RENDER_ENGINE: OCTANE</span>
        </div>
      </div>
    </div>
  );
}
