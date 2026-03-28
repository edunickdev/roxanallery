import { motion, AnimatePresence } from "framer-motion";
import type { ProjectImage } from "@/types";
import { useCarousel } from "@/hooks/useCarousel";

interface ImageCarouselProps {
  readonly images: ProjectImage[];
  readonly className?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  className = "",
}) => {
  const { currentIndex, next, prev, goTo } = useCarousel(images.length);
  const current = images[currentIndex];

  return (
    <div className={`relative select-none ${className}`}>
      {/* Main slide */}
      <div className="relative overflow-hidden aspect-[4/3] bg-roxana-surface">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.id}
            src={current.url}
            alt={current.alt}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Arrow controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="
                absolute left-4 top-1/2 -translate-y-1/2
                w-10 h-10 flex items-center justify-center
                bg-roxana-bg/70 border border-roxana-border
                text-roxana-text hover:bg-roxana-primary/70
                transition-all duration-300 cursor-pointer
              "
              aria-label="Imagen anterior"
            >
              ←
            </button>
            <button
              onClick={next}
              className="
                absolute right-4 top-1/2 -translate-y-1/2
                w-10 h-10 flex items-center justify-center
                bg-roxana-bg/70 border border-roxana-border
                text-roxana-text hover:bg-roxana-primary/70
                transition-all duration-300 cursor-pointer
              "
              aria-label="Siguiente imagen"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {images.map((img, i) => (
            <button
              key={img.id}
              onClick={() => goTo(i)}
              aria-label={`Ir a imagen ${i + 1}`}
              className="cursor-pointer"
            >
              <motion.div
                animate={{
                  width: i === currentIndex ? 24 : 8,
                  backgroundColor:
                    i === currentIndex
                      ? "var(--color-primary)"
                      : "var(--color-border)",
                }}
                transition={{ duration: 0.3 }}
                className="h-1.5 rounded-full"
              />
            </button>
          ))}
        </div>
      )}

      {/* Counter */}
      <p className="text-center font-sans text-xs text-roxana-muted mt-2 tracking-widest">
        {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
};
