import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Folder } from "lucide-react";
import { siteConfig } from "@/config/site";

const ProjectCard = ({ project, index }: { project: typeof siteConfig.projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card-hover group"
    >
      {/* Project Image */}
      <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center relative overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 15%' }}
          />
        ) : (
          <Folder className="w-12 h-12 text-primary/30" />
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-secondary transition-colors duration-200 opacity-0 group-hover:opacity-100"
          >
            <ExternalLink className="w-4 h-4 text-muted-foreground" />
          </a>
        </div>

        <p className="text-xs text-primary font-medium mb-3">
          {project.period}
        </p>

        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of projects I've built, from developer tools to full-stack applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {siteConfig.projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
