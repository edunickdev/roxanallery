import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/atoms/Button";
import { Heading, Eyebrow, Body } from "@/atoms/Typography";

export const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // TODO: Replace with POST /api/contact
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    setSubmitted(true);
    formRef.current?.reset();
  };

  return (
    <section id="contacto" className="py-28 px-8 lg:px-16 bg-roxana-surface/30">
      <div className="max-w-2xl mx-auto">
        <div className="mb-14 text-center">
          <Eyebrow className="mb-4">Hablemos</Eyebrow>
          <Heading
            level="h2"
            italic
            className="text-4xl lg:text-5xl text-white"
          >
            Contacto
          </Heading>
          <Body className="mt-4" muted>
            ¿Tienes un proyecto en mente? Me encantará escucharte.
          </Body>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-10"
          >
            <p className="font-serif italic text-2xl text-roxana-highlight">
              ¡Mensaje enviado!
            </p>
            <Body className="mt-2" muted>
              Te responderé en menos de 48 horas.
            </Body>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 font-sans text-xs tracking-widest uppercase text-roxana-muted hover:text-white cursor-pointer"
            >
              Enviar otro mensaje
            </button>
          </motion.div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-sans text-xs tracking-widest uppercase text-roxana-muted mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="
                    w-full bg-transparent border-b border-roxana-border
                    px-0 py-3 font-sans text-sm text-white
                    placeholder:text-roxana-border
                    focus:outline-none focus:border-roxana-primary
                    transition-colors duration-300
                  "
                />
              </div>
              <div>
                <label className="block font-sans text-xs tracking-widest uppercase text-roxana-muted mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="
                    w-full bg-transparent border-b border-roxana-border
                    px-0 py-3 font-sans text-sm text-white
                    placeholder:text-roxana-border
                    focus:outline-none focus:border-roxana-primary
                    transition-colors duration-300
                  "
                />
              </div>
            </div>

            <div>
              <label className="block font-sans text-xs tracking-widest uppercase text-roxana-muted mb-2">
                Proyecto
              </label>
              <input
                type="text"
                placeholder="¿De qué se trata?"
                className="
                  w-full bg-transparent border-b border-roxana-border
                  px-0 py-3 font-sans text-sm text-white
                  placeholder:text-roxana-border
                  focus:outline-none focus:border-roxana-primary
                  transition-colors duration-300
                "
              />
            </div>

            <div>
              <label className="block font-sans text-xs tracking-widest uppercase text-roxana-muted mb-2">
                Mensaje
              </label>
              <textarea
                required
                rows={4}
                placeholder="Cuéntame sobre tu proyecto..."
                className="
                  w-full bg-transparent border-b border-roxana-border
                  px-0 py-3 font-sans text-sm text-white
                  placeholder:text-roxana-border resize-none
                  focus:outline-none focus:border-roxana-primary
                  transition-colors duration-300
                "
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button type="submit" variant="outline" disabled={sending}>
                {sending ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
