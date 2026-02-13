'use client';

import { motion } from "framer-motion";
import { Building2, Home, Sparkles, Factory, ShieldCheck, Leaf } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Limpieza comercial",
    description: "Oficinas, centros comerciales y espacios corporativos con los más altos estándares.",
  },
  {
    icon: Home,
    title: "Limpieza residencial",
    description: "Hogares impecables con productos ecológicos y atención personalizada.",
  },
  {
    icon: Factory,
    title: "Limpieza industrial",
    description: "Naves, fábricas y almacenes con equipos especializados y protocolos de seguridad.",
  },
  {
    icon: Sparkles,
    title: "Limpieza especializada",
    description: "Cristales, alfombras, post-obra y tratamiento de superficies delicadas.",
  },
  {
    icon: ShieldCheck,
    title: "Sanitización",
    description: "Desinfección profunda con tecnología certificada para espacios seguros.",
  },
  {
    icon: Leaf,
    title: "Limpieza sostenible",
    description: "Productos biodegradables y prácticas responsables con el medio ambiente.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-medium text-sm uppercase tracking-widest mb-4"
          >
            Nuestros servicios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold"
          >
            Soluciones para cada espacio
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="text-secondary" size={22} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
