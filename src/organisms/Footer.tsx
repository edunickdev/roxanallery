export const Footer: React.FC = () => (
  <footer className="py-12 px-8 lg:px-16 border-t border-roxana-border/40">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <span className="font-serif italic text-xl text-roxana-highlight">
        RE
      </span>
      <p className="font-sans text-xs tracking-widest text-roxana-muted uppercase">
        © 2025 Roxana Espinoza · Diseño Gráfico
      </p>
      <div className="flex items-center gap-6">
        {["Instagram", "Behance", "LinkedIn"].map((net) => (
          <a
            key={net}
            href={`#${net.toLowerCase()}`}
            className="font-sans text-xs tracking-wider text-roxana-muted hover:text-white transition-colors duration-300 uppercase"
          >
            {net}
          </a>
        ))}
      </div>
    </div>
  </footer>
);
