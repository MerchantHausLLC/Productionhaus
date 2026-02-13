import { Button } from "./ui/button";
import shieldLogo from "@/assets/shield.webp";
import { useState, useEffect } from "react";
import { ContactDialog } from "./ContactDialog";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showShimmer, setShowShimmer] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/supported-processors", label: "Processors" },
    { href: "/blog", label: "Blog" },
    { href: "https://ops-terminal.merchant.haus/merchant-apply", label: "Get Started" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    // Trigger shimmer animation on mount
    setTimeout(() => setShowShimmer(true), 600);
    setTimeout(() => setShowShimmer(false), 5600);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 bg-background dark:bg-neutral-dark border-b border-border transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Logo with Shield and Animation - Shield always on top */}
          <a href="/" className="flex items-center gap-3 group relative">
            <img
              src={shieldLogo}
              alt="MerchantHaus Shield"
              className={`transition-all duration-300 relative z-20 ${isScrolled ? 'h-7 w-7' : 'h-9 w-9'}`}
            />
            <div className="relative z-10">
              <h1 className={`font-ubuntu font-bold text-foreground transition-all duration-300 ${
                isScrolled ? 'text-xl' : 'text-2xl'
              }`}>
                MerchantHaus
              </h1>
              {showShimmer && (
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-crimson to-transparent opacity-40 z-0"
                  style={{
                    animation: 'shimmer 5s linear forwards'
                  }}
                />
              )}
            </div>
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-montserrat font-medium text-foreground hover:text-crimson transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyber-teal after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-border p-2 text-foreground transition-colors hover:bg-muted"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Theme Toggle and CTA */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Button
            onClick={() => setIsContactOpen(true)}
            className="hidden md:inline-flex bg-crimson hover:opacity-90 text-white font-montserrat font-medium rounded-lg px-6 transition-all hover:shadow-lg"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="font-montserrat font-medium text-foreground hover:text-crimson transition-colors"
                onClick={handleNavClick}
              >
                {label}
              </a>
            ))}
            <Button
              onClick={() => {
                setIsContactOpen(true);
                setIsMenuOpen(false);
              }}
              className="bg-crimson hover:opacity-90 text-white font-montserrat font-medium rounded-lg"
            >
              Contact Us
            </Button>
          </nav>
        </div>
      )}

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </header>
  );
};
