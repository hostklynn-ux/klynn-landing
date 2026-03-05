'use client';

import { CheckCircle2, Sparkles, Target } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Activas el servicio",
    description: "Check-out detectado automáticamente o solicitud manual. El sistema se activa instantáneamente.",
    icon: Target,
    gradient: "from-blue-500 to-blue-600",
    shadow: "shadow-blue-500/30"
  },
  {
    step: "02",
    title: "El sistema asigna automáticamente",
    description: "Algoritmo evalúa proximidad, disponibilidad, especialización y desempeño histórico en milisegundos.",
    icon: Sparkles,
    gradient: "from-[#00d2ff] to-blue-500",
    shadow: "shadow-cyan-500/30"
  },
  {
    step: "03",
    title: "Ejecución y seguimiento en tiempo real",
    description: "Protocolo hotel-level ejecutado. Verificación de calidad. Propiedad lista. Notificación automática.",
    icon: CheckCircle2,
    gradient: "from-blue-600 to-[#0891b2]",
    shadow: "shadow-blue-600/30"
  }
];

const HowKlynnWorks = () => {
  return (
    <section id="how-klynn-works" className="py-32 px-6 bg-[#fafafa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-24 reveal-on-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-[#0B2447] mb-6 tracking-tight">
            Tres Pasos. <span className="text-[#8ba0b6]">Cero Fricción.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="reveal-on-scroll" style={{ animationDelay: `${index * 150}ms` }}>

              <div className="bg-white rounded-[2rem] p-10 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group flex flex-col">

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-lg ${step.shadow} group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                <div className="text-7xl font-black text-[#0B2447] mb-4 tracking-tighter leading-none select-none">
                  {step.step}
                </div>

                <h3 className="text-2xl font-bold text-[#0a192f] mb-4 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-slate-500 leading-relaxed font-medium">
                  {step.description}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowKlynnWorks;
