import React from 'react';

interface IconProps {
  name: 'google' | 'github';
  size?: number;
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', className = '' }) => {
  const sprite = '/assets/sprite.svg';

  return (
    <svg width={size} height={size} fill={color} className={className}>
      <use href={`${sprite}#${name}`} />
    </svg>
  );
};

