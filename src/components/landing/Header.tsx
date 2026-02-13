'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Valores", href: "#values" },
  { label: "Testimonios", href: "#testimonials" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">

        <a href="#hero" className="flex items-center hover:opacity-90 transition-opacity">
          <Image
            priority
            width={60}
            height={80}
            src="/assets/logos/logo-vertical-dark.png"
            alt="KLYNN vertical Logo"
            className="hidden md:block md:h-20 w-auto object-contain"
          />
          <Image
            priority
            width={60}
            height={80}
            src="/assets/logos/logo-horizontal-dark.png"
            alt="KLYNN horizontal Logo"
            className="md:hidden h-16 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button>
            <a href="#contact">Contáctanos</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border animate-in slide-in-from-top duration-300">
          <nav className="container flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full sm:w-fit">
              <a href="#contact" onClick={() => setMobileOpen(false)}>Contáctanos</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
