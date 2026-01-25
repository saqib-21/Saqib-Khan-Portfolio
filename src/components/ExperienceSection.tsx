import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2 } from "lucide-react";
import { siteConfig } from "@/config/site";

const ExperienceCard = ({ 
  experience, 
  index 
}: { 
  experience: typeof siteConfig.experience[0]; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-200">
        <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping" style={{ animationDuration: '3s' }} />
      </div>

      {/* Content */}
      <div className="glass-card p-6 hover:border-primary/30 transition-colors duration-200">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
            <Building2 className="w-5 h-5 text-primary/70" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h3 className="font-semibold">{experience.role}</h3>
              <span className="text-xs text-muted-foreground">{experience.period}</span>
            </div>
            <p className="text-sm text-primary/80 mb-2">{experience.company}</p>
            <p className="text-sm text-muted-foreground">{experience.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            My professional journey building products at scale.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-2 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
          
          {siteConfig.experience.map((exp, index) => (
            <ExperienceCard key={exp.company} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
