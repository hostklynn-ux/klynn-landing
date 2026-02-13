'use client';

import { motion } from "framer-motion";

const stats = [
  { number: "98%", label: "Satisfacción del cliente" },
  { number: "+500", label: "Espacios transformados" },
  { number: "24/7", label: "Soporte disponible" },
  { number: "100%", label: "Productos ecológicos" },
];

const WhyKlynn = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-medium text-sm uppercase tracking-widest mb-4"
          >
            ¿Por qué KLYNN?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold mb-6"
          >
            Números que hablan por nosotros
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-background/60 text-lg"
          >
            Nuestro compromiso con la excelencia se refleja en cada métrica.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-6xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <p className="text-background/70 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKlynn;
