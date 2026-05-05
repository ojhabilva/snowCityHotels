"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Adv2, Discover5, Plan1, Plan2 } from "@/constent/graphic";
import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const activities = [
  {
    title: "Skiing",
    desc: "Experience the thrill of skiing in the snow-covered slopes of Solang Valley. Perfect for both beginners and adventure lovers, Manali offers professional guidance, quality equipment, and breathtaking Himalayan views.",
    image: Adv2.src,
  },
  {
    title: "River Rafting",
    desc: "Navigate the roaring rapids of the Beas River through stunning gorges. With grades ranging from I to IV, it's an adrenaline rush for all experience levels amidst raw Himalayan wilderness.",
    image: Discover5.src,
  },
  {
    title: "Para Gliding",
    desc: "Soar above the Kullu Valley with panoramic views of snow-capped peaks. Tandem flights with certified pilots make this accessible to first-timers seeking a sky-high memory.",
    image: Plan1.src,
  },
  {
    title: "Trekking",
    desc: "Traverse ancient trails through alpine meadows, dense forests, and high-altitude passes. From Jogini Falls to Hampta Pass, Manali is a trekker's paradise year-round.",
    image: Plan2.src,
  },
];

const INTERVAL = 4000;
const SLIDE_DURATION = 600;

export default function AdventureSection() {
  const [active, setActive] = useState(0);
  const [search, setSearch] = useState("");
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);

  const [layers, setLayers] = useState<{ image: string; id: number; translateX: string }[]>([{ image: activities[0].image, id: 0, translateX: "0%" }]);

  const isAnimating = useRef(false);
  const layerCounter = useRef(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Detect screen size
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTab(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const preloadImage = (src: string) =>
    new Promise<void>((res) => {
      const img = new Image();
      img.src = src;
      img.onload = () => res();
    });

  const goTo = useCallback(
    async (idx: number, dir: "left" | "right") => {
      if (idx === active || isAnimating.current) return;
      isAnimating.current = true;

      const next = activities[idx];
      await preloadImage(next.image);

      const id = layerCounter.current++;
      const enterFrom = dir === "right" ? "100%" : "-100%";

      setActive(idx);
      setLayers((prev) => [
        ...prev,
        { image: next.image, id, translateX: enterFrom },
      ]);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setLayers((prev) =>
            prev.map((l) =>
              l.id === id
                ? { ...l, translateX: "0%" }
                : { ...l, translateX: dir === "right" ? "-100%" : "100%" }
            )
          );
        });
      });

      setTimeout(() => {
        setLayers([{ image: next.image, id, translateX: "0%" }]);
        isAnimating.current = false;
      }, SLIDE_DURATION + 50);
    },
    [active]
  );

  const goNext = useCallback(() => {
    goTo((active + 1) % activities.length, "right");
  }, [active, goTo]);

  const goPrev = useCallback(() => {
    goTo((active - 1 + activities.length) % activities.length, "left");
  }, [active, goTo]);

  const startProgress = useCallback(() => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);
    const step = 100 / (INTERVAL / 50);
    progressRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(progressRef.current!); return 100; }
        return p + step;
      });
    }, 50);
  }, []);

  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      return;
    }
    startProgress();
    timerRef.current = setInterval(goNext, INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [goNext, paused, startProgress]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    if (!paused) {
      startProgress();
      timerRef.current = setInterval(goNext, INTERVAL);
    }
  }, [goNext, paused, startProgress]);

  const handleCardClick = (i: number) => {
    if (isMobile) return; // on mobile, swipe controls slide
    const dir = i > active ? "right" : "left";
    goTo(i, dir);
    resetTimer();
  };

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? goNext() : goPrev();
      resetTimer();
    }
    touchStartX.current = null;
  };

  // Card layout config per breakpoint
  const getCardStyle = (i: number) => {
    const isActive = i === active;
    if (isMobile) {
      return { width: "85vw", height: "55vh", display: isActive ? "flex" : "none" };
    }
    if (isTab) {
      return {
        width: isActive ? "44%" : "28%",
        height: "52vh",
        maxHeight: 400,
      };
    }
    return {
      width: isActive ? "26%" : "17%",
      height: "68vh",
      maxHeight: 480,
    };
  };

  return (
    <section
      className="relative w-full overflow-hidden text-white"
      style={{ minHeight: isMobile ? "100svh" : "100vh" }}
      id="packages"
      onMouseEnter={() => !isMobile && setPaused(true)}
      onMouseLeave={() => !isMobile && setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── SLIDING BACKGROUNDS ── */}
      {layers.map((layer) => (
        <img
          key={layer.id}
          src={layer.image}
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: `translateX(${layer.translateX})`,
            transition: `transform ${SLIDE_DURATION}ms cubic-bezier(0.77, 0, 0.175, 1)`,
            willChange: "transform",
            zIndex: layer.translateX === "0%" ? 0 : 1,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35 z-[2]" />

      {/* ── PROGRESS BAR ── */}
      {!paused && (
        <div className="absolute top-0 left-0 right-0 z-[25] h-[3px] bg-white/20">
          <div className="h-full bg-white transition-none" style={{ width: `${progress}%` }} />
        </div>
      )}

      {/* ── HEADER ── */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 pt-8 sm:pt-10 pb-4 sm:pb-6 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl md:text-3xl tracking-wide drop-shadow-md text-center"
        >
          Plan Your Next Holiday
        </motion.h2>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center border-2 border-white/60 rounded-xl px-4 py-2 w-[220px] sm:w-[260px] shadow-md bg-white/10 backdrop-blur-sm"
        >
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none flex-1 text-white placeholder-white/80 text-sm"
          />
          <FaSearch className="text-white text-sm" />
        </motion.div>
      </div>

      {/* ── CARDS ── */}
      <div
        className={`relative z-10 flex items-stretch justify-center gap-0 mt-4 sm:mt-6
          ${isMobile ? "px-0" : "px-6 sm:px-10 md:px-16"}`}
      >
        {activities.map((item, i) => {
          const isActive = i === active;
          const cardStyle = getCardStyle(i);

          return (
            <div
              key={i}
              onClick={() => handleCardClick(i)}
              className="relative overflow-hidden border border-white/50 flex-shrink-0 transition-all duration-500"
              style={{
                ...cardStyle,
                cursor: isMobile ? "default" : "pointer",
                background: "white",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                style={{ transform: isActive ? "scale(1.04)" : "scale(1)" }}
              />

              {!isActive && (
                <div className="absolute inset-0 bg-black/35 hover:bg-black/15 transition-colors duration-300" />
              )}

              {isActive && (
                <>
                  <div className="absolute top-0 left-0 right-0 z-10 bg-white px-3 sm:px-5 text-center py-3 sm:py-4">
                    <h3 className="text-black text-lg sm:text-xl md:text-2xl">{item.title}</h3>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 z-10 bg-white px-3 sm:px-5 py-3 sm:py-4">
                    <p className="text-black text-xs sm:text-sm leading-relaxed text-center line-clamp-4 sm:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>
                </>
              )}

              {!isActive && (
                <div className="absolute inset-0 z-10 flex items-center justify-center px-2">
                  <h3
                    className="text-white text-base sm:text-lg md:text-xl text-center tracking-wide"
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
                  >
                    {item.title}
                  </h3>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── MOBILE swipe hint (first render only) ── */}
      {isMobile && (
        <p className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 text-white/60 text-xs tracking-widest">
          swipe to explore
        </p>
      )}

      {/* ── ARROWS ── */}
      <button
        onClick={() => { goPrev(); resetTimer(); }}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 text-white
          w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center
          rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/25 transition-all duration-200 hover:scale-110"
        aria-label="Previous"
      >
        <FaChevronLeft className="text-sm sm:text-base" />
      </button>
      <button
        onClick={() => { goNext(); resetTimer(); }}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 text-white
          w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center
          rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/25 transition-all duration-200 hover:scale-110"
        aria-label="Next"
      >
        <FaChevronRight className="text-sm sm:text-base" />
      </button>

      {/* ── DOT INDICATORS ── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {activities.map((_, i) => (
          <button
            key={i}
            onClick={() => { handleCardClick(i); }}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === active ? 22 : 7,
              height: 7,
              background: i === active ? "#fff" : "rgba(255,255,255,0.45)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}