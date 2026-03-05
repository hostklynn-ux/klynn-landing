'use client';

import { 
  Target, 
  Zap, 
  Activity, 
  CheckCircle2, 
  Award
} from "lucide-react";

const Solution = () => {
  return (
    <section id="solution" className="py-32 px-6 bg-gradient-to-b from-[#0B2447] via-[#06152b] to-[#020617] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-5xl font-bold text-white mb-6">
              Automatización Inteligente <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Impulsada por IA</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              De solicitud a ejecución en minutos. Sin intervención manual.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-center reveal-on-scroll">
            {[
              { icon: Target, label: "Propiedad", desc: "Check-out detectado" },
              { icon: Zap, label: "Solicitud", desc: "IA activada" },
              { icon: Activity, label: "Asignación", desc: "Personal óptimo" },
              { icon: CheckCircle2, label: "Ejecución", desc: "Servicio en curso" },
              { icon: Award, label: "Verificado", desc: "Calidad confirmada" }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 glass-card mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-electric">
                  <step.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{step.label}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 reveal-on-scroll">
            <div className="glass-card-premium p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">
                      Coordinación Hotel-Level
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      KLYNN opera como el departamento de housekeeping de un hotel de lujo, 
                      pero completamente automatizado por IA. 
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Detección automática de check-out",
                        "Asignación por proximidad y especialidad",
                        "Protocolos estandarizados nivel hotel",
                        "Supervisión en tiempo real",
                        "Verificación de calidad con evidencia fotográfica"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative">
                    <img 
                      src="https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Professional Service"
                      className="rounded-xl shadow-2xl border border-white/10"
                    />
                    <div className="absolute -bottom-6 -right-6 glass-card p-4 shadow-electric">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <div>
                          <p className="text-xs text-gray-400">Estado del servicio</p>
                          <p className="text-sm font-bold text-white">En ejecución</p>
                        </div>
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
