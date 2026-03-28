import type { HeadingLevel } from "@/types";

interface HeadingProps {
  readonly children: React.ReactNode;
  readonly level?: HeadingLevel;
  readonly className?: string;
  readonly italic?: boolean;
}

interface BodyProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly muted?: boolean;
}

interface EyebrowProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = "h2",
  className = "",
  italic = false,
}) => {
  const Tag = level;
  return (
    <Tag
      className={`
        font-serif font-thin tracking-widest
        ${italic ? "italic" : ""}
        ${className}
      `}
    >
      {children}
    </Tag>
  );
};

export const Body: React.FC<BodyProps> = ({
  children,
  className = "",
  muted = false,
}) => (
  <p
    className={`
      font-sans leading-relaxed
      ${muted ? "text-roxana-muted" : "text-roxana-text-soft"}
      ${className}
    `}
  >
    {children}
  </p>
);

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  className = "",
}) => (
  <span
    className={`
      font-sans text-xs tracking-[0.25em] uppercase text-roxana-muted
      ${className}
    `}
  >
    {children}
  </span>
);
