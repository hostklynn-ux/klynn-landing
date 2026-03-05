'use client';

import { Clock, Target, Activity, TrendingUp } from "lucide-react";

const painPointsData = [
  {
    icon: Clock,
    title: "Coordinación Manual",
    description: "WhatsApp, llamadas, mensajes perdidos. Pérdida de tiempo constante.",
  },
  {
    icon: Target,
    title: "Estrés de Último Minuto",
    description: "Carreras contra el reloj. Incertidumbre antes de cada check-in.",
  },
  {
    icon: Activity,
    title: "Inconsistencia de Calidad",
    description: "Estándares variables. Sin protocolos estandarizados.",
  },
  {
    icon: TrendingUp,
    title: "Caos Operativo",
    description: "Asignaciones ineficientes. Sin visibilidad en tiempo real.",
  }
];

const PainPoints = () => {
  return (
    <section id="pain-points" className="py-32 px-6 bg-[#0a192f] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-20 reveal-on-scroll">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-[#00d2ff] tracking-wider uppercase">
              El Problema
            </span>
          </div>

          <h2 className="text-5xl font-bold text-white mb-6">
            El Caos Operativo <span className="text-slate-500">No Escala</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            La coordinación manual destruye la eficiencia y la calidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPointsData.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 reveal-on-scroll shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-300 group hover:shadow-[0_20px_40px_rgba(0,210,255,0.15)]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <problem.icon className="w-12 h-12 text-[#ff4d4d] mb-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />

              <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
              <p className="text-slate-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
