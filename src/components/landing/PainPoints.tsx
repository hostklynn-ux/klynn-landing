'use client';

import {
  MessageSquare,
  ClipboardList,
  AlertCircle,
  EyeOff,
  Clock,
  UserCog,
  Hourglass,
  TrendingDown
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

const invisibleCosts = [
  {
    icon: Clock,
    title: "Horas improductivas.",
    description: "Tiempo valioso perdido en coordinación en lugar de escalar tu negocio."
  },
  {
    icon: UserCog,
    title: "Dependencia operativa.",
    description: "Tu negocio se detiene si no supervisas cada limpieza en persona."
  },
  {
    icon: Hourglass,
    title: "Riesgo de retrasos.",
    description: "Un fallo en la comunicación retrasa los check-ins de tus huéspedes."
  },
  {
    icon: TrendingDown,
    title: "Inconsistencia en ejecución.",
    description: "Estándares variables que resultan en quejas y malas reseñas."
  }
];

const PainPoints = () => {
  return (
    <section id="pain-points" className="py-32 px-6 bg-[#0a192f] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-5xl font-bold text-white mb-6">
            Coordinar limpiezas <span className="text-slate-500">no debería ser tu trabajo.</span>
          </h2>
          <h3 className="text-xl text-slate-400 max-w-3xl mx-auto">
            La operación entre check-out y check-in suele depender de mensajes, confirmaciones y seguimiento constante.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          {painPointsData.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-100 reveal-on-scroll shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <problem.icon
                className="w-7 h-7 text-[#ff4d4d] mb-4 transition-transform duration-300 group-hover:scale-110 shrink-0"
                strokeWidth={2}
              />
              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                {problem.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium text-sm line-clamp-2">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-24 reveal-on-scroll">
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