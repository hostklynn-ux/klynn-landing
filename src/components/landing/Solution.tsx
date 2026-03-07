'use client';

import {
  Target,
  Zap,
  Activity,
  CheckCircle2,
  Award,
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
    title: "Publicas la limpieza.",
    description: "Sincroniza tus reservas o solicita servicios en un par de clics."
  },
  {
    step: "02",
    flow: "Asignación",
    icon: Cpu,
    title: "KLYNN asigna automáticamente.",
    description: "La IA selecciona al profesional óptimo según historial y proximidad."
  },
  {
    step: "03",
    flow: "Cleaner",
    icon: UserCheck,
    title: "El servicio se ejecuta.",
    description: "Limpieza impecable siguiendo estrictos protocolos nivel hotel."
  },
  {
    step: "04",
    flow: "Servicio ejecutado",
    icon: Smartphone,
    title: "Tú supervisas.",
    description: "Recibe notificaciones en tiempo real y fotos del trabajo terminado."
  }
];

const steps = [
  { icon: Target, label: "Propiedad", desc: "Check-out detectado" },
  { icon: Zap, label: "Solicitud", desc: "IA activada" },
  { icon: Activity, label: "Asignación", desc: "Personal óptimo" },
  { icon: CheckCircle2, label: "Ejecución", desc: "Servicio en curso" },
  { icon: Award, label: "Verificado", desc: "Calidad confirmada" }
];

const itemList = [
  "Detección automática de check-out",
  "Asignación por proximidad y especialidad",
  "Protocolos estandarizados nivel hotel",
  "Supervisión en tiempo real",
  "Verificación de calidad con evidencia fotográfica"
];

const Solution = () => {
  return (
    <section id="solution" className="py-32 px-6 bg-gradient-to-b from-[#0B2447] via-[#06152b] to-[#020617] relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#00d2ff]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-16 reveal-on-scroll">

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Infraestructura operativa <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#00d2ff]">
              automatizada.
            </span>
          </h2>

          <h3 className="text-xl text-slate-400 max-w-3xl mx-auto mb-16">
            KLYNN automatiza la asignación y ejecución de servicios operativos.
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 reveal-on-scroll">
          {mainSteps.map((step, index) => (
            <div
              key={index}
              className="relative bg-[#0f172a]/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 lg:p-8 hover:-translate-y-2 hover:border-[#00d2ff]/30 hover:shadow-[0_15px_30px_rgba(0,210,255,0.1)] transition-all duration-300 group overflow-hidden flex flex-col"
            >
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
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 items-center mb-24 reveal-on-scroll">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-[#0f172a] border border-slate-800 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 group-hover:border-[#00d2ff]/40 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(0,210,255,0.2)]">
                <step.icon className="w-8 h-8 text-[#00d2ff]" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-bold mb-2">{step.label}</h3>
              <p className="text-sm text-slate-500">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal-on-scroll">
          <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">

            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  Coordinación Hotel-Level
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  KLYNN opera como el departamento de housekeeping de un hotel de lujo,
                  pero completamente automatizado por IA.
                </p>
                <ul className="space-y-4">
                  {itemList.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#00d2ff] shrink-0" strokeWidth={2} />
                      <span className="text-slate-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative group mt-8 lg:mt-0">
                <img
                  src="https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional Service"
                  className="rounded-2xl shadow-2xl border border-slate-700/50 w-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.02]"
                />

                <div className="absolute -bottom-6 -right-2 md:-right-6 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-0.5">Estado del servicio</p>
                      <p className="text-sm font-bold text-white">En ejecución</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Solution;
