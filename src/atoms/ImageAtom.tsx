import { useState } from "react";
import { motion } from "framer-motion";

interface ImageAtomProps {
  readonly src: string;
  readonly alt: string;
  readonly className?: string;
  readonly aspectRatio?: string;
}

export const ImageAtom: React.FC<ImageAtomProps> = ({
  src,
  alt,
  className = "",
  aspectRatio = "auto",
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      style={{ aspectRatio }}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-roxana-surface animate-pulse" />
      )}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
