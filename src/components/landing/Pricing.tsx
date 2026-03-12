'use client';

import { Check, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

const features = [
  "Asignación automática",
  "Cleaners verificados",
  "Seguimiento operativo",
  "Historial de servicios",
  "Soporte prioritario"
];

const Pricing = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="precios" className="py-8 px-6 bg-[#fafafa] relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-100/40 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2447] mb-6 tracking-tight">
            Escala tu operación <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d4ed8] to-[#00d2ff]">
              por el costo de una limpieza.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Únete a nuestra fase de lanzamiento y asegura este precio preferencial de por vida.
          </p>
        </div>

        <div className="max-w-md mx-auto reveal-on-scroll">
          <div className="bg-white rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-200 relative transition-all duration-300 transform hover:-translate-y-1">
            
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1d4ed8] to-[#00d2ff]"></div>

            <div className="flex justify-between items-center mb-6 pt-2">
              <h3 className="text-xl font-bold text-[#0B2447]">Plan Early Host</h3>
              <div className="flex items-center gap-1 bg-blue-50 text-blue-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                Lanzamiento
              </div>
            </div>

            <div className="mb-2 flex items-baseline gap-2">
              <span className="text-6xl font-black text-[#0B2447] tracking-tighter">$29</span>
              <span className="text-slate-500 font-medium">/ mes</span>
            </div>
            
            <p className="text-slate-600 font-semibold mb-8 border-b border-slate-100 pb-8">
              Hasta 10 propiedades
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                    <Check className="w-3.5 h-3.5 text-[#3b82f6]" strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-medium text-[15px]">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="group relative flex items-center justify-center gap-2 w-full h-[52px] text-white font-semibold text-base transition-all duration-300 bg-gradient-to-r from-[#1d4ed8] to-[#00d2ff] hover:from-[#1e40af] hover:to-[#0891b2] shadow-[0_8px_20px_rgba(0,210,255,0.25)] hover:shadow-[0_10px_25px_rgba(0,210,255,0.4)] border-0 rounded-xl"
              onClick={scrollToContact}
            >
              Reservar acceso anticipado
            </Button>
            
            <p className="text-center text-xs text-slate-400 mt-4 font-medium">
              Cupos limitados para la fase Beta.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
