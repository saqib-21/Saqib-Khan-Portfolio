import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";
import WaveBackground from "./WaveBackground";
import { siteConfig } from "@/config/site";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden sticky top-0 z-0"
    >
      <WaveBackground variant="hero" />

      <motion.div
        style={{ y, opacity, scale }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
          >
            <span className="text-foreground">{siteConfig.name.split(" ")[0]}</span>
            <br />
            <span className="text-gradient">{siteConfig.name.split(" ")[1]}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            {siteConfig.title}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a href="#projects" className="btn-solid-emerald">
              View Projects
            </a>
            <a href="#contact" className="btn-ghost-emerald">
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center gap-6"
          >
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl hover:bg-secondary transition-colors duration-200 group">
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl hover:bg-secondary transition-colors duration-200 group">
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a href={`mailto:${siteConfig.email}`} className="p-3 rounded-xl hover:bg-secondary transition-colors duration-200 group">
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
