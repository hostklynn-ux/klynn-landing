import { motion } from "framer-motion";
import { Cpu, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-medium text-sm uppercase tracking-widest mb-4"
          >
            Sobre nosotros
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold mb-6"
          >
            Tecnología y humanidad al servicio de la limpieza
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            En KLYNN creemos que la limpieza inteligente va más allá de superficies
            impecables. Integramos procesos estandarizados, herramientas tecnológicas
            y un equipo humano comprometido para ofrecer una experiencia de servicio
            excepcional.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative p-8 rounded-2xl bg-card border border-border group hover:border-secondary/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
              <Cpu className="text-secondary" size={24} />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">Enfoque tecnológico</h3>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos sistemas de gestión inteligente, monitoreo en tiempo real
              y procesos automatizados para garantizar resultados consistentes y medibles
              en cada servicio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative p-8 rounded-2xl bg-card border border-border group hover:border-accent/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Heart className="text-accent" size={24} />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">Factor humano</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro equipo es nuestra fortaleza. Personas capacitadas, motivadas
              y comprometidas con la excelencia, que entienden que cada espacio
              cuenta una historia.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
