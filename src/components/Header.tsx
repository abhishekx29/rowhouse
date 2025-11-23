import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // h-20 = 5rem = 80px
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { label: "Gallery", action: () => scrollToSection("gallery") },
    { label: "Features", action: () => scrollToSection("features") },
    { label: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 backdrop-blur-md shadow-2xl border-b border-white/20"
          : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <img
              src={logo}
              alt="Redbricks Engineers Logo"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <h1 className="text-2xl font-bold text-white drop-shadow-lg">
              Redbricks Engineers
            </h1>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/20 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Call Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Button
              onClick={() => window.location.href = "tel:+918953888880"}
              className="hidden sm:flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30 shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Call Us</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/20 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-white/30 mt-2 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="px-4 py-3 rounded-lg text-left font-medium text-white/90 hover:text-white hover:bg-white/20 transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  window.location.href = "tel:+918953888880";
                  setIsMobileMenuOpen(false);
                }}
                className="mt-2 w-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30 shadow-md"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call: 8953888880
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

