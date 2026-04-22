'use client';

import { useEffect, useRef } from "react";
import {
  CalendarCheck,
  Cpu,
  Smartphone,
  UserCheck
} from "lucide-react";

const mainSteps = [
  {
    step: "01",
    flow: "Propiedad",
    icon: CalendarCheck,
    title: "Publicas la limpieza",
    description: "Sincroniza reservas o solicita servicios en segundos."
  },
  {
    step: "02",
    flow: "Asignación",
    icon: Cpu,
    title: "KLYNN asigna automáticamente",
    description: "Matching inteligente según ubicación, disponibilidad y rendimiento."
  },
  {
    step: "03",
    flow: "Cleaner",
    icon: UserCheck,
    title: "El cleaner ejecuta",
    description: "Profesionales verificados con protocolos estandarizados."
  },
  {
    step: "04",
    flow: "Supervisión",
    icon: Smartphone,
    title: "Supervisas todo",
    description: "Estado en tiempo real + evidencia del servicio."
  }
];

const Solution = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed', 'in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal-on-scroll, .scroll-card').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section id="solution" className="py-24 px-6 bg-gradient-to-b from-[#0B2447] via-[#06152b] to-[#020617] relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#00d2ff]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Así funciona {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#00d2ff]">
              KLYNN.
            </span>
          </h2>
          <h3 className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-16">
            Automatización completa de tu operación entre reservas.
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row w-full mb-8">
          {mainSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row flex-1 reveal-on-scroll scroll-card dark"
              style={{ animationDelay: `${index * 150}ms` }}
            >

              <div className="relative w-full bg-[#0f172a]/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 lg:p-8 hover:-translate-y-2 hover:border-[#00d2ff]/30 hover:shadow-[0_15px_30px_rgba(0,210,255,0.1)] transition-all duration-300 group overflow-hidden flex flex-col h-full z-10">

                <div className="absolute -top-6 -right-2 text-8xl font-black text-slate-800/30 select-none group-hover:text-slate-800/50 transition-colors duration-300 pointer-events-none z-0">
                  {step.step}
                </div>

                <div className="inline-flex items-center mb-6 relative z-10">
                  <span className="text-[10px] md:text-xs font-bold text-[#00d2ff] bg-[#00d2ff]/10 border border-[#00d2ff]/20 px-3 py-1 rounded-full uppercase tracking-wider">
                    {step.flow}
                  </span>
                </div>

                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-900/30 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-[#00d2ff]/10 transition-colors duration-300">
                  <step.icon className="w-6 h-6 lg:w-7 lg:h-7 text-[#00d2ff]" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 relative z-10 leading-tight">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed font-medium relative z-10 mt-auto">
                  {step.description}
                </p>
              </div>

              {index !== mainSteps.length - 1 && (
                <div className="flex items-center justify-center relative lg:w-8 h-8 lg:h-auto shrink-0 z-0">

                  <div className="hidden lg:block w-full h-[2px] bg-slate-800">
                    <div className="h-full bg-gradient-to-r from-[#00d2ff]/80 to-transparent w-full"></div>
                  </div>

                  <div className="lg:hidden absolute left-[130px] top-0 bottom-0 w-[2px] bg-slate-800">
                    <div className="w-full bg-gradient-to-b from-[#00d2ff]/80 to-transparent h-full"></div>
                  </div>

                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
