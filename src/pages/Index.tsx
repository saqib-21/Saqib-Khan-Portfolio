import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { BridgePhone } from "@/components/BridgePhone";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { HelloWorld } from "@/components/HelloWorld";
import { ProjectDevice } from "@/components/ProjectDevice";
import { siteConfig } from "@/config/site";
import { SnowGlobe } from "@/components/SnowGlobe";
import { Toolkit } from "@/components/Toolkit";
import { projects, type PortfolioProject } from "@/config/portfolio";
import "./Portfolio.css";

function ProjectPreview({ project }: { project: PortfolioProject }) {
  switch (project.preview) {
    case "phone":
      return <BridgePhone />;
    case "tablet":
    case "laptop":
      return <ProjectDevice device={project.preview} {...project.screenshot} />;
    case "screenshot":
      return (
        <figure className="project-screenshot">
          <img {...project.screenshot} loading="lazy" decoding="async" />
        </figure>
      );
    case "terminal":
      return (
        <figure className="project-terminal">
          <figcaption>Terminal preview</figcaption>
          <pre>{project.sample}</pre>
        </figure>
      );
    case "icon":
      return (
        <div className={`project-art project-art-${project.color}`} aria-hidden>
          <span><project.icon size={62} strokeWidth={1.25} /></span>
        </div>
      );
  }
}

const Index = () => (
  <div className="portfolio" id="top">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="portfolio-header">
      <div className="portfolio-shell portfolio-nav">
        <a className="portfolio-brand" href="#top" aria-label="Saqib Khan, home">SK<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
        </nav>
        <a className="nav-contact" href="#contact">Contact <ArrowUpRight size={15} aria-hidden /></a>
      </div>
    </header>

    <main id="main">
      <section id="about" className="portfolio-hero portfolio-shell" aria-labelledby="portfolio-name">
        <div className="hero-copy">
          <HelloWorld />
          <h1 id="portfolio-name"><span className="hero-intro">I’m </span>{siteConfig.name}<span className="hero-period">.</span></h1>
          <p className="portfolio-kicker">{siteConfig.title}</p>
          <p className="hero-summary">I study software engineering at McMaster University. My work spans internal tools at Ontario’s electricity system operator, student-facing web services, and sensor pipelines for an underwater robot.</p>
          <dl className="education-details">
            <div><dt>Expected graduation</dt><dd>April 2028</dd></div>
            <div><dt>Recognition</dt><dd>Dean’s Honour List, 2024–2026</dd></div>
          </dl>
          <a href="#projects" className="portfolio-button">Explore my work <ArrowDownRight size={19} aria-hidden /></a>
        </div>
        <div className="hero-visual">
          <SnowGlobe />
          <figure className="portfolio-portrait">
            <img src="/saqib-portrait.webp" alt="Saqib Khan by a mountain lake" fetchPriority="high" />
            <figcaption><MapPin size={15} aria-hidden /> {siteConfig.location}</figcaption>
          </figure>
        </div>
      </section>

      <ExperienceTimeline />

      <section id="projects" className="portfolio-work" aria-labelledby="work-title">
        <div className="portfolio-shell">
          <div className="section-heading">
            <h2 id="work-title">Selected work</h2>
            <a className="portfolio-link" href={siteConfig.social.github}>GitHub <ArrowUpRight size={17} aria-hidden /></a>
          </div>
          <div className="portfolio-projects">
            {projects.map((project) => (
              <article key={project.title} className={project.wide ? "portfolio-project portfolio-project--wide" : "portfolio-project"}>
                <ProjectPreview project={project} />
                <div className="project-copy">
                  <p className="portfolio-kicker">{project.type}</p>
                  <h3><a href={project.href} aria-label={project.linkLabel}>{project.title}<ArrowUpRight size={21} aria-hidden /></a></h3>
                  <p>{project.description}</p>
                  <ul className="project-stack" aria-label="Technologies">
                    {project.stack.map((tool) => <li key={tool}>{tool}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Toolkit />
    </main>

    <footer id="contact" className="portfolio-footer">
      <div className="portfolio-shell">
        <h2>Let’s talk.</h2>
        <a className="portfolio-email" href={`mailto:${siteConfig.email}`}>{siteConfig.email} <ArrowUpRight size={23} aria-hidden /></a>
        <div className="footer-bottom">
          <span>{siteConfig.name}</span>
          <div className="footer-links">
            <a href={siteConfig.social.github} aria-label="GitHub"><Github size={19} aria-hidden /></a>
            <a href={siteConfig.social.linkedin} aria-label="LinkedIn"><Linkedin size={19} aria-hidden /></a>
            <a href={`mailto:${siteConfig.email}`} aria-label="Email"><Mail size={19} aria-hidden /></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Index;
