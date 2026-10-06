import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'neutral' | 'outline' | 'navy';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'accent',
  className = '',
}) => {
  const variantStyles = {
    accent:
      'bg-blue-50 text-brand-accent border border-blue-200/80',
    neutral:
      'bg-brand-light text-slate-700 border border-brand-border',
    outline:
      'border border-slate-300 text-slate-600 bg-white',
    navy:
      'bg-brand-navy text-white border border-brand-navy',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
