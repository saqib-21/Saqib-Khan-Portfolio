import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, User } from "lucide-react";
import { siteConfig } from "@/config/site";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="grid md:grid-cols-[240px_1fr] gap-8 md:gap-12">
              {/* Profile Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/30 to-primary/50 flex items-center justify-center overflow-hidden">
                  {siteConfig.profileImage ? (
                    <img 
                      src={siteConfig.profileImage} 
                      alt={siteConfig.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-20 h-20 text-primary/40" />
                  )}
                </div>
                {/* Glow effect */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent blur-xl -z-10" />
              </motion.div>

              {/* Content */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{siteConfig.location}</span>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-muted-foreground leading-relaxed"
                >
                  {siteConfig.about.bio}
                </motion.p>

                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-2"
                >
                  {siteConfig.about.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </motion.ul>

                {/* Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="pt-4"
                >
                  <h3 className="text-sm font-medium text-muted-foreground mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {siteConfig.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.03 }}
                        className="skill-pill"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
