import type { ButtonVariant } from "@/types";
import { motion } from "framer-motion";

interface ButtonProps {
  readonly children: React.ReactNode;
  readonly variant?: ButtonVariant;
  readonly onClick?: () => void;
  readonly type?: "button" | "submit" | "reset";
  readonly disabled?: boolean;
  readonly className?: string;
  readonly as?: "a";
  readonly href?: string;
  readonly target?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-roxana-primary text-white border border-roxana-primary hover:bg-roxana-primary-hover hover:border-roxana-primary-hover",
  outline:
    "bg-transparent text-roxana-text border border-roxana-primary hover:bg-roxana-primary/10",
  ghost:
    "bg-transparent text-roxana-highlight border border-transparent hover:border-roxana-border",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        inline-flex items-center justify-center gap-2
        px-7 py-3 font-sans text-sm tracking-widest uppercase
        transition-all duration-300 cursor-pointer
        disabled:opacity-40 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};
