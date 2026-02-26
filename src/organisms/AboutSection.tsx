import { motion } from "framer-motion";
import { Heading, Body, Eyebrow } from "@/atoms/Typography";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1452696193712-6cabf5103b63?w=700&q=80";

export const AboutSection: React.FC = () => (
  <section id="sobre-mi" className="py-28 px-8 lg:px-16 bg-roxana-bg">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true }}
        className="relative"
      >
        <div
          className="absolute -inset-4 border border-roxana-primary/20"
          style={{ transform: "rotate(2deg)" }}
        />
        <img
          src={ABOUT_IMAGE}
          alt="Roxana Espinoza diseñadora"
          className="w-full max-h-[500px] object-cover relative z-10"
          style={{ filter: "saturate(0.85)" }}
        />
        <div className="absolute inset-0 bg-roxana-primary/10 z-10 mix-blend-multiply" />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.15,
        }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <Eyebrow>Sobre mí</Eyebrow>
        <Heading level="h2" italic className="text-4xl lg:text-5xl text-white">
          Diseño que{" "}
          <span className="text-roxana-highlight">cuenta historias</span>
        </Heading>
        <Body muted className="leading-loose">
          Soy Roxana Espinoza, diseñadora gráfica con más de 8 años de
          experiencia creando identidades visuales, editoriales y piezas
          digitales que trascienden la pantalla. Mi trabajo nace de la
          convicción de que el diseño más poderoso es el que siente necesario y,
          al mismo tiempo, inevitable.
        </Body>
        <Body muted className="leading-loose">
          Combinando el minimalismo contemporáneo con una sensibilidad editorial
          profunda, cada proyecto es una conversación entre la forma, el espacio
          y el significado.
        </Body>
        <div className="grid grid-cols-3 gap-6 pt-4 border-t border-roxana-border/40">
          {[
            ["8+", "Años de\nexperiencia"],
            ["120+", "Proyectos\ncompletados"],
            ["40+", "Clientes\nsatisfechos"],
          ].map(([num, label]) => (
            <div key={num}>
              <p className="font-serif text-3xl text-roxana-highlight font-thin">
                {num}
              </p>
              <p className="font-sans text-xs tracking-wider text-roxana-muted mt-1 whitespace-pre-line uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
