import React from 'react';

import { cn } from '@/lib/utils';

// Typography component interfaces
interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface HeadingProps extends TypographyProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

// Heading component (H1-H6)
export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 1,
  className,
  style,
}) => {
  const baseStyles =
    'font-averta-std font-bold text-[var(--color-heading)] leading-tight';

  const levelStyles = {
    1: 'text-[6vw] ',
    2: 'text-4xl md:text-5xl lg:text-6xl mb-5',
    3: 'text-3xl md:text-4xl lg:text-5xl mb-4',
    4: 'text-2xl md:text-3xl lg:text-4xl mb-4',
    5: 'text-xl md:text-2xl lg:text-3xl mb-3',
    6: 'text-lg md:text-xl lg:text-2xl mb-3',
  };

  const combinedClassName = cn(baseStyles, levelStyles[level], className);

  switch (level) {
    case 1:
      return (
        <h1 className={combinedClassName} style={style}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={combinedClassName} style={style}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={combinedClassName} style={style}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={combinedClassName} style={style}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={combinedClassName} style={style}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={combinedClassName} style={style}>
          {children}
        </h6>
      );
    default:
      return (
        <h1 className={combinedClassName} style={style}>
          {children}
        </h1>
      );
  }
};

// Individual heading components
export const H1: React.FC<TypographyProps> = ({
  children,
  className,
  style,
}) => (
  <Heading level={1} className={className} style={style}>
    {children}
  </Heading>
);

export const H2: React.FC<TypographyProps> = ({
  children,
  className,
  style,
}) => (
  <Heading level={2} className={className} style={style}>
    {children}
  </Heading>
);

export const H3: React.FC<TypographyProps> = ({
  children,
  className,
  style,
}) => (
  <Heading level={3} className={className} style={style}>
    {children}
  </Heading>
);

export const H4: React.FC<TypographyProps> = ({
  children,
  className,
  style,
}) => (
  <Heading level={4} className={className} style={style}>
    {children}
  </Heading>
);

export const H5: React.FC<TypographyProps> = ({
  children,
  className,
  style,
}) => (
  <Heading level={5} className={className} style={style}>
    {children}
  </Heading>
);

export const H6: React.FC<TypographyProps> = ({
  children,
  className,
  style,
}) => (
  <Heading level={6} className={className} style={style}>
    {children}
  </Heading>
);

// Paragraph component
export const P: React.FC<TypographyProps> = ({
  children,
  className,
  style,
}) => (
  <p
    className={cn(
      'text-base md:text-lg text-[var(--color-subheading)] font-averta-std leading-relaxed mb-4',
      className
    )}
    style={style}
  >
    {children}
  </p>
);

// Large paragraph/lead text
export const Lead: React.FC<TypographyProps> = ({ children, className }) => (
  <p
    className={cn(
      'text-lg md:text-xl text-[var(--color-subheading)] font-averta-std leading-relaxed mb-6',
      className
    )}
  >
    {children}
  </p>
);

// Small text
export const Small: React.FC<TypographyProps> = ({
  children,
  className,
  style,
}) => (
  <small
    className={cn(
      'text-sm text-[var(--color-subheading)] font-averta-std',
      className
    )}
    style={style}
  >
    {children}
  </small>
);

// Muted text
export const Muted: React.FC<TypographyProps> = ({ children, className }) => (
  <p
    className={cn(
      'text-sm text-[var(--color-subheading)] opacity-70 font-averta-std',
      className
    )}
  >
    {children}
  </p>
);

// Code text
export const Code: React.FC<TypographyProps> = ({ children, className }) => (
  <code
    className={cn(
      'text-sm font-mono bg-[var(--color-primary-soft)] text-[var(--color-primary)] px-2 py-1 rounded-md',
      className
    )}
  >
    {children}
  </code>
);

// Blockquote
export const Blockquote: React.FC<TypographyProps> = ({
  children,
  className,
}) => (
  <blockquote
    className={cn(
      'border-l-4 border-[var(--color-primary)] pl-6 italic text-[var(--color-subheading)] font-averta-std text-lg my-6',
      className
    )}
  >
    {children}
  </blockquote>
);

// List components
export const Ul: React.FC<TypographyProps> = ({ children, className }) => (
  <ul
    className={cn(
      'list-disc list-inside text-[var(--color-subheading)] font-averta-std space-y-2 mb-4',
      className
    )}
  >
    {children}
  </ul>
);

export const Ol: React.FC<TypographyProps> = ({ children, className }) => (
  <ol
    className={cn(
      'list-decimal list-inside text-[var(--color-subheading)] font-averta-std space-y-2 mb-4',
      className
    )}
  >
    {children}
  </ol>
);

export const Li: React.FC<TypographyProps> = ({ children, className }) => (
  <li
    className={cn('text-[var(--color-subheading)] font-averta-std', className)}
  >
    {children}
  </li>
);

// Text emphasis
export const Strong: React.FC<TypographyProps> = ({ children, className }) => (
  <strong
    className={cn(
      'font-bold text-[var(--color-heading)] font-averta-std',
      className
    )}
  >
    {children}
  </strong>
);

export const Em: React.FC<TypographyProps> = ({ children, className }) => (
  <em
    className={cn(
      'italic text-[var(--color-subheading)] font-averta-std',
      className
    )}
  >
    {children}
  </em>
);

// Badge/Tag component
export const Badge: React.FC<TypographyProps> = ({ children, className }) => (
  <span
    className={cn(
      'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-primary-soft)] text-[var(--color-primary)] font-averta-std',
      className
    )}
  >
    {children}
  </span>
);

// Caption text
export const Caption: React.FC<TypographyProps> = ({ children, className }) => (
  <figcaption
    className={cn(
      'text-sm text-[var(--color-subheading)] opacity-70 font-averta-std text-center mt-2',
      className
    )}
  >
    {children}
  </figcaption>
);

// Display text (larger than H1)
export const Display: React.FC<TypographyProps> = ({ children, className }) => (
  <h1
    className={cn(
      ' text-[9vw] font-bold text-[color:var(--color-heading)] font-averta-std leading-none ',
      className
    )}
  >
    {children}
  </h1>
);

// Pre-formatted text
export const Pre: React.FC<TypographyProps> = ({ children, className }) => (
  <pre
    className={cn(
      'bg-[var(--color-gray-50)] border border-[var(--color-border)] rounded-lg p-4 overflow-x-auto text-sm font-mono text-[var(--color-heading)] whitespace-pre-wrap',
      className
    )}
  >
    {children}
  </pre>
);

// Export all components as a single Typography object
export const Typography = {
  Heading,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Lead,
  Small,
  Muted,
  Code,
  Blockquote,
  Ul,
  Ol,
  Li,
  Strong,
  Em,
  Badge,
  Caption,
  Display,
  Pre,
};

export default Typography;
