'use client';

import { ArrowRight, Zap, PlayCircle } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    ciudad: '',
    propiedades: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enviando...", formData);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden hero-section pt-28 lg:pt-32 pb-16 lg:pb-20">

      <div className="absolute inset-0 bg-gradient-to-b from-[#0B2447] via-[#071830] to-[#020617] z-0">
        <div className="particles-container">
          <div className="particle"></div><div className="particle"></div><div className="particle"></div><div className="particle"></div>
          <div className="particle"></div><div className="particle"></div><div className="particle"></div><div className="particle"></div>
        </div>
        <div className="absolute inset-0 bg-grid-subtle opacity-20"></div>

        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-[100px] transition-opacity duration-1000 animate-in fade-in"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-[100px] transition-opacity duration-1000 animate-in fade-in"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-amber-200 text-xs sm:text-sm font-semibold tracking-wide">
              Lanzamiento privado — Cupos limitados
            </span>
          </div>

          <h1 className="text-[32px] sm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.15] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 mb-6">
            Deja de coordinar <br className="hidden lg:block"/> limpiezas por WhatsApp. <br className="hidden xl:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d2ff] to-[#3b82f6] block mt-2">
              Automatiza cada check-out y check-in.
            </span>
          </h1>

          <h3 className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 mb-8">
            KLYNN asigna automáticamente cleaners para tus propiedades de renta corta según ubicación, disponibilidad y rendimiento.
          </h3>

          <div className="flex items-center justify-center lg:justify-start gap-4 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="flex -space-x-3 shrink-0">
              <div className="w-10 h-10 rounded-full border-2 border-[#0B2447] bg-slate-700 flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=11" alt="Host" /></div>
              <div className="w-10 h-10 rounded-full border-2 border-[#0B2447] bg-slate-700 flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=32" alt="Host" /></div>
              <div className="w-10 h-10 rounded-full border-2 border-[#0B2447] bg-blue-900 flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=12" alt="Host" /></div>
              <div className="w-10 h-10 rounded-full border-2 border-[#0B2447] bg-[#3b82f6] flex items-center justify-center text-xs font-bold text-white">+50</div>
            </div>
            <p className="text-sm font-medium text-slate-300 max-w-[200px] sm:max-w-none text-left leading-tight">
              Hosts ya en lista de espera en destinos turísticos.
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <Link 
              href="#solution"
              className="group inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium text-base lg:text-lg"
            >
              <PlayCircle className="w-5 h-5 text-[#00d2ff] group-hover:scale-110 transition-transform" />
              Ver cómo funciona
            </Link>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto lg:ml-auto animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
          <form 
            onSubmit={handleSubmit}
            className="bg-[#0f172a]/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent opacity-50"></div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Solicita tu acceso anticipado</h3>

            <div className="space-y-4 mb-6">
              <div>
                <input 
                  type="text" 
                  name="nombre"
                  placeholder="Nombre completo" 
                  required
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="w-full h-12 bg-[#020617]/50 border border-slate-700 rounded-xl px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Correo electrónico" 
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-12 bg-[#020617]/50 border border-slate-700 rounded-xl px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                />
              </div>

              <div>
                <input 
                  type="text" 
                  name="ciudad"
                  placeholder="Ciudad / País" 
                  required
                  value={formData.ciudad}
                  onChange={handleInputChange}
                  className="w-full h-12 bg-[#020617]/50 border border-slate-700 rounded-xl px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
                />
              </div>

              <div>
                <select
                  name="propiedades"
                  required
                  value={formData.propiedades}
                  onChange={handleInputChange}
                  className="w-full h-12 bg-[#020617]/50 border border-slate-700 rounded-xl px-4 text-white focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all appearance-none cursor-pointer invalid:text-slate-500"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em`, paddingRight: `2.5rem` }}
                >
                  <option value="" disabled hidden>¿Cuántas propiedades gestionas?</option>
                  <option value="1-5" className="bg-[#0f172a] text-white">1 a 5 propiedades</option>
                  <option value="6-15" className="bg-[#0f172a] text-white">6 a 15 propiedades</option>
                  <option value="16-50" className="bg-[#0f172a] text-white">16 a 50 propiedades</option>
                  <option value="50+" className="bg-[#0f172a] text-white">Más de 50 propiedades</option>
                </select>
              </div>
            </div>

            <Button
              type="submit"
              className="group relative flex items-center justify-center gap-2 w-full h-[52px] text-white font-bold text-base transition-all duration-300 bg-gradient-to-r from-[#1d4ed8] to-[#06b6d4] hover:from-[#1e40af] hover:to-[#0891b2] shadow-[0_4px_20px_rgba(6,182,212,0.3)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.5)] border-0 rounded-xl"
            >
              Quiero acceso anticipado
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <p className="text-center text-xs text-slate-400 mt-4 font-medium">
              Acceso prioritario + precio preferencial de por vida
            </p>

          </form>
        </div>

      </div>

    </section>
  );
};

export default Hero;