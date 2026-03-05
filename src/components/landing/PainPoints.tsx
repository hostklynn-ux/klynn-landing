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
    <section id="pain-points" className="py-32 px-6 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-10"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 reveal-on-scroll">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">El Problema</span>
          </div>
          <h2 className="text-5xl font-bold text-secondary mb-6">
            El Caos Operativo <span className="text-gray-500">No Escala</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La coordinación manual destruye la eficiencia y la calidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPointsData.map((problem, index) => (
            <div
              key={index}
              className="glass-card-dark p-8 reveal-on-scroll hover-lift-subtle"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <problem.icon className="w-12 h-12 text-red-400 mb-6" />
              <h3 className="text-xl font-bold text-secondary mb-3">{problem.title}</h3>
              <p className="text-gray-400 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
