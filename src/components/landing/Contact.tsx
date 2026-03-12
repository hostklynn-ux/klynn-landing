'use client';

import { useState, useTransition } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "@/src/hooks/use-toast";
import { ArrowRight, Zap } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    city: '',
    propertyCount: '',
    cleaningCost: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;

    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "¡Solicitud recibida!",
        description: "Nos pondremos en contacto contigo muy pronto.",
      });

      formElement.reset();
      setFormData({ fullName: '', email: '', city: '', propertyCount: '', cleaningCost: '' });
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const scrollToForm = () => {
    const el = document.getElementById('acceso');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative py-12 px-6 overflow-hidden bg-gradient-to-br from-[#1d4ed8] via-[#0ea5e9] to-[#00d2ff]">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center reveal-on-scroll">

          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 shadow-xl">
            <Zap className="w-8 h-8 text-white fill-white" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Automatiza la limpieza <br className="hidden sm:block" />
            de tus propiedades.
          </h2>

          <p className="text-xl md:text-2xl text-blue-50 font-medium mb-12">
            Empieza con KLYNN.
          </p>

          <Button
            onClick={scrollToForm}
            className="group relative flex items-center justify-center w-full sm:w-auto px-10 h-16 bg-white text-blue-600 hover:bg-slate-50 font-bold text-lg transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 rounded-2xl border-0"
          >
            Solicitar acceso
            <ArrowRight className="ml-2 w-5 h-5 text-blue-600 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>

        </div>
      </section>
      <section
        id="acceso"
        className="py-8 px-6 bg-gradient-to-br from-[#0a192f] via-[#071830] to-[#020617] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 tracking-tight">
              Solicita acceso anticipado
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1d4ed8] to-[#00d2ff]">
                a KLYNN
              </span>
            </h2>
            <h3 className="text-xl md:text-2xl text-slate-400 font-medium tracking-wide">
              Acceso para operadores activos.
            </h3>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-[#0f172a]/90 backdrop-blur-md border border-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl space-y-8 reveal-on-scroll max-w-3xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2.5">
                <label htmlFor="fullName" className="text-sm font-medium text-slate-300 block">
                  Nombre Completo *
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Ej. Juan Pérez"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  autoComplete="name"
                  className="h-12 bg-[#1e293b] border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 transition-colors"
                />
              </div>

              <div className="space-y-2.5">
                <label htmlFor="email" className="text-sm font-medium text-slate-300 block">
                  Email Corporativo *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="juan@tuempresa.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  autoComplete="email"
                  className="h-12 bg-[#1e293b] border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2.5">
                <label htmlFor="city" className="text-sm font-medium text-slate-300 block">
                  Ciudad de Operación *
                </label>
                <Input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Ej. Madrid, CDMX, Bogotá..."
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  autoComplete="address-level2"
                  className="h-12 bg-[#1e293b] border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 transition-colors"
                />
              </div>

              <div className="space-y-2.5">
                <label htmlFor="propertyCount" className="text-sm font-medium text-slate-300 block">
                  Cantidad de Propiedades *
                </label>
                <select
                  id="propertyCount"
                  name="propertyCount"
                  value={formData.propertyCount}
                  onChange={handleInputChange}
                  required
                  className="w-full h-12 px-4 bg-[#1e293b] border border-slate-700 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-colors text-sm appearance-none cursor-pointer invalid:text-slate-500"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em`, paddingRight: `2.5rem` }}
                >
                  <option value="" disabled hidden>Selecciona una opción</option>
                  <option value="1-5" className="bg-slate-900 text-white">1-5 propiedades</option>
                  <option value="6-10" className="bg-slate-900 text-white">6-10 propiedades</option>
                  <option value="11-25" className="bg-slate-900 text-white">11-25 propiedades</option>
                  <option value="26-50" className="bg-slate-900 text-white">26-50 propiedades</option>
                  <option value="50+" className="bg-slate-900 text-white">Más de 50 propiedades</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              <div className="space-y-2.5">
                <label htmlFor="cleaningCost" className="text-sm font-medium text-slate-300 block">
                  ¿Cuánto pagas por limpieza actualmente? (Aprox. en USD) *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                  <Input
                    id="cleaningCost"
                    name="cleaningCost"
                    type="number"
                    inputMode="numeric"
                    placeholder="Ej. 35"
                    min="0"
                    value={formData.cleaningCost}
                    onChange={handleInputChange}
                    required
                    className="h-12 pl-8 bg-[#1e293b] border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                disabled={isPending}
                className="group w-full h-14 text-white text-lg font-semibold rounded-lg transition-all duration-300 bg-gradient-to-r from-blue-600 to-[#00d2ff] hover:opacity-90 shadow-[0_0_20px_rgba(0,210,255,0.25)] hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] hover:-translate-y-0.5 border-0"
              >
                {isPending ? "Enviando..." : "Solicitar acceso"}
                {!isPending && <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />}
              </Button>
            </div>

            <p className="text-sm text-slate-500 text-center mt-6">
              Al enviar este formulario, aceptas que KLYNN se comunique contigo sobre la plataforma.
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
