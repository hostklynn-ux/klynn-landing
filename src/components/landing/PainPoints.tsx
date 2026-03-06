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

const invisibleCosts = [
  {
    icon: Clock,
    title: "Horas improductivas.",
    description: "Tiempo valioso perdido en coordinación manual en lugar de estrategias para escalar tu negocio."
  },
  {
    icon: UserCog,
    title: "Dependencia operativa.",
    description: "Tu negocio se detiene si no estás pegado al teléfono supervisando cada detalle de la limpieza."
  },
  {
    icon: Hourglass,
    title: "Riesgo de retrasos.",
    description: "Un solo fallo en la comunicación genera un efecto dominó que retrasa los check-ins de tus huéspedes."
  },
  {
    icon: TrendingDown,
    title: "Inconsistencia en ejecución.",
    description: "Falta de estandarización que resulta en quejas recurrentes, devoluciones y malas reseñas."
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {painPointsData.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 reveal-on-scroll shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-300 group flex flex-col"
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

        <div className="text-center mb-24 reveal-on-scroll">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-400 tracking-tight leading-relaxed">
            Cada micro tarea consume tiempo. <br className="sm:hidden" />
            <span className="text-white font-bold">Y el tiempo es <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#3b82f6]">margen.</span></span>
          </h3>
        </div>

        <div className="pt-16 border-t border-slate-800/60 reveal-on-scroll">
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                La pérdida no siempre <span className="text-slate-500">es visible.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {invisibleCosts.map((cost, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 reveal-on-scroll shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition-all duration-300 group flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <cost.icon
                    className="w-12 h-12 text-[#ff4d4d] mb-6 transition-transform duration-300 group-hover:scale-110 shrink-0"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                    {cost.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {cost.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mb-24">
              <h3 className="text-2xl md:text-3xl font-medium text-slate-300">
                No es limpieza. <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#3b82f6]">Es eficiencia estructural.</span>
              </h3>
            </div>

          </div>
        </div>

        <div className="pt-20 border-t border-slate-800/60 reveal-on-scroll">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
                El problema no es el cleaner. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#3b82f6]">Es el sistema.</span>
              </h2>

              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
                Tus profesionales de limpieza pueden ser los mejores, pero si la infraestructura que los coordina es frágil, los resultados siempre serán inconsistentes. Automatizar es la única vía para escalar.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#1d4ed8]/30 to-[#00d2ff]/30 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Limpieza profesional vs Sistema"
                  className="rounded-2xl shadow-2xl border border-slate-700/50 w-full object-cover aspect-[4/3] z-10 relative"
                />

                <div className="absolute top-6 left-6 bg-[#0f172a]/90 backdrop-blur-md border border-slate-700 p-3 rounded-lg shadow-xl z-20 flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#ff4d4d] rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Cuello de Botella Manual</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PainPoints;
