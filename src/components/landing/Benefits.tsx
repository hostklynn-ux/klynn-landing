'use client';

import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

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
    description: "Checklists + evidencia."
  }
];

const Benefits = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed', 'scroll-animated');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal-on-scroll, .scroll-card').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section id="benefits" className="py-24 px-6 bg-[#fafafa] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B2447] tracking-tight leading-tight">
            Opera como un negocio real, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#00d2ff]">
              no como un caos.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 relative pt-12 lg:pt-0">

          <div className="hidden lg:block absolute top-[50%] left-[12.5%] right-[12.5%] h-1 z-0 rounded-full overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[#3b82f6]/20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent animate-data-flow" style={{ backgroundSize: '200% 100%' }}></div>
          </div>

          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="reveal-on-scroll scroll-card relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 h-full shadow-[0_8px_30px_rgba(59,130,246,0.05)] border-2 border-[#3b82f6] hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group cursor-default relative z-10">

                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#3b82f6] transition-colors duration-300 shrink-0">
                  <CheckCircle2 className="w-7 h-7 text-[#3b82f6] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                </div>

                <h3 className="text-lg font-bold text-[#0B2447] mb-2 tracking-tight leading-tight group-hover:text-[#3b82f6] transition-colors duration-300">
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
