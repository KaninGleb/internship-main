'use client'

import React from 'react'

import styles from './Button.module.css'

type ButtonProps = Partial<{
  children: React.ReactNode
  onClick: () => void
  variant: 'primary' | 'secondary' | 'dark' | 'default'
  size: 'small' | 'medium' | 'large'
  disabled: boolean
  loading: boolean
}>

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant, size, disabled, loading }: ButtonProps) => {
  const variantClass =
    variant === 'secondary'
      ? styles.buttonSecondary
      : variant === 'dark'
        ? styles.buttonDark
        : variant === 'primary'
          ? styles.buttonPrimary
          : styles.buttonDefault
  const sizeClass = size === 'small' ? styles.buttonSmall : size === 'large' ? styles.buttonLarge : styles.buttonMedium
  const disabledClass = disabled || loading ? styles.buttonDisabled : ''

  return (
    <button
      className={`${styles.button} ${variantClass} ${sizeClass} ${disabledClass}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? 'Загрузка...' : children}
    </button>
  )
}
