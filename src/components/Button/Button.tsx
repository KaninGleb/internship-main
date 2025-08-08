'use client'
import React from 'react'
import { VariantUnitType, SizeUnitType } from '@/common/types'
import s from './Button.module.css'

type ButtonProps = Partial<
  {
    onClick: () => void
    variant: VariantUnitType
    size: SizeUnitType
    loading: boolean
  } & React.ButtonHTMLAttributes<HTMLSelectElement>
>

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant, size, disabled, loading }: ButtonProps) => {
  const variantClass =
    variant === 'secondary'
      ? s.buttonSecondary
      : variant === 'transparent'
        ? s.buttonTransparent
        : variant === 'primary'
          ? s.buttonPrimary
          : s.buttonDefault
  const sizeClass = size === 'small' ? s.buttonSmall : size === 'large' ? s.buttonLarge : s.buttonMedium
  const disabledClass = disabled || loading ? s.buttonDisabled : ''

  return (
    <button
      className={`${s.button} ${variantClass} ${sizeClass} ${disabledClass}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? 'Загрузка...' : children}
    </button>
  )
}
