'use client';

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
    description: "Cancelaciones inesperadas.",
  },
  {
    icon: AlertCircle,
    title: "Cambios de último minuto",
    description: "Check-outs que cambian.",
  },
  {
    icon: EyeOff,
    title: "Falta de visibilidad",
    description: "No sabes si la limpieza se hizo bien.",
  }
];

const PainPoints = () => {
  return (
    <section id="pain-points" className="py-8 px-6 bg-[#0a192f] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-20 reveal-on-scroll">
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Coordinar limpiezas <span className="text-slate-500">no debería ser tu trabajo.</span>
          </h2>
          <h3 className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            La operación entre check-out y check-in suele depender de mensajes, confirmaciones y seguimiento constante.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {painPointsData.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-100 reveal-on-scroll shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
                <problem.icon
                  className="w-6 h-6 text-[#ff4d4d] transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={2.5}
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                {problem.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed font-medium text-sm line-clamp-2">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-8 reveal-on-scroll">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-400 tracking-tight leading-relaxed">
            Cada micro tarea consume tiempo. <br className="sm:hidden" />
            <span className="text-white font-bold">Y el tiempo es <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#3b82f6]">margen.</span></span>
          </h3>
        </div>

      </div>
    </section>
  );
};

export default PainPoints;
