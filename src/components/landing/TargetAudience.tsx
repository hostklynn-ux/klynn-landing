'use client';

import { Home, Briefcase, Building2, Star } from "lucide-react";

const targetAudiences = [
  {
    title: "Hosts profesionales",
    description: "Estandariza tu calidad y libera tu tiempo para enfocarte en crecer tu negocio, no en coordinar limpiezas.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Property managers",
    description: "Escala tu portafolio de propiedades manteniendo el control absoluto y la visibilidad de cada operación diaria.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Operadores multi-unidad",
    description: "Sincroniza volúmenes altos de check-outs y check-ins simultáneos con eficiencia quirúrgica y cero fallos.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Hoteles boutique",
    description: "Mantén estándares de lujo cinco estrellas con una infraestructura operativa completamente invisible e impecable.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
  }
];

const TargetAudience = () => {
  return (
    <section id="target-audience" className="py-32 px-6 bg-[#020617] relative overflow-hidden">

      <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-24 reveal-on-scroll">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
            No es un marketplace. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d4ed8] to-[#00d2ff]">
              No es intermediación manual.
            </span>
          </h2>

          <h3 className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Es automatización estructurada para operadores de Airbnb y renta corta que quieren escalar con control.
          </h3>
        </div>

        <div className="mb-24 reveal-on-scroll">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudiences.map((item, index) => (
              <div
                key={index}
                className="relative h-[22rem] rounded-[2rem] overflow-hidden group shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(0,210,255,0.15)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/80 to-transparent"></div>

                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-[#00d2ff]/20 transition-colors duration-500"></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 group-hover:bg-[#00d2ff]/80 group-hover:border-[#00d2ff] transition-all duration-300 shrink-0">
                    <item.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>

                  <h4 className="text-xl font-bold text-white tracking-tight mb-2">
                    {item.title}
                  </h4>

                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        <div className="text-center reveal-on-scroll">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-[#00d2ff]/20 blur-xl rounded-full"></div>

            <h4 className="relative z-10 text-2xl md:text-3xl font-bold text-white border-y border-slate-700/50 py-6 px-4 md:px-12 bg-[#0a192f]/50 backdrop-blur-sm rounded-2xl shadow-xl">
              Si tu propiedad es un negocio, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#3b82f6]">tu operación también debe serlo.</span>
            </h4>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TargetAudience;
