import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navItems = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-sm shadow-xs" : "py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10 ">
            <span className="text-glow text-foreground">My </span>
            Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 mx-auto">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/85 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col space-y-1 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span
            className={cn(
              "w-6 h-0.5 bg-foreground transition-transform duration-300",
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            )}
          />
          <span
            className={cn(
              "w-6 h-0.5 bg-foreground transition-opacity duration-300",
              isMobileMenuOpen ? "opacity-0" : ""
            )}
          />
          <span
            className={cn(
              "w-6 h-0.5 bg-foreground transition-transform duration-300",
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            )}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-background/90 backdrop-blur-md border-t border-border transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 visibility-visible"
            : "opacity-0 visibility-hidden"
        )}
      >
        <div className="container py-4">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="block py-3 text-foreground/85 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
