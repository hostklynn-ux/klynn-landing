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
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden hero-section">

      <div className="absolute inset-0 bg-gradient-to-b from-[#0B2447] via-[#071830] to-[#020617]">

        <div className="particles-container">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="absolute inset-0 bg-grid-subtle opacity-20"></div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d2ff]/20 rounded-full blur-[100px] animate-pulse-slow-delayed"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>

        <div className="inline-flex items-center gap-2 px-6 py-3 glass-badge mb-6 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-[#00d2ff]" />
          <span className="text-gray-300 text-sm font-medium tracking-wide">Tecnología de Automatización AI</span>
        </div>

        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight animate-fade-in-up-delay-1">
          Automatiza la limpieza
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d2ff] to-[#3b82f6]">
            entre check-out y check-in.
          </span>
        </h1>

        <h3 className="text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
          KLYNN coordina automáticamente cleaners para propiedades de renta corta.
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up-delay-3">

          <Button
            className="relative group inline-flex items-center justify-center gap-2 px-10 py-7 text-white font-medium text-lg transition-all duration-300 bg-gradient-to-r from-[#1d4ed8] to-[#06b6d4] hover:from-[#1e40af] hover:to-[#0891b2] shadow-[0_4px_20px_rgba(6,182,212,0.3)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.5)] border-0 rounded-xl"
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

          <Button
            className="inline-flex items-center justify-center px-10 py-7 text-white font-medium text-lg transition-all duration-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00d2ff]/40 rounded-xl backdrop-blur-sm"
          >
            <Link href="#how-klynn-works">
              Ver cómo funciona
            </Link>
          </Button>


        </div>

        <div className="flex items-center justify-center gap-12 pt-12 animate-fade-in-up-delay-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">12s</div>
            <div className="text-sm text-slate-400">Tiempo de asignación</div>
          </div>
          <div className="h-12 w-px bg-white/10"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">98%</div>
            <div className="text-sm text-slate-400">Puntualidad garantizada</div>
          </div>
          <div className="h-12 w-px bg-white/10"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-sm text-slate-400">Automatización</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#00d2ff]/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
