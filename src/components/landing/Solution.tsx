'use client';

import {
  Target,
  Zap,
  Activity,
  CheckCircle2,
  Award,
  ArrowRight
} from "lucide-react";

const itemList = [
  "Detección automática de check-out",
  "Asignación por proximidad y especialidad",
  "Protocolos estandarizados nivel hotel",
  "Supervisión en tiempo real",
  "Verificación de calidad con evidencia fotográfica"
];

const steps = [
  { icon: Target, label: "Propiedad", desc: "Check-out detectado" },
  { icon: Zap, label: "Solicitud", desc: "IA activada" },
  { icon: Activity, label: "Asignación", desc: "Personal óptimo" },
  { icon: CheckCircle2, label: "Ejecución", desc: "Servicio en curso" },
  { icon: Award, label: "Verificado", desc: "Calidad confirmada" }
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

          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            KLYNN automatiza la asignación y ejecución de servicios operativos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="bg-[#152a4a]/50 border border-slate-700/50 backdrop-blur-sm px-6 py-3 rounded-full text-slate-300 font-medium flex items-center gap-3">
              <span className="bg-blue-600/30 text-blue-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</span>
              Publicas la necesidad.
            </div>
            <ArrowRight className="w-5 h-5 text-slate-600 hidden sm:block" />
            <div className="bg-[#152a4a]/50 border border-slate-700/50 backdrop-blur-sm px-6 py-3 rounded-full text-slate-300 font-medium flex items-center gap-3">
              <span className="bg-[#00d2ff]/30 text-[#00d2ff] w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</span>
              El sistema gestiona.
            </div>
            <ArrowRight className="w-5 h-5 text-slate-600 hidden sm:block" />
            <div className="bg-[#152a4a]/50 border border-slate-700/50 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold flex items-center gap-3 border-b-[#00d2ff]/50 shadow-[0_4px_20px_rgba(0,210,255,0.1)]">
              <span className="bg-emerald-500/30 text-emerald-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</span>
              Tú supervisas.
            </div>
          </div>
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
