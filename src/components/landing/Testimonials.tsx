'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Shield, BarChart3, Eye, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Directora de Operaciones, TechCorp",
    text: "KLYNN transformó completamente nuestras oficinas. Su enfoque tecnológico y la atención al detalle son incomparables. El ahorro de tiempo ha sido brutal. Recomendados al 100%.",
    stars: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Gerente de Facility, Centro Comercial",
    text: "La puntualidad, la calidad y la comunicación transparente hacen de KLYNN nuestro socio ideal. Llevamos 2 años trabajando juntos sin una sola queja. La automatización es magia.",
    stars: 5,
  },
  {
    name: "Ana Martínez",
    role: "Propietaria, Residencial Las Palmas",
    text: "El equipo de KLYNN es profesional, amable y eficiente. Mis residentes están encantados con el servicio. La app de seguimiento es un plus increíble que nos da mucha paz mental.",
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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play del carrusel cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-32 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* === CABECERA === */}
        <div className="text-center mb-20 reveal-on-scroll">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">Calidad Premium</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Estándares <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Nivel Hotel</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Cada servicio ejecutado con precisión operacional y verificado por los mejores Property Managers.
          </p>
        </div>

        {/* === SHOWCASE: VIDEO + CARRUSEL FLOTANTE === */}
        <div className="mb-20 reveal-on-scroll">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 group">
            
            {/* Video de Fondo (Visible) */}
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
            
            {/* Overlay Gradiente (Fuerte abajo, transparente arriba) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/95 via-[#0a192f]/40 to-transparent flex items-end">
              
              {/* Contenedor del contenido del Carrusel (Sin cajas, directamente sobre el video) */}
              <div className="p-8 md:p-16 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
                
                {/* Lado Izquierdo: Textos del Testimonio */}
                <div className="max-w-3xl">
                  {/* Estrellas y Etiqueta (Fijas) */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-md" />
                      ))}
                    </div>
                    <span className="text-[#00d2ff] font-semibold tracking-wide">
                      Experiencias Reales
                    </span>
                  </div>

                  {/* Animación del Testimonio (Cambia dinámicamente) */}
                  <div className="min-h-[160px] md:min-h-[140px] flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
                          "{testimonials[currentIndex].text}"
                        </h3>
                        <div>
                          <p className="text-lg font-bold text-white drop-shadow-md">
                            {testimonials[currentIndex].name}
                          </p>
                          <p className="text-slate-300 font-medium drop-shadow-md">
                            {testimonials[currentIndex].role}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Lado Derecho: Controles del Carrusel */}
                <div className="flex flex-col items-start md:items-end gap-6 shrink-0 z-20">
                  {/* Flechas */}
                  <div className="flex gap-3">
                    <button 
                      onClick={prevTestimonial}
                      className="p-3 rounded-full bg-white/10 hover:bg-[#00d2ff] text-white backdrop-blur-sm transition-colors shadow-lg"
                      aria-label="Anterior"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="p-3 rounded-full bg-white/10 hover:bg-[#00d2ff] text-white backdrop-blur-sm transition-colors shadow-lg"
                      aria-label="Siguiente"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                  
                  {/* Puntos Indicadores */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`transition-all duration-300 rounded-full h-1.5 ${
                          currentIndex === index 
                            ? "w-8 bg-[#00d2ff]" 
                            : "w-2 bg-white/30 hover:bg-white/60"
                        }`}
                        aria-label={`Ir al testimonio ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* === CARACTERÍSTICAS === */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="reveal-on-scroll bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-[#00d2ff] flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* === SECCIÓN INFERIOR === */}
        <div className="reveal-on-scroll">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-10 md:p-16 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521783593447-5702b9bfd267?w=800"
                alt="Luxury Property"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                De Solicitud a Ejecución en Minutos
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                Velocidad operacional sin comprometer calidad. KLYNN procesa, asigna y ejecuta
                mientras otros sistemas todavía están coordinando manualmente.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                  <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">3m</div>
                  <div className="text-sm font-medium text-slate-500">Tiempo promedio total</div>
                </div>
                <div className="text-center p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                  <div className="text-4xl md:text-5xl font-black text-[#00d2ff] mb-2">99.2%</div>
                  <div className="text-sm font-medium text-slate-500">Tasa de éxito</div>
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
