'use client';

const HowKlynnWorks = () => {
  return (
    <section id="how-klynn-works" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-zap w-4 h-4" aria-hidden="true">
              <path
                d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
              </path>
            </svg>
            De Caos Manual a Ejecución Inteligente
          </div>
          <h2 className="text-4xl font-bold mb-4">Cómo Funciona KLYNN</h2>
          <p className="text-xl max-w-3xl mx-auto">El "Uber" de los servicios hoteleros: aseo,
            ornato y decoración de ambiente</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8"><span className="contents">
            <div className="flex gap-6 group">
              <div className="flex-shrink-0">
                <div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="contents">01</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  <span className="contents">Check-out Detectado</span></h3>
                <p className="leading-relaxed"><span className="contents">KLYNN activa
                  automáticamente las tareas
                  de limpieza apenas el huésped hace check-out. Cero intervención manual.</span></p>
              </div>
            </div>
            <div className="flex gap-6 group">
              <div className="flex-shrink-0">
                <div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="contents">02</span></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2"><span
                  className="contents">Asignación
                  Inteligente</span></h3>
                <p className=" leading-relaxed"><span className="contents">El sistema analiza
                  ubicación,
                  disponibilidad y especialidad para asignar al profesional más cercano y adecuado en
                  segundos.</span></p>
              </div>
            </div>
            <div className="flex gap-6 group">
              <div className="flex-shrink-0">
                <div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="contents">03</span></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2"><span className="contents">Ejecución
                  Monitoreada</span></h3>
                <p className="leading-relaxed"><span className="contents">Protocolos
                  estandarizados de aseo,
                  ornato y decoración. Supervisión en tiempo real del progreso de cada tarea.</span>
                </p>
              </div>
            </div>
            <div className="flex gap-6 group">
              <div className="flex-shrink-0">
                <div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="contents">04</span></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2"><span className="contents">Propiedad
                  Lista</span></h3>
                <p className="leading-relaxed"><span className="contents">Notificación
                  automática cuando todo
                  está listo. Impecable, puntual, sin estrés.</span></p>
              </div>
            </div>
          </span></div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 blur-3xl rounded-full">
            </div>
            <img alt="Map Location Service Assignment"
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover"
              src="./propuesta2_files/pexels-photo.jpg" />
            <div
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 border-2 border-primary">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm">Tiempo promedio de asignación
                  </p>
                  <p className="text-2xl font-bold text-primary">12 segundos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern bg-white/5 opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">Dashboard en Tiempo Real</h3>
            <p className="text-lg text-secondary-foreground mb-8 max-w-2xl">
              Visualiza el estado de todas tus propiedades, personal asignado y progreso de limpieza desde un solo lugar.
            </p>
            <div className="grid md:grid-cols-2 gap-6"><img alt="Dashboard Analytics"
              className="rounded-xl shadow-2xl border-2 border-white/20"
              src="./propuesta2_files/photo-1551288049-bebda4e38f71" /><img alt="Modern Interface"
                className="rounded-xl shadow-2xl border-2 border-white/20 object-cover min-h-[200px] bg-black/10"
                src="./propuesta2_files/photo-1666875753105-c63a6f3bdc86" /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowKlynnWorks;
