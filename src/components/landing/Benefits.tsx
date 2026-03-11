'use client';

import { CheckCircle2 } from "lucide-react";

const benefitsData = [
  {
    title: "Automatización total",
    description: "Sin coordinación manual."
  },
  {
    title: "Asignación inteligente",
    description: "Cleaners disponibles en segundos."
  },
  {
    title: "Control operativo",
    description: "Seguimiento de cada servicio."
  },
  {
    title: "Calidad consistente",
    description: "Checklists y evidencia fotográfica."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-32 px-6 bg-[#fafafa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20 reveal-on-scroll">
          <h2 className="text-5xl md:text-6xl font-bold text-[#0B2447] mb-6 tracking-tight">
            Beneficios de operar con <span className="text-[#3b82f6]">KLYNN</span>
          </h2>
          <h3 className="text-xl text-slate-600 max-w-3xl mx-auto">
            Diseñado para operadores que buscan rentabilidad a través de la eficiencia.
          </h3>
        </div>

        {/* === GRID HORIZONTAL (4 Columnas en Desktop) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className="reveal-on-scroll" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Tarjeta con layout vertical interno y texto centrado */}
              <div className="bg-white rounded-2xl p-6 h-full shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-200 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col items-center text-center group">

                {/* Ícono centrado arriba */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300 shrink-0">
                  <CheckCircle2 className="w-7 h-7 text-[#3b82f6] transition-transform duration-300 group-hover:scale-110" strokeWidth={2.5} />
                </div>

                <h3 className="text-lg font-bold text-[#0B2447] mb-2 tracking-tight leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium text-sm">
                  {benefit.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;
