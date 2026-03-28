import { motion } from "framer-motion";
import { Button } from "@/atoms/Button";
import { Eyebrow } from "@/atoms/Typography";

const HERO_IMAGES = {
  main: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
  secondary:
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const HeroSection: React.FC = () => {
  const handleScroll = () => {
    document.querySelector("#trabajo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-roxana-bg">
      {/* Grain texture overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.04] pointer-events-none z-10" />

      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-roxana-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-roxana-highlight/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-20 w-full px-8 lg:px-16 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-center">
        {/* ── Left: Text content ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.div variants={itemVariants}>
            <Eyebrow>Diseñadora Gráfica</Eyebrow>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif font-thin tracking-[0.12em] text-5xl lg:text-7xl xl:text-8xl text-roxana-text uppercase leading-[1.05]"
          >
            Roxana
            <br />
            <span className="text-roxana-primary">Espinoza</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-roxana-primary/40 w-3/4"
          />

          <motion.p
            variants={itemVariants}
            className="font-sans text-sm tracking-[0.15em] text-roxana-muted uppercase"
          >
            Identidad Visual · Editorial · Arte Digital
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button variant="outline" onClick={handleScroll}>
              Ver Portfolio
            </Button>
          </motion.div>
        </motion.div>

        {/* ── Right: Image composition ── */}
        <div className="relative h-[500px] lg:h-[620px]">
          {/* Main image – slightly tilted */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: -3 }}
            animate={{ opacity: 1, x: 0, rotate: -3 }}
            transition={{
              duration: 1.1,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="absolute top-0 right-0 w-[80%] h-[85%] overflow-hidden animate-float"
            style={{ boxShadow: "0 25px 80px rgba(249, 150, 189, 0.20)" }}
          >
            <img
              src={HERO_IMAGES.main}
              alt="Roxana Espinoza trabajo de diseño"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-roxana-surface/30" />
          </motion.div>

          {/* Secondary image – overlapping */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.85,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="absolute bottom-0 left-0 w-[42%] h-[48%] overflow-hidden"
            style={{ boxShadow: "0 16px 50px rgba(92, 41, 8, 0.35)" }}
          >
            <img
              src={HERO_IMAGES.secondary}
              alt="Detalle de diseño gráfico"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-roxana-primary/10" />
          </motion.div>

          {/* Vertical label */}
          <div className="absolute right-[-2rem] top-1/2 -translate-y-1/2 hidden xl:block">
            <span
              className="font-sans text-xs tracking-[0.3em] text-roxana-border uppercase"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Portfolio 2025
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="font-sans text-xs tracking-widest uppercase text-roxana-muted">
          Scroll
        </span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-roxana-muted to-transparent"
          animate={{ scaleY: [0, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};
