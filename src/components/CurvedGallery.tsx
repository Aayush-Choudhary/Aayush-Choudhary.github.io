import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { GALLERY_ITEMS, GalleryItem } from "../data";
import { ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface CurvedGalleryProps {
  items?: GalleryItem[];
}

export default function CurvedGallery({ items = GALLERY_ITEMS.slice(0, 6) }: CurvedGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cylinderRef = useRef<HTMLDivElement>(null);

  const [currentAngle, setCurrentAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const dragStartAngle = useRef(0);
  const dragStartX = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  // Constants for 3D physics cylinder
  const itemsCount = items.length;
  const angleStep = 360 / itemsCount;
  
  // Responsive radius calculation
  const [radius, setRadius] = useState(420);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(240); // smaller cylinder for mobile
      } else if (window.innerWidth < 1024) {
        setRadius(340); // tablet
      } else {
        setRadius(440); // desktop
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update active slide index based on rotation angle
  useEffect(() => {
    // Normalize angle to 0 - 360 range
    let normalizedAngle = -currentAngle % 360;
    if (normalizedAngle < 0) normalizedAngle += 360;
    
    // Find closest index
    const closestIdx = Math.round(normalizedAngle / angleStep) % itemsCount;
    setActiveIndex(closestIdx);
  }, [currentAngle, angleStep, itemsCount]);

  // Inertial spin update loop
  useEffect(() => {
    const updateInertia = () => {
      if (!isDragging && Math.abs(velocity.current) > 0.05) {
        velocity.current *= 0.95; // friction factor
        setCurrentAngle((prev) => prev + velocity.current);
      }
      animationFrameId.current = requestAnimationFrame(updateInertia);
    };

    animationFrameId.current = requestAnimationFrame(updateInertia);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isDragging]);

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    dragStartAngle.current = currentAngle;
    lastX.current = clientX;
    lastTime.current = performance.now();
    velocity.current = 0;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;

    const deltaX = clientX - dragStartX.current;
    
    // Scaling drag speed to rotation degree conversion
    const sensitivity = window.innerWidth < 768 ? 0.35 : 0.22;
    const targetAngle = dragStartAngle.current + deltaX * sensitivity;
    
    // Smoothly set angle
    setCurrentAngle(targetAngle);

    // Calculate instantaneous velocity for inertia
    const currentTime = performance.now();
    const timeDelta = currentTime - lastTime.current;
    if (timeDelta > 0) {
      const xDelta = clientX - lastX.current;
      velocity.current = (xDelta / timeDelta) * 6; // drag multiplier
    }

    lastX.current = clientX;
    lastTime.current = currentTime;
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  // Drag listeners
  const onMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleStart(e.touches[0].clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  // Keyboard navigation
  const spinTo = (index: number) => {
    const target = -index * angleStep;
    
    // Find closest path to target angle
    let diff = (target - currentAngle) % 360;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    
    // Set velocity to zero and smoothly transition
    velocity.current = 0;
    
    // GSAP-like smooth interpolation natively in React state
    let count = 0;
    const steps = 25;
    const animateTransition = () => {
      if (count < steps) {
        setCurrentAngle((prev) => prev + diff / steps);
        count++;
        requestAnimationFrame(animateTransition);
      }
    };
    animateTransition();
  };

  return (
    <div 
      className="w-full py-12 flex flex-col items-center justify-center relative select-none overflow-hidden"
      ref={containerRef}
    >
      {/* Absolute indicator labels for 3D navigation */}
      <div className="absolute top-4 left-6 md:left-12 text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
        <span>CYLINDER_PROJ: ACTIVE_V.06</span>
      </div>
      <div className="absolute top-4 right-6 md:right-12 text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
        <span>ITEMS: {activeIndex + 1} / {itemsCount}</span>
      </div>

      {/* Main 3D Stage */}
      <div 
        className="relative flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{
          width: "100%",
          height: window.innerWidth < 640 ? "380px" : "500px",
          perspective: "1800px", // intense perspective for curved cylinder look
          perspectiveOrigin: "50% 30%",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={handleEnd}
      >
        {/* Curved cylinder rotor */}
        <div
          ref={cylinderRef}
          className="relative w-full h-full flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${currentAngle}deg)`,
            transition: isDragging ? "none" : "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          {items.map((item, index) => {
            const cardAngle = index * angleStep;
            const isCenter = index === activeIndex;

            return (
              <div
                key={item.id}
                className="absolute flex flex-col justify-between rounded-2xl overflow-hidden shadow-2xl transition-all duration-500"
                style={{
                  width: window.innerWidth < 640 ? "200px" : "320px",
                  height: window.innerWidth < 640 ? "240px" : "380px",
                  transformStyle: "preserve-3d",
                  transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                  opacity: isCenter ? 1 : 0.45,
                  filter: isCenter ? "none" : "grayscale(30%) brightness(55%)",
                  scale: isCenter ? "1.06" : "0.95",
                  boxShadow: isCenter ? "0 15px 45px rgba(255, 77, 0, 0.25)" : "0 5px 15px rgba(0,0,0,0.5)",
                }}
              >
                {/* Visual Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 hover:scale-110"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable={false}
                  />
                  {/* Elegant Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-95" />
                  <div className="absolute inset-0 bg-orange-600/10 mix-blend-color opacity-30 pointer-events-none" />
                </div>

                {/* Card Top Details */}
                <div className="relative z-10 p-4 sm:p-6 flex justify-end items-start">
                  <span className="text-[10px] font-mono text-zinc-400 font-bold shrink-0 bg-black/40 border border-zinc-800/50 px-2 py-0.5 rounded">
                    {item.year}
                  </span>
                </div>

                {/* Card Bottom Details & ArtStation redirection */}
                <div className="relative z-10 p-4 sm:p-6 mt-auto">
                  <h4 className="text-sm sm:text-lg font-display font-black tracking-tight text-white uppercase mb-1 sm:mb-2 line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-zinc-400 leading-snug line-clamp-2 font-light mb-3">
                    {item.description}
                  </p>

                  <Link
                    to={`/project/${item.id}`}
                    className="cursor-pointer inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-orange-500 hover:text-white uppercase transition-colors"
                  >
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            spinTo((activeIndex - 1 + itemsCount) % itemsCount);
          }}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          className="absolute left-2 sm:left-10 z-30 p-2 sm:p-4 rounded-full bg-black/60 hover:bg-black/80 border border-zinc-800 hover:border-orange-500/50 text-zinc-400 hover:text-orange-500 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.6)] group"
          aria-label="Previous Project"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            spinTo((activeIndex + 1) % itemsCount);
          }}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          className="absolute right-2 sm:right-10 z-30 p-2 sm:p-4 rounded-full bg-black/60 hover:bg-black/80 border border-zinc-800 hover:border-orange-500/50 text-zinc-400 hover:text-orange-500 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.6)] group"
          aria-label="Next Project"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Manual Indicator Controls & Instructions below the gallery (Trionn style navigation) */}
      <div className="flex flex-col items-center gap-6 mt-16 md:mt-24 px-4 z-20 relative">
        <div className="flex flex-wrap max-w-full items-center justify-center gap-2">
          {items.length <= 15 ? (
            items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => spinTo(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex 
                    ? "w-8 bg-orange-500 shadow-[0_0_8px_rgba(255,77,0,0.6)]" 
                    : "w-2.5 bg-zinc-800 hover:bg-zinc-600"
                }`}
                title={`Slide ${idx + 1}`}
              />
            ))
          ) : (
            <div className="flex items-center gap-4 bg-zinc-950/80 backdrop-blur-md border border-zinc-900 px-5 py-2.5 rounded-full text-[10px] font-mono text-zinc-400">
              <button 
                onClick={() => spinTo((activeIndex - 1 + itemsCount) % itemsCount)}
                className="hover:text-orange-500 transition-colors font-bold tracking-widest cursor-pointer"
              >
                PREV
              </button>
              <span className="text-zinc-800">|</span>
              <span className="text-white tracking-widest font-semibold uppercase">
                DATASET {String(activeIndex + 1).padStart(2, "0")} / {String(itemsCount).padStart(2, "0")}
              </span>
              <span className="text-zinc-800">|</span>
              <button 
                onClick={() => spinTo((activeIndex + 1) % itemsCount)}
                className="hover:text-orange-500 transition-colors font-bold tracking-widest cursor-pointer"
              >
                NEXT
              </button>
            </div>
          )}
        </div>

        {/* Swipe/drag instructions */}
        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest animate-pulse">
          ◀ SWIPE OR DRAG ROTOR TO ROTATE DIMENSIONS ▶
        </p>
      </div>
    </div>
  );
}
