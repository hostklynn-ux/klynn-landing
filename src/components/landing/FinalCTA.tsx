'use client';

import { ArrowRight, Zap } from "lucide-react";
import { Button } from "../ui/button";

const FinalCTA = () => {
  const scrollToHero = () => {
    const el = document.getElementById('hero');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-[#1d4ed8] via-[#0ea5e9] to-[#00d2ff]">
      
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center reveal-on-scroll">

        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 shadow-xl border border-white/20">
          <Zap className="w-8 h-8 text-white fill-white" />
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          Automatiza la limpieza de tus propiedades. <br className="hidden lg:block" />
          Antes de que tu operación te sobrepase.
        </h2>

        <p className="text-xl md:text-2xl text-blue-50 font-medium mb-12 max-w-2xl mx-auto">
          Únete a KLYNN y deja de coordinar manualmente.
        </p>

        <div className="flex flex-col items-center w-full">
          <Button
            onClick={scrollToHero}
            className="group relative flex items-center justify-center w-full sm:w-auto px-10 h-[60px] bg-white text-[#1d4ed8] hover:bg-slate-50 font-extrabold text-lg transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 rounded-2xl border-0"
          >
            Quiero entrar a la beta privada
            <ArrowRight className="ml-2 w-6 h-6 text-[#1d4ed8] transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          
          <p className="mt-5 text-sm md:text-base text-blue-100 font-semibold tracking-wide">
            Acceso anticipado + beneficios exclusivos de lanzamiento
          </p>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
