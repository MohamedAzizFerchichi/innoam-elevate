import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/Generated image 1 (16).png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", labelKey: "nav.home" },
    { href: "/about", labelKey: "nav.about" },
    { href: "/services", labelKey: "nav.services" },
    { href: "/contact", labelKey: "nav.contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-transparent flex items-center justify-center">
                  <img
                    src={logoImg}
                    alt="InnoAM logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-foreground">
                  Inno<span className="text-gradient">AM</span>
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} to={link.href}>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors relative",
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {t(link.labelKey)}
                    {location.pathname === link.href && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-primary/10 rounded-lg"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                  </motion.span>
                </Link>
              ))}
            </div>

            {/* CTA Button + Language Switcher */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher />
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  {t("nav.requestQuote")}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <LanguageSwitcher />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-10 p-2 text-foreground"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
            <nav className="relative flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      "text-2xl font-medium transition-colors",
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {t(link.labelKey)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    {t("nav.requestQuote")}
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
