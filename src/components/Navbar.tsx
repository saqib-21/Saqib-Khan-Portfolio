import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}
const navLinks = [{
  href: "#about",
  label: "About"
}, {
  href: "#projects",
  label: "Projects"
}, {
  href: "#experience",
  label: "Experience"
}, {
  href: "#contact",
  label: "Contact"
}];
const Navbar = ({
  isDark,
  toggleTheme
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5,
    ease: "easeOut"
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-card py-3" : "py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-semibold text-foreground">
          <span className="text-gradient">​SK</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium">
              {link.label}
            </a>)}
          
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-secondary transition-colors duration-200" aria-label="Toggle theme">
            {isDark ? <Sun className="w-5 h-5 text-muted-foreground" /> : <Moon className="w-5 h-5 text-muted-foreground" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-secondary transition-colors duration-200" aria-label="Toggle theme">
            {isDark ? <Sun className="w-5 h-5 text-muted-foreground" /> : <Moon className="w-5 h-5 text-muted-foreground" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-lg hover:bg-secondary transition-colors duration-200">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: -20
    }} className="md:hidden glass-card mt-2 mx-4 rounded-xl p-4">
          {navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-muted-foreground hover:text-foreground transition-colors duration-200">
              {link.label}
            </a>)}
        </motion.div>}
    </motion.nav>;
};
export default Navbar;