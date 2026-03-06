'use client';

import { useState, useTransition } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "@/src/hooks/use-toast";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    propertyCount: '',
    operationType: ''
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
      setFormData({ fullName: '', email: '', propertyCount: '', operationType: '' });
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-gradient-to-br from-[#0a192f] via-[#071830] to-[#020617] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 tracking-tight">
            La rentabilidad depende de la operación.
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
                placeholder="Juan Pérez"
                value={formData.fullName}
                onChange={handleInputChange}
                required
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
                className="h-12 bg-[#1e293b] border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2.5">
              <label htmlFor="propertyCount" className="text-sm font-medium text-slate-300 block">
                Número de Propiedades *
              </label>
              <select
                id="propertyCount"
                name="propertyCount"
                value={formData.propertyCount}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-4 bg-[#1e293b] border border-slate-700 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-colors text-sm appearance-none cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em`, paddingRight: `2.5rem` }}
              >
                <option value="" className="bg-slate-900 text-slate-400">Selecciona una opción</option>
                <option value="1-5" className="bg-slate-900">1-5 propiedades</option>
                <option value="6-10" className="bg-slate-900">6-10 propiedades</option>
                <option value="11-25" className="bg-slate-900">11-25 propiedades</option>
                <option value="26-50" className="bg-slate-900">26-50 propiedades</option>
                <option value="50+" className="bg-slate-900">Más de 50 propiedades</option>
              </select>
            </div>

            <div className="space-y-2.5">
              <label htmlFor="operationType" className="text-sm font-medium text-slate-300 block">
                Tipo de Operación *
              </label>
              <select
                id="operationType"
                name="operationType"
                value={formData.operationType}
                onChange={handleInputChange}
                required
                className="w-full h-12 px-4 bg-[#1e293b] border border-slate-700 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-colors text-sm appearance-none cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em`, paddingRight: `2.5rem` }}
              >
                <option value="" className="bg-slate-900 text-slate-400">Selecciona una opción</option>
                <option value="airbnb-host" className="bg-slate-900">Anfitrión Airbnb</option>
                <option value="property-manager" className="bg-slate-900">Property Manager</option>
                <option value="boutique-hotel" className="bg-slate-900">Hotel Boutique</option>
                <option value="vacation-rental" className="bg-slate-900">Arriendo Vacacional</option>
                <option value="other" className="bg-slate-900">Otro</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isPending}
              className="group w-full h-14 text-white text-lg font-semibold rounded-lg transition-all duration-300 bg-gradient-to-r from-blue-600 to-[#00d2ff] hover:opacity-90 shadow-[0_0_20px_rgba(0,210,255,0.25)] hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] hover:-translate-y-0.5 border-0"
            >
              {isPending ? "Enviando..." : "Solicitar acceso a KLYNN"}
              {!isPending && <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />}
            </Button>
          </div>

          <p className="text-sm text-slate-500 text-center mt-6">
            Al enviar este formulario, aceptas que KLYNN se comunique contigo sobre la plataforma.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;