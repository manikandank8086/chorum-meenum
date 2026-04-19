"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

interface CanvasScrollytellingProps {
  frameCount: number;
}

export const CanvasScrollytelling: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Handle video readiness more robustly
    const handleLoadedMetadata = () => {
      setIsLoading(false);
      video.play().catch(e => console.warn("Auto-play blocked", e));
    };

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    const unsubscribe = smoothProgress.on("change", (v) => {
      if (video.duration) {
        // Use a safe range for currentTime
        video.currentTime = Math.max(0, Math.min(video.duration - 0.1, v * video.duration));
      }
    });

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      unsubscribe();
    };
  }, [smoothProgress]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#050505]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]">
             <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl font-bold tracking-tighter text-white mb-4 font-outfit"
            >
              CHORUM MEENUM
            </motion.div>
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-white animate-pulse w-full"
              />
            </div>
            <div className="mt-4 text-xs text-white/40 uppercase tracking-widest">Loading Cinematic Experience...</div>
          </div>
        )}
        
        <video
          ref={videoRef}
          src="/video-3.mp4"
          muted
          playsInline
          autoPlay
          loop
          className="h-full w-full object-cover"
        />

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />

        {/* Text Overlays */}
        <div className="absolute inset-0 pointer-events-none">
            {/* Beat A: 0-20% */}
            <SceneText 
                progress={scrollYProgress} 
                range={[0, 0.2]} 
                title="CHORUM MEENUM" 
                subtitle="Authentic Kerala Taste in Every Bite" 
            />
            
            {/* Beat B: 25-45% */}
            <SceneText 
                progress={scrollYProgress} 
                range={[0.25, 0.45]} 
                title="HANDCRAFTED MASALA" 
                subtitle="Freshly ground spices, raw Kerala flavor" 
            />
            
            {/* Beat C: 50-70% */}
            <SceneText 
                progress={scrollYProgress} 
                range={[0.5, 0.7]} 
                title="PERFECTLY FRIED" 
                subtitle="Crispy outside, tender inside" 
            />
            
            {/* Beat D: 75-95% */}
            <SceneText 
                progress={scrollYProgress} 
                range={[0.75, 0.95]} 
                title="TASTE THE TRADITION" 
                subtitle="Experience the magic of Chorum Meenum" 
                showCTA
            />
        </div>
      </div>
    </div>
  );
};

const SceneText = ({ progress, range, title, subtitle, showCTA = false }: any) => {
    const start = Math.max(0, range[0]);
    const end = Math.min(1, range[1]);
    const fadeInStart = Math.max(0, start - 0.05);
    const fadeOutEnd = Math.min(1, end + 0.05);

    const transformRange = [fadeInStart, start, end, fadeOutEnd];
    
    const opacity = useTransform(progress, transformRange, [0, 1, 1, 0]);
    const y = useTransform(progress, transformRange, [20, 0, 0, -20]);

    // Split title for color effect
    const words = title.split(" ");

    return (
        <motion.div 
            style={{ opacity, y }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
            <h2 className="text-6xl md:text-9xl font-bold font-outfit tracking-tighter mb-4 drop-shadow-2xl">
                {words.map((word: string, i: number) => (
                  <span 
                    key={i} 
                    style={{ color: i % 2 === 0 ? "#facc15" : "#22c55e" }}
                    className="inline-block"
                  >
                    {word}{" "}
                  </span>
                ))}
            </h2>
            <p className="text-xl md:text-2xl text-white font-inter max-w-2xl drop-shadow-lg">
                {subtitle}
            </p>
            {showCTA && (
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 px-8 py-4 bg-white text-black font-bold rounded-full pointer-events-auto"
                >
                    Explore Menu
                </motion.button>
            )}
        </motion.div>
    );
};
