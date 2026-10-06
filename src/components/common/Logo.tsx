import React from 'react';
import { assetUrl } from '@/lib/assets';

export interface LogoProps {
  /**
   * 'light': standard branding with black text (for white/light backgrounds)
   * 'dark': white text variant (for dark backgrounds like Hero header & Navy Footer)
   * 'auto': dynamically switch based on isScrolled / isDarkNav
   */
  variant?: 'light' | 'dark' | 'auto';
  isDarkNav?: boolean;
  className?: string;
  imgClassName?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'auto',
  isDarkNav = false,
  className = '',
  imgClassName = 'h-8 sm:h-9 md:h-10 w-auto',
  onClick,
}) => {
  // Determine image source based on variant / nav state:
  // When isDarkNav is true (navbar scrolled on white background) -> use logo-transparent (black text)
  // When isDarkNav is false (transparent navbar over dark hero) -> use logo-white (white text)
  const rawSrc =
    variant === 'dark'
      ? '/logo-white.png'
      : variant === 'light'
      ? '/logo-transparent.png'
      : isDarkNav
      ? '/logo-transparent.png'
      : '/logo-white.png';

  const src = assetUrl(rawSrc);

  const content = (
    <img
      src={src}
      alt="Jithesh Engineers Pvt. Ltd. | Structural Engineers"
      className={`object-contain transition-all duration-300 select-none ${imgClassName}`}
      loading="eager"
    />
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded text-left transition-opacity duration-200 hover:opacity-90 ${className}`}
        aria-label="Jithesh Engineers Pvt. Ltd. - Home"
      >
        {content}
      </button>
    );
  }

  return <div className={`flex items-center ${className}`}>{content}</div>;
};
