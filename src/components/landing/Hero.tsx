'use client';

import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden hero-section pt-24 pb-12 lg:pt-0 lg:pb-0">

      <div className="absolute inset-0 bg-gradient-to-b from-[#0B2447] via-[#071830] to-[#020617] z-0">
        <div className="particles-container">
          <div className="particle"></div><div className="particle"></div><div className="particle"></div><div className="particle"></div>
          <div className="particle"></div><div className="particle"></div><div className="particle"></div><div className="particle"></div>
        </div>
        <div className="absolute inset-0 bg-grid-subtle opacity-20"></div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-[100px] transition-opacity duration-1000 animate-in fade-in"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d2ff]/20 rounded-full blur-[100px] transition-opacity duration-1000 animate-in fade-in"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>

        <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 glass-badge mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="w-4 h-4 text-[#00d2ff]" />
          <span className="text-gray-300 text-xs sm:text-sm font-medium tracking-wide">Tecnología de Automatización AI</span>
        </div>

        <h1 className="text-[28px] sm:text-[32px] md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.2] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 px-2 w-full mb-6">
          Automatiza la limpieza
          <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d2ff] to-[#3b82f6]">
            {" "}entre check-out y check-in.
          </span>
        </h1>

        <h3 className="text-[16px] sm:text-[18px] lg:text-2xl text-slate-400 max-w-[32ch] sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 px-2 mb-10">
          KLYNN coordina automáticamente cleaners para propiedades de renta corta.
        </h3>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 w-full max-w-xs sm:max-w-none mx-auto mb-12 sm:mb-16">
          <Button
            className="relative group flex items-center justify-center gap-2 w-full sm:w-auto px-8 h-[52px] text-white font-medium text-[16px] sm:text-lg transition-all duration-300 bg-gradient-to-r from-[#1d4ed8] to-[#06b6d4] hover:from-[#1e40af] hover:to-[#0891b2] shadow-[0_4px_20px_rgba(6,182,212,0.3)] border-0 rounded-xl"
            onClick={() => {
              const el = document?.getElementById('contact');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Solicitar acceso
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>

          <Link 
            href="#how-klynn-works"
            className="flex items-center justify-center w-full sm:w-auto px-8 h-[52px] text-white font-medium text-[16px] sm:text-lg transition-all duration-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00d2ff]/40 rounded-xl backdrop-blur-sm"
          >
            Ver cómo funciona
          </Link>
        </div>

        <div className="flex flex-row items-center justify-between sm:justify-center w-full max-w-sm sm:max-w-3xl mx-auto px-2 animate-in fade-in duration-1000 delay-700">
          
          <div className="flex-1 text-center flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">12s</div>
            <div className="text-[11px] sm:text-sm text-slate-400 max-w-[80px] sm:max-w-none leading-tight">Tiempo de asignación</div>
          </div>
          
          <div className="h-10 w-px bg-white/10 shrink-0 mx-2 sm:mx-8"></div>
          
          <div className="flex-1 text-center flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">98%</div>
            <div className="text-[11px] sm:text-sm text-slate-400 max-w-[80px] sm:max-w-none leading-tight">Puntualidad garantizada</div>
          </div>
          
          <div className="h-10 w-px bg-white/10 shrink-0 mx-2 sm:mx-8"></div>
          
          <div className="flex-1 text-center flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-[11px] sm:text-sm text-slate-400 max-w-[80px] sm:max-w-none leading-tight">Automatización</div>
          </div>

        </div>

      </div>

      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-in fade-in duration-1000 delay-[1000ms] hidden sm:block z-20">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2 opacity-50">
          <div className="w-1 h-3 bg-white/40 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
