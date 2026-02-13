'use client';

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-medium text-sm uppercase tracking-widest mb-4"
          >
            Testimonios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold"
          >
            Lo que dicen nuestros clientes
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border flex flex-col"
            >
              <Quote className="text-accent/40 mb-4" size={28} />
              <p className="text-foreground/80 leading-relaxed mb-6 flex-1">{t.text}</p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <div>
                <p className="font-display font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
