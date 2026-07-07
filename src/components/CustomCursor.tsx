import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "view" | "play">("default");

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const mouse = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
    };

    // Smooth lerp interpolation loop for the outer ring (inertial drag)
    let animationFrameId: number;
    const updateRing = () => {
      const ease = 0.15; // standard inertial factor
      ring.x += (mouse.x - ring.x) * ease;
      ring.y += (mouse.y - ring.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(updateRing);
    };

    updateRing();

    // Hover state detectors
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const closestLink = target.closest("a, button, [role='button'], .cursor-pointer");
      if (closestLink) {
        if (closestLink.classList.contains("cursor-view")) {
          setCursorType("view");
        } else if (closestLink.classList.contains("cursor-play")) {
          setCursorType("play");
        } else {
          setCursorType("hover");
        }
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Core inner pinpoint */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-orange-500 rounded-full pointer-events-none z-[99999] transition-transform duration-100 mix-blend-difference"
      />

      {/* 2. Soft trailing magnetic circle */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -ml-5 -mt-5 rounded-full pointer-events-none z-[99998] flex items-center justify-center transition-all duration-300 ease-out border border-orange-500/50"
        style={{
          width: cursorType === "default" ? "40px" : cursorType === "hover" ? "60px" : "80px",
          height: cursorType === "default" ? "40px" : cursorType === "hover" ? "60px" : "80px",
          backgroundColor: cursorType === "default" ? "rgba(255, 77, 0, 0.0)" : cursorType === "hover" ? "rgba(255, 77, 0, 0.08)" : "rgba(255, 77, 0, 0.95)",
          borderColor: cursorType === "default" ? "rgba(255, 77, 0, 0.5)" : "rgba(255, 77, 0, 1)",
          boxShadow: cursorType !== "default" ? "0 0 15px rgba(255, 77, 0, 0.3)" : "none",
        }}
      >
        {/* Dynamic labels in case of viewing/interactive clicks */}
        {(cursorType === "view" || cursorType === "play") && (
          <span className="text-[10px] font-mono font-black text-black tracking-widest uppercase">
            {cursorType}
          </span>
        )}
      </div>
    </>
  );
}
