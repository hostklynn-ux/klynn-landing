'use client';

import { motion } from "framer-motion";
import { Star, Quote, Shield, BarChart3, Eye } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Directora de Operaciones, TechCorp",
    text: "KLYNN transformó completamente nuestras oficinas. Su enfoque tecnológico y la atención al detalle son incomparables. Recomendados al 100%.",
    stars: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Gerente de Facility, Centro Comercial Norte",
    text: "La puntualidad, la calidad y la comunicación transparente hacen de KLYNN nuestro socio ideal. Llevamos 2 años trabajando juntos sin una sola queja.",
    stars: 5,
  },
  {
    name: "Ana Martínez",
    role: "Propietaria, Residencial Las Palmas",
    text: "El equipo de KLYNN es profesional, amable y eficiente. Mis residentes están encantados con el servicio. La app de seguimiento es un plus increíble.",
    stars: 5,
  },
];

const features = [
  {
    icon: Shield,
    title: "Profesionales Verificados",
    description: "Background checks. Entrenamiento especializado. Certificación continua.",
  },
  {
    icon: BarChart3,
    title: "Tracking de Desempeño",
    description: "Métricas en tiempo real. KPIs operacionales. Mejora continua.",
  },
  {
    icon: Eye,
    title: "Supervisión en Vivo",
    description: "Visibilidad completa. Progreso paso a paso. Control total.",
  },
  {
    icon: Star,
    title: "Garantía de Calidad",
    description: "Protocolos estandarizados. Evidencia fotográfica. Satisfacción garantizada.",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal-on-scroll">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">Calidad Premium</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Estándares <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Nivel Hotel</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada servicio ejecutado con precisión operacional y verificación de calidad.
          </p>
        </div>

        {/* Video Showcase with Modern Scroll Effect */}
        <div className="mb-20 reveal-on-scroll">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[600px] object-cover"
            >
              <source src="https://videos.pexels.com/video-files/6195122/6195122-sd_640_360_25fps.mp4" type="video/mp4" />
              <source src="https://videos.pexels.com/video-files/3209828/3209828-sd_640_360_25fps.mp4" type="video/mp4" />
              Su navegador no soporta el tag de video.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent flex items-end">
              <div className="p-12 w-full">
                <div className="glass-card-premium p-8 max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-cyan-400 font-semibold">Nivel Hotel de Lujo</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Atención al Detalle Incomparable
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Cada superficie, cada rincón, cada elemento decorativo tratado con
                    el mismo nivel de exigencia que un hotel de lujo internacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="reveal-on-scroll premium-card p-8 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="reveal-on-scroll">
          <div className="grid lg:grid-cols-2 gap-12 items-center glass-card-light p-12">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521783593447-5702b9bfd267?w=800"
                alt="Luxury Property"
                className="rounded-xl shadow-2xl w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                De Solicitud a Ejecución en Minutos
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Velocidad operacional sin comprometer calidad. KLYNN procesa, asigna y ejecuta
                mientras otros sistemas todavía están coordinando manualmente.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-blue-600 mb-2">3min</div>
                  <div className="text-sm text-gray-600">Tiempo promedio total</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-cyan-600 mb-2">99.2%</div>
                  <div className="text-sm text-gray-600">Tasa de éxito</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
