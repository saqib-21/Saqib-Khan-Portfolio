import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Set dark mode as default
    document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <div className="relative z-10 bg-background">
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
