'use client';

import { motion } from "framer-motion";
import {
  Zap,
  Eye,
  Cpu,
  Heart,
  Rocket,
  ClipboardCheck,
  Brain,
  HandHelping,
  Minimize2,
} from "lucide-react";

const values = [
  { icon: Zap, label: "Decisivos", description: "Actuamos con determinación y claridad en cada decisión." },
  { icon: Eye, label: "Transparentes", description: "Comunicación honesta y procesos visibles en todo momento." },
  { icon: Cpu, label: "Tecnológicos", description: "Herramientas digitales que potencian cada servicio." },
  { icon: Heart, label: "Humanos", description: "Las personas son el centro de todo lo que hacemos." },
  { icon: Rocket, label: "Ágiles", description: "Respuesta rápida y adaptación constante al cambio." },
  { icon: ClipboardCheck, label: "Estandarizados", description: "Procesos definidos que garantizan calidad consistente." },
  { icon: Brain, label: "Inteligentes", description: "Datos y análisis para decisiones más acertadas." },
  { icon: HandHelping, label: "Habilitadores", description: "Empoderamos a nuestro equipo y a nuestros clientes." },
  { icon: Minimize2, label: "Minimalistas", description: "Simplicidad y eficiencia en cada acción." },
];

const Values = () => {
  return (
    <section id="values" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-medium text-sm uppercase tracking-widest mb-4"
          >
            Nuestros valores
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold"
          >
            Lo que nos define
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, i) => (
            <motion.div
              key={value.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-4 p-5 rounded-xl hover:bg-muted/60 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <value.icon className="text-accent" size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">{value.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
