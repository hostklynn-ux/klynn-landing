'use client';

import { Home, Briefcase, Building2, Star, Sparkles } from "lucide-react";

const targetAudiences = [
  {
    title: "Hosts de Airbnb",
    icon: Home,
  },
  {
    title: "Property managers",
    icon: Briefcase,
  },
  {
    title: "Operadores multi-unidad",
    icon: Building2,
  },
  {
    title: "Hoteles Boutique",
    icon: Star,
  },
  {
    title: "Empresas de limpieza",
    icon: Sparkles,
  }
];

const TargetAudience = () => {
  return (
    <section id="target-audience" className="py-8 px-6 bg-[#020617] relative overflow-hidden">

      <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-24 reveal-on-scroll">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Diseñado para operadores <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d4ed8] to-[#00d2ff]">
              de renta corta.
            </span>
          </h2>

          <h3 className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Es automatización estructurada para operadores de Airbnb y renta corta que quieren escalar con control.
          </h3>
        </div>

        <div className="mb-16 reveal-on-scroll">
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {targetAudiences.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#0f172a]/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 flex items-center gap-6 hover:border-[#00d2ff]/40 hover:bg-[#0f172a]/90 hover:shadow-[0_10px_30px_rgba(0,210,255,0.1)] transition-all duration-300 group hover:-translate-y-1 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 shrink-0 rounded-xl bg-blue-900/30 border border-blue-500/20 flex items-center justify-center group-hover:bg-[#00d2ff]/20 group-hover:border-[#00d2ff]/50 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-[#00d2ff]" strokeWidth={2} />
                </div>

                <h4 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center reveal-on-scroll">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-[#00d2ff]/20 blur-xl rounded-full"></div>

            <h4 className="relative z-10 text-2xl md:text-3xl font-bold text-white border-y border-slate-700/50 py-6 px-4 md:px-12 bg-[#0a192f]/50 backdrop-blur-sm rounded-2xl shadow-xl">
              Si tu propiedad es un negocio, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#3b82f6]">tu operación también debe serlo.</span>
            </h4>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TargetAudience;
