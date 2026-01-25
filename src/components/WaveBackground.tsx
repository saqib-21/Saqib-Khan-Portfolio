import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface WaveBackgroundProps {
  variant?: "hero" | "section";
  className?: string;
}

const WaveBackground = ({ variant = "hero", className = "" }: WaveBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  if (variant === "hero") {
    return (
      <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Base gradient - uses semantic tokens via CSS */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5 dark:to-emerald-950/20" />
        
        {/* Radial glow - themed */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] animate-glow-pulse"
          style={{
            background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.12), transparent 60%)",
          }}
        />

        {/* Wave lines - Layer 1 */}
        <motion.svg
          style={{ y: y1 }}
          className="absolute w-full h-full opacity-30"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="[stop-color:hsl(var(--primary))]" stopOpacity="0" />
              <stop offset="50%" className="[stop-color:hsl(var(--primary))]" stopOpacity="0.6" />
              <stop offset="100%" className="[stop-color:hsl(var(--primary))]" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,400 Q360,300 720,400 T1440,400"
            fill="none"
            stroke="url(#wave1)"
            strokeWidth="1.5"
          />
          <path
            d="M0,450 Q360,350 720,450 T1440,450"
            fill="none"
            stroke="url(#wave1)"
            strokeWidth="1"
          />
          <path
            d="M0,500 Q360,400 720,500 T1440,500"
            fill="none"
            stroke="url(#wave1)"
            strokeWidth="0.75"
          />
        </motion.svg>

        {/* Wave lines - Layer 2 */}
        <motion.svg
          style={{ y: y2 }}
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="[stop-color:hsl(var(--accent))]" stopOpacity="0" />
              <stop offset="30%" className="[stop-color:hsl(var(--accent))]" stopOpacity="0.5" />
              <stop offset="70%" className="[stop-color:hsl(var(--accent))]" stopOpacity="0.5" />
              <stop offset="100%" className="[stop-color:hsl(var(--accent))]" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,350 C240,250 480,450 720,350 S1200,250 1440,350"
            fill="none"
            stroke="url(#wave2)"
            strokeWidth="1"
          />
          <path
            d="M0,380 C240,280 480,480 720,380 S1200,280 1440,380"
            fill="none"
            stroke="url(#wave2)"
            strokeWidth="0.75"
          />
        </motion.svg>

        {/* Wave lines - Layer 3 (subtle) */}
        <motion.svg
          style={{ y: y3 }}
          className="absolute w-full h-full opacity-15"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="[stop-color:hsl(var(--primary))]" stopOpacity="0" />
              <stop offset="50%" className="[stop-color:hsl(var(--primary))]" stopOpacity="0.4" />
              <stop offset="100%" className="[stop-color:hsl(var(--primary))]" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,550 Q180,500 360,550 T720,550 T1080,550 T1440,550"
            fill="none"
            stroke="url(#wave3)"
            strokeWidth="0.5"
          />
          <path
            d="M0,580 Q180,530 360,580 T720,580 T1080,580 T1440,580"
            fill="none"
            stroke="url(#wave3)"
            strokeWidth="0.5"
          />
        </motion.svg>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/30"
              style={{
                left: `${15 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 50%, hsl(var(--primary) / 0.1), transparent 70%)`,
        }}
      />
    </div>
  );
};

export default WaveBackground;
