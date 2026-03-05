'use client';

import { useTransition } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "@/src/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

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
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-primary via-[#08352f] to-[#041a17] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/5 opacity-10"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Únete al Acceso Anticipado
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Sé parte de los primeros operadores en transformar su gestión de limpieza y preparación
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl space-y-6">
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                Nombre Completo *
              </label>
              <Input
                id="fullName" 
                name="fullName"
                placeholder="Juan Pérez" 
                required 
                type="text" 
                className="border-gray-300 focus-visible:ring-primary"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Corporativo *
              </label>
              <Input
                id="email" 
                name="email"
                placeholder="juan@tuempresa.com" 
                required 
                type="email" 
                className="border-gray-300 focus-visible:ring-primary"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="propertyCount" className="text-sm font-medium text-gray-700">
                Número de Propiedades *
              </label>
              <select 
                id="propertyCount"
                name="propertyCount" 
                required
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              >
                <option value="">Selecciona una opción</option>
                <option value="1-5">1-5 propiedades</option>
                <option value="6-10">6-10 propiedades</option>
                <option value="11-25">11-25 propiedades</option>
                <option value="26-50">26-50 propiedades</option>
                <option value="50+">Más de 50 propiedades</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="operationType" className="text-sm font-medium text-gray-700">
                Tipo de Operación *
              </label>
              <select 
                id="operationType" 
                name="operationType"
                required
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              >
                <option value="">Selecciona una opción</option>
                <option value="airbnb-host">Anfitrión Airbnb</option>
                <option value="property-manager">Property Manager</option>
                <option value="boutique-hotel">Hotel Boutique</option>
                <option value="vacation-rental">Arriendo Vacacional</option>
                <option value="other">Otro</option>
              </select>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="group w-full h-14 text-lg bg-gradient-to-r from-secondary to-primary hover:opacity-90 text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            {isPending ? "Enviando solicitud..." : "Solicitar Acceso Anticipado"}
            
            {!isPending && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            )}
          </Button>

          <p className="text-sm text-gray-500 text-center">
            Al enviar este formulario, aceptas que KLYNN se comunique contigo sobre el producto.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
