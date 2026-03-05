'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const navLinks = [
  { label: "Solución", href: "#solucion" },
  { label: "Cómo Funciona", href: "#how-klynn-works" },
  { label: "Calidad Premium", href: "#premium-video" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f] border-b border-slate-800 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <div className="flex-shrink-0 flex items-center">
          <a href="#hero" className="flex items-center hover:opacity-90 transition-opacity">
            <Image
              priority
              width={60}
              height={80}
              src="/assets/logos/logo-vertical-dark.png"
              alt="KLYNN vertical Logo"
              className="hidden md:block h-12 w-auto object-contain"
            />
            <Image
              priority
              width={60}
              height={80}
              src="/assets/logos/logo-horizontal-dark.png"
              alt="KLYNN horizontal Logo"
              className="md:hidden h-10 w-auto object-contain"
            />
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-slate-300 hover:text-white transition-colors font-medium text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <Button
            className="text-white font-semibold px-6 transition-all duration-300 bg-gradient-to-r from-[#1d4ed8] to-[#06b6d4] hover:from-[#1e40af] hover:to-[#0891b2] shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] border-0"
            onClick={scrollToContact}
          >
            Automatizar Operaciones
          </Button>
        </nav>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-slate-300 hover:text-white focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0a192f] border-b border-slate-800 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-slate-300 hover:text-white text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              className="w-full text-white font-semibold py-6 mt-2 transition-all duration-300 bg-gradient-to-r from-[#1d4ed8] to-[#06b6d4] hover:opacity-90 shadow-[0_0_15px_rgba(6,182,212,0.3)] border-0 text-base"
              onClick={scrollToContact}
            >
              Automatizar Operaciones
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
