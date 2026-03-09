'use client';

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const navLinks = [
  { label: "Cómo funciona", href: "#how-klynn-works" },
  { label: "Solución", href: "#solution" },
  { label: "Precios", href: "#precios" },
  { label: "Acceso", href: "#acceso" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const headerBackgroundClass = mounted && isScrolled 
    ? "bg-[#0a192f]/95 backdrop-blur-md border-b border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
    : "bg-transparent border-b border-transparent shadow-none";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${headerBackgroundClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        
        <div className="flex-1 flex justify-start md:hidden">
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center w-12 h-12 -ml-3 text-slate-300 hover:text-white focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className="hidden md:flex flex-1 justify-start">
          <a href="#hero" className="flex items-center hover:opacity-90 transition-opacity">
            <Image
              priority
              width={80}
              height={32}
              src="/assets/logos/logo-horizontal-dark.png"
              alt="KLYNN Logo"
              className="h-8 w-auto object-contain"
            />
          </a>
        </div>

        <div className="flex-none flex justify-center md:hidden">
          <a href="#hero" className="flex items-center hover:opacity-90 transition-opacity">
            <Image
              priority
              width={70}
              height={28}
              src="/assets/logos/logo-horizontal-dark.png"
              alt="KLYNN Logo"
              className="h-7 w-auto object-contain"
            />
          </a>
        </div>

        <nav className="hidden md:flex flex-none justify-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-slate-200 hover:text-[#00d2ff] transition-colors font-medium text-[15px] tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex-1 flex justify-end">
          <Button
            className="group relative flex items-center justify-center text-white font-semibold transition-all duration-300 bg-gradient-to-r from-[#1d4ed8] to-[#00d2ff] hover:from-[#1e40af] hover:to-[#0891b2] shadow-[0_0_15px_rgba(0,210,255,0.2)] hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] border-0 rounded-xl
              h-[44px] md:h-12 px-4 sm:px-6 text-[13px] sm:text-sm"
            onClick={scrollToContact}
          >
            <span className="md:hidden">Solicitar</span>
            <span className="hidden md:inline">Solicitar acceso</span>
          </Button>
        </div>

      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#0a192f]/98 backdrop-blur-xl border-b border-slate-800 shadow-2xl animate-in slide-in-from-top-2 fade-in duration-200">
          <nav className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-slate-300 hover:text-white text-lg font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <div className="w-full h-px bg-slate-800 my-2"></div>
            
            <Button
              className="w-full h-14 text-white font-semibold text-base transition-all duration-300 bg-gradient-to-r from-[#1d4ed8] to-[#00d2ff] hover:opacity-90 shadow-[0_0_20px_rgba(0,210,255,0.25)] border-0 rounded-xl"
              onClick={scrollToContact}
            >
              Solicitar acceso
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;