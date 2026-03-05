'use client';

import { MessageSquare, ClipboardList, AlertCircle, EyeOff } from "lucide-react";

const painPointsData = [
  {
    icon: MessageSquare,
    title: "Mensajes constantes",
    description: "Cientos de mensajes diarios por WhatsApp y llamadas. Coordinación fragmentada que consume horas de tu día.",
  },
  {
    icon: ClipboardList,
    title: "Confirmaciones manuales",
    description: "Perseguir a tu equipo para asegurar su asistencia y perder tiempo verificando si el trabajo realmente se terminó.",
  },
  {
    icon: AlertCircle,
    title: "Ajustes de último minuto",
    description: "Cambios de horario, nuevas reservas o cancelaciones del personal que te obligan a apagar incendios constantemente.",
  },
  {
    icon: EyeOff,
    title: "Seguimiento operativo",
    description: "Cero visibilidad en tiempo real. Operar a ciegas y cruzar los dedos esperando que la limpieza cumpla el estándar.",
  }
];

const PainPoints = () => {
  return (
    <section id="pain-points" className="py-32 px-6 bg-[#0a192f] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-20 reveal-on-scroll">
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
              className="bg-white rounded-2xl p-8 reveal-on-scroll shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-300 group hover:shadow-[0_20px_40px_rgba(0,210,255,0.15)] flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <problem.icon
                className="w-12 h-12 text-[#ff4d4d] mb-6 transition-transform duration-300 group-hover:scale-110 shrink-0"
                strokeWidth={1.5}
              />

              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                {problem.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center reveal-on-scroll">
          <div className="inline-block bg-slate-900/50 border border-slate-800 backdrop-blur-sm rounded-2xl px-8 py-6 md:px-12 md:py-8 shadow-xl">
            <p className="text-2xl md:text-3xl font-medium text-slate-400 tracking-tight leading-relaxed">
              Cada micro tarea consume tiempo. <br className="hidden md:block" />
              <span className="text-white font-bold">Y el tiempo es <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#3b82f6]">margen.</span></span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-16 border-t border-slate-800/60 reveal-on-scroll">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">

          <div>
            <span className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-4 block">
              01. Costo Invisible
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              La pérdida no siempre <br className="hidden md:block" /> es visible.
            </h3>
          </div>

          <div>
            <ul className="space-y-4 mb-8">
              {[
                "Horas improductivas.",
                "Dependencia operativa.",
                "Riesgo de retrasos.",
                "Inconsistencia en ejecución."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300 text-lg font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff4d4d]"></div>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xl text-slate-400 font-medium">
              No es limpieza. <br />
              <span className="text-[#00d2ff] font-bold">Es eficiencia estructural.</span>
            </p>
          </div>

        </div>
      </div>

      <div className="mt-24 pt-16 border-t border-slate-800/60 text-center reveal-on-scroll">

        <span className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-6 block">
          02. La Revelación
        </span>

        <h3 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">
          El problema no es el cleaner. <br className="hidden md:block" />
          <span className="text-slate-500">Es el sistema.</span>
        </h3>
      </div>
    </section>
  );
};

export default PainPoints;
