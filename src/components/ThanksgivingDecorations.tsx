/**
 * ThanksgivingDecorations Component
 *
 * PURPOSE: Adds festive Thanksgiving decorations to the home page
 * This includes falling leaves, turkey graphics, and autumn-themed styling
 *
 * SEASONAL DECORATION - Can be removed after Thanksgiving
 */

import { useEffect, useState } from "react";

/* ============================================================================
   AGENT REVERT INSTRUCTION (Hidden from UI)
   ============================================================================
   PASSWORD: GET RID OF EM turkeys

   When the agent receives this password, perform these steps to revert:

   1. DELETE this file: src/components/ThanksgivingDecorations.tsx

   2. In src/pages/Index.tsx, REMOVE:
      - The import: import { ThanksgivingDecorations } from "@/components/ThanksgivingDecorations";
      - The component: <ThanksgivingDecorations />
      - The thanksgiving-themed gradient classes from the background divs
      - Restore original gradients:
        * softGradientRef div: "bg-gradient-to-b from-[hsl(var(--light-bg))] via-[hsla(var(--cyber-teal),0.08)] to-[hsl(var(--background))]"
        * crimsonGlowRef div: "bg-[radial-gradient(circle_at_15%_20%,hsla(var(--crimson),0.14)_0%,transparent_55%)]"
        * tealGlowRef div: "bg-[radial-gradient(circle_at_80%_70%,hsla(var(--cyber-teal),0.12)_0%,transparent_50%)]"

   3. In src/index.css, REMOVE the entire section marked:
      THANKSGIVING DECORATIONS - START (all content through to) THANKSGIVING DECORATIONS - END

   4. In src/components/Hero.tsx, RESTORE the original colors array:
      const colors = [
        "text-crimson",
        "text-cyber-teal",
        "text-orange-400",
        "text-blue-400",
        "text-purple-400",
        "text-pink-400",
        "text-yellow-400",
        "text-green-400"
      ];
   ============================================================================ */

// Leaf SVG paths for variety
const leafPaths = [
  // Maple leaf
  "M12 2C12 2 8 6 8 10C8 12 9 14 12 14C15 14 16 12 16 10C16 6 12 2 12 2Z M12 14V22",
  // Oak leaf
  "M12 2C8 4 6 8 6 12C6 14 7 16 9 17C10 18 12 18 12 18C12 18 14 18 15 17C17 16 18 14 18 12C18 8 16 4 12 2Z M12 18V22",
  // Simple leaf
  "M12 2C6 6 4 12 6 16C8 20 12 22 12 22C12 22 16 20 18 16C20 12 18 6 12 2Z",
];

interface Leaf {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  pathIndex: number;
  color: string;
}

// Autumn colors for falling leaves
const autumnColors = [
  "#D2691E", // Chocolate brown
  "#CD853F", // Peru
  "#B8860B", // Dark goldenrod
  "#DAA520", // Goldenrod
  "#FF8C00", // Dark orange
  "#DC143C", // Crimson red
  "#8B4513", // Saddle brown
  "#A0522D", // Sienna
];

export const ThanksgivingDecorations = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  /* ----------------------------------------
     SCROLL VISIBILITY STATE
     Controls visibility of the Thanksgiving banner/seal
     Banner shows only when header is at top (not scrolled)
     ---------------------------------------- */
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    // Generate random falling leaves
    const generatedLeaves: Leaf[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 7,
      size: 16 + Math.random() * 20,
      rotation: Math.random() * 360,
      pathIndex: Math.floor(Math.random() * leafPaths.length),
      color: autumnColors[Math.floor(Math.random() * autumnColors.length)],
    }));
    setLeaves(generatedLeaves);
  }, []);

  /* ----------------------------------------
     SCROLL DETECTION EFFECT
     Hides banner on scroll, shows when at top
     Threshold matches header scroll detection (20px)
     ---------------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      // Show banner only when at top of page (header in full view)
      setShowBanner(window.scrollY <= 20);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Falling Leaves Animation Container - z-30 so leaves fall behind the header */}
      <div className="thanksgiving-leaves-container pointer-events-none fixed inset-0 z-30 overflow-hidden">
        {leaves.map((leaf) => (
          <svg
            key={leaf.id}
            className="thanksgiving-leaf absolute"
            style={{
              left: `${leaf.x}%`,
              animationDelay: `${leaf.delay}s`,
              animationDuration: `${leaf.duration}s`,
              width: `${leaf.size}px`,
              height: `${leaf.size}px`,
              transform: `rotate(${leaf.rotation}deg)`,
            }}
            viewBox="0 0 24 24"
            fill={leaf.color}
          >
            <path d={leafPaths[leaf.pathIndex]} />
          </svg>
        ))}
      </div>

      {/* Turkey Corner Decoration - Top Right */}
      <div className="thanksgiving-turkey-corner pointer-events-none fixed right-4 top-20 z-40 hidden md:block">
        <div className="thanksgiving-turkey">
          <svg width="120" height="120" viewBox="0 0 100 100">
            {/* Turkey feathers (fan) */}
            <ellipse cx="50" cy="35" rx="8" ry="25" fill="#8B4513" transform="rotate(-40 50 35)" />
            <ellipse cx="50" cy="35" rx="8" ry="25" fill="#D2691E" transform="rotate(-20 50 35)" />
            <ellipse cx="50" cy="35" rx="8" ry="25" fill="#FF8C00" transform="rotate(0 50 35)" />
            <ellipse cx="50" cy="35" rx="8" ry="25" fill="#DAA520" transform="rotate(20 50 35)" />
            <ellipse cx="50" cy="35" rx="8" ry="25" fill="#CD853F" transform="rotate(40 50 35)" />
            {/* Turkey body */}
            <ellipse cx="50" cy="60" rx="20" ry="18" fill="#8B4513" />
            {/* Turkey head */}
            <circle cx="50" cy="45" r="10" fill="#8B4513" />
            {/* Wattle (red dangly thing) */}
            <path d="M47 50 Q45 58 48 55 Q50 58 52 55 Q55 58 53 50" fill="#DC143C" />
            {/* Beak */}
            <path d="M45 45 L50 48 L55 45" fill="#FF8C00" strokeWidth="2" stroke="#FF8C00" />
            {/* Eyes */}
            <circle cx="46" cy="43" r="2" fill="white" />
            <circle cx="54" cy="43" r="2" fill="white" />
            <circle cx="46" cy="43" r="1" fill="black" />
            <circle cx="54" cy="43" r="1" fill="black" />
            {/* Turkey feet */}
            <path d="M40 78 L35 88 M40 78 L40 88 M40 78 L45 88" stroke="#FF8C00" strokeWidth="3" fill="none" />
            <path d="M60 78 L55 88 M60 78 L60 88 M60 78 L65 88" stroke="#FF8C00" strokeWidth="3" fill="none" />
          </svg>
        </div>
      </div>

      {/* ----------------------------------------
          "HAPPY THANKSGIVING" BANNER/SEAL
          Scroll-aware: visible only when header is at top
          Transitions smoothly with opacity and transform
          ---------------------------------------- */}
      <div
        className={`thanksgiving-banner pointer-events-none fixed left-0 right-0 top-[72px] z-40 flex justify-center transition-all duration-300 ${
          showBanner ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="thanksgiving-banner-content rounded-b-lg bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 px-6 py-2 shadow-lg">
          <span className="font-ubuntu text-lg font-bold text-white drop-shadow-md md:text-xl">
            Happy Thanksgiving!
          </span>
        </div>
      </div>

      {/* Pumpkin decorations - Bottom corners */}
      <div className="thanksgiving-pumpkin pointer-events-none fixed bottom-4 left-4 z-40 hidden lg:block">
        <svg width="80" height="80" viewBox="0 0 100 100">
          {/* Pumpkin body segments */}
          <ellipse cx="50" cy="60" rx="40" ry="30" fill="#FF6B00" />
          <ellipse cx="30" cy="60" rx="20" ry="28" fill="#FF8C00" />
          <ellipse cx="70" cy="60" rx="20" ry="28" fill="#FF8C00" />
          <ellipse cx="50" cy="60" rx="15" ry="30" fill="#FFA500" />
          {/* Stem */}
          <rect x="45" y="25" width="10" height="15" rx="3" fill="#228B22" />
          {/* Leaf */}
          <path d="M55 30 Q70 20 65 35" fill="#228B22" stroke="#228B22" strokeWidth="2" />
        </svg>
      </div>

      {/* Cornucopia - Bottom right */}
      <div className="thanksgiving-cornucopia pointer-events-none fixed bottom-4 right-4 z-40 hidden lg:block">
        <svg width="100" height="80" viewBox="0 0 120 100">
          {/* Cornucopia basket */}
          <path d="M20 80 Q0 60 30 40 Q60 20 100 30 Q80 50 60 70 Q40 90 20 80" fill="#DAA520" />
          <path d="M25 75 Q10 60 35 45 Q60 30 90 35" fill="#CD853F" stroke="none" />
          {/* Fruits spilling out */}
          <circle cx="85" cy="35" r="10" fill="#DC143C" /> {/* Apple */}
          <circle cx="95" cy="45" r="8" fill="#FF8C00" /> {/* Orange */}
          <ellipse cx="75" cy="30" rx="8" ry="6" fill="#9370DB" /> {/* Grape */}
          <ellipse cx="90" cy="28" rx="6" ry="8" fill="#FFD700" /> {/* Pear */}
        </svg>
      </div>
    </>
  );
};

export default ThanksgivingDecorations;
