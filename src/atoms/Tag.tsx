interface TagProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export const Tag: React.FC<TagProps> = ({ children, className = "" }) => (
  <span
    className={`
      inline-block px-3 py-1 font-sans text-xs tracking-wider uppercase
      border border-roxana-primary/60 text-roxana-primary
      rounded-sm
      ${className}
    `}
  >
    {children}
  </span>
);
