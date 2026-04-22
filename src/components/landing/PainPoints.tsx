'use client';

import { useEffect, useRef } from "react";
import {
  MessageSquare,
  ClipboardList,
  AlertCircle,
  EyeOff
} from "lucide-react";

const painPointsData = [
  {
    icon: MessageSquare,
    title: "Mensajes constantes",
    description: "Coordinación manual con cleaners.",
  },
  {
    icon: ClipboardList,
    title: "Confirmaciones manuales",
    description: "Cancelaciones y tiempos muertos.",
  },
  {
    icon: AlertCircle,
    title: "Cambios de último minuto",
    description: "Check-outs que cambian sin control.",
  },
  {
    icon: EyeOff,
    title: "Falta de visibilidad",
    description: "No sabes si la limpieza se hizo bien.",
  }
];

const PainPoints = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed', 'scroll-animated');
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
    <section id="pain-points" className="py-24 px-6 bg-[#0B2447] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-10"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Coordinar limpiezas <span className="text-slate-400">no debería ser tu trabajo.</span>
          </h2>
          <h3 className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Cada reserva implica mensajes, confirmaciones y seguimiento constante. <br className="hidden sm:block" />
            <span className="text-red-400 font-medium">Eso no escala.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {painPointsData.map((problem, index) => (
            <div
              key={index}
              className="bg-[#0f172a]/80 backdrop-blur-md rounded-2xl p-6 border border-slate-800 reveal-on-scroll scroll-card shadow-lg hover:border-red-500/30 hover:shadow-[0_8px_30px_rgba(255,77,77,0.1)] hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center cursor-default red"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors duration-300">
                <problem.icon
                  className="w-7 h-7 text-[#ff4d4d] transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={2}
                />
              </div>

              <h3 className="text-lg font-bold text-slate-100 mb-2 leading-tight">
                {problem.title}
              </h3>

              <p className="text-slate-400 leading-relaxed font-medium text-sm">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center reveal-on-scroll">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-400 tracking-tight leading-relaxed">
            Cada micro tarea consume tiempo. <br className="sm:hidden" />
            <span className="text-white font-bold">
              Y el tiempo <span className="underline decoration-[#3b82f6] decoration-4 underline-offset-4">es margen.</span>
            </span>
          </h3>
        </div>

      </div>
    </section>
  );
};

export default PainPoints;
