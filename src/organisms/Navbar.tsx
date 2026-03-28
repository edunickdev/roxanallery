import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useUIStore } from "@/store/useUIStore";
import { useThemeStore } from "@/store/useThemeStore";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";

const NAV_LINKS = [
  { label: "Trabajo", href: "#trabajo" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export const Navbar: React.FC = () => {
  useScrollNavigation();
  const isScrolled = useUIStore((s) => s.isNavScrolled);
  const { theme, toggleTheme } = useThemeStore();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-8 lg:px-16 py-5
        transition-all duration-500
        ${
          isScrolled
            ? "bg-roxana-bg/80 backdrop-blur-md border-b border-roxana-border/40"
            : "bg-transparent"
        }
      `}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Logo */}
      <Link
        to="/"
        className="font-serif italic text-2xl text-roxana-primary tracking-wide hover:text-roxana-highlight transition-colors duration-300"
      >
        RE
      </Link>

      {/* Nav links + Theme toggle */}
      <nav className="flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <button
            key={link.label}
            onClick={() => handleNavClick(link.href)}
            className="
              relative font-sans text-sm tracking-widest uppercase
              text-roxana-muted hover:text-roxana-text
              transition-colors duration-300 cursor-pointer
              group hidden md:block
            "
          >
            {link.label}
            <span
              className="
              absolute -bottom-1 left-0 h-px w-0 bg-roxana-primary
              group-hover:w-full transition-all duration-400
            "
            />
          </button>
        ))}

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label={
            theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
          }
          className="
            relative w-10 h-10 flex items-center justify-center
            rounded-full border border-roxana-border
            text-roxana-muted hover:text-roxana-text hover:border-roxana-primary
            transition-all duration-300 cursor-pointer
            bg-roxana-surface/50
          "
        >
          <motion.span
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-base"
          >
            {theme === "dark" ? "☀" : "☾"}
          </motion.span>
        </button>
      </nav>
    </motion.header>
  );
};
