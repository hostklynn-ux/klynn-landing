'use client';

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Solución", href: "#solution" },
  { label: "Precios", href: "#pricing" },
  { label: "Acceso", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  // ACTUALIZADO: Quitamos la validación de 'mounted &&'
  const headerBackgroundClass = isScrolled
    ? "bg-[#0a192f]/95 backdrop-blur-md border-b border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
    : "bg-transparent border-b border-transparent shadow-none";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${headerBackgroundClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">

          <div className="flex-1 flex justify-start md:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              className="flex items-center justify-center w-12 h-12 -ml-3 text-slate-300 hover:text-white focus:outline-none transition-colors"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <div className="hidden md:flex flex-1 justify-start">
            <Link href="#hero" className="flex items-center hover:opacity-90 transition-opacity">
              <Image
                priority
                width={80}
                height={32}
                src="/assets/logos/logo-horizontal-dark.png"
                alt="KLYNN Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="flex-none flex justify-center md:hidden">
            <Link href="#hero" className="flex items-center hover:opacity-90 transition-opacity">
              <Image
                priority
                width={70}
                height={28}
                src="/assets/logos/logo-horizontal-dark.png"
                alt="KLYNN Logo"
                className="h-7 w-auto object-contain"
              />
            </Link>
          </div>

          <nav className="hidden md:flex flex-none justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-200 hover:text-[#00d2ff] transition-colors font-medium text-[15px] tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex-1 flex justify-end">
            <Button
              className="group relative flex items-center justify-center text-white font-semibold transition-all duration-300 bg-gradient-to-r from-[#1d4ed8] to-[#00d2ff] hover:from-[#1e40af] hover:to-[#0891b2] shadow-[0_0_15px_rgba(0,210,255,0.2)] hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] border-0 rounded-xl h-[44px] md:h-12 px-4 sm:px-6 text-[13px] sm:text-sm"
              onClick={scrollToContact}
            >
              <span className="md:hidden">Solicitar</span>
              <span className="hidden md:inline">Solicitar acceso</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="md:hidden">

        <div
          className={`fixed inset-0 bg-black/40 z-[101] transition-opacity duration-300 ease-in-out ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        <div
          className={`fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-[#0a192f] border-l border-slate-800 shadow-2xl z-[102] flex flex-col transform transition-transform duration-300 ease-in-out ${mobileOpen ? "-translate-x-0" : "-translate-x-full"}`}
        >

          <div className="h-16 px-4 flex items-center justify-end border-b border-slate-800/50 shrink-0">
            <button
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-12 h-12 text-slate-300 hover:text-white focus:outline-none transition-colors"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col">

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-200 hover:text-white text-lg font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="w-full h-px bg-slate-800/80 my-8 shrink-0"></div>

            <Button
              className="w-full h-14 shrink-0 text-white font-semibold text-base transition-all duration-300 bg-gradient-to-r from-[#1d4ed8] to-[#00d2ff] hover:opacity-90 shadow-[0_0_20px_rgba(0,210,255,0.25)] border-0 rounded-xl mb-8"
              onClick={scrollToContact}
            >
              Solicitar acceso
            </Button>

            <div className="flex flex-col gap-6 mt-auto">
              <Link href="#privacidad" onClick={() => setMobileOpen(false)} className="text-slate-500 hover:text-slate-300 text-base transition-colors">Privacidad</Link>
              <Link href="#terminos" onClick={() => setMobileOpen(false)} className="text-slate-500 hover:text-slate-300 text-base transition-colors">Términos</Link>
              <Link href="#contacto" onClick={() => setMobileOpen(false)} className="text-slate-500 hover:text-slate-300 text-base transition-colors">Contacto</Link>
            </div>

            <div className="w-full h-px bg-slate-800/80 my-6 shrink-0"></div>

            <Link
              href="#cleaner"
              onClick={() => setMobileOpen(false)}
              className="text-slate-400 hover:text-[#00d2ff] text-base font-medium transition-colors"
            >
              Trabaja con nosotros
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
