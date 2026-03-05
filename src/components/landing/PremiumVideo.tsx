'use client';

const PremiumVideo = () => {
  return (
    <section id="premium-video" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]">

      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-60"
          poster="https://images.pexels.com/photos/6195277/pexels-photo-6195277.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source src="https://cdn.pixabay.com/video/2020/07/10/44490-439797933_large.mp4" type="video/mp4" />
          <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236a1c2e1e7b8b0b3b3b3b3b3b3b3b3b" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/90"></div>

        <div className="absolute top-8 right-8 lg:top-12 lg:right-12 z-30 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white text-xs font-bold tracking-widest shadow-lg">
          5★ PREMIUM
        </div>
      </div>

      <div className="relative z-20 w-full max-w-4xl mx-auto text-center px-4 md:px-6">

        <div className="p-10 lg:p-16 bg-slate-900/60 backdrop-blur-2xl border border-slate-600/50 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)]">

          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-[#00d2ff] tracking-wider uppercase">
              Estándares Premium
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl lg:leading-tight font-bold text-white mb-6">
            Calidad 5 Estrellas.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#00d2ff]">
              En Cada Detalle.
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl mx-auto">
            Protocolos de limpieza y ornato equivalentes a los mejores hoteles del mundo.
            KLYNN no compromete la excelencia.
          </p>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-500/50 to-transparent mb-8"></div>

          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">100%</div>
              <div className="text-xs md:text-sm text-slate-400">Cumplimiento</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">5★</div>
              <div className="text-xs md:text-sm text-slate-400">Estándar Hotel</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">24/7</div>
              <div className="text-xs md:text-sm text-slate-400">Disponibilidad</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PremiumVideo;
