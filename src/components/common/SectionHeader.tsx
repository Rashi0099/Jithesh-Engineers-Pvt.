import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div
      className={`space-y-4 ${
        centered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      } ${className}`}
    >
      {badge && <Badge variant="accent">{badge}</Badge>}
      <h2 className="text-3xl sm:text-5xl font-black text-brand-navy tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
