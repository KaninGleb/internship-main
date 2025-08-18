'use client'

import React from 'react'
import { VariantUnitType, SizeUnitType } from '@/common/types'
import { cn } from '@/common/utils'

type ButtonProps = Partial<{
  onClick: () => void
  variant: VariantUnitType
  size: SizeUnitType
  loading: boolean
  className: string
  disabled: boolean
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'default',
  size = 'medium',
  disabled,
  loading,
  className,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading

  const baseClasses = cn(
    'flex justify-center items-center gap-2.5',
    'min-h-9 py-1.5 px-6 text-base',
    'border-none rounded-[2px]',
    'transition-[opacity,background-color,color,box-shadow] duration-200 ease-in-out',
    'font-medium leading-6 cursor-pointer opacity-100',
    'focus:outline-none focus:shadow-[0_0_0_2px_var(--color-accent-700)]',
    'disabled:cursor-not-allowed',
  )

  const defaultVariant = cn(
    'border-none outline-none shadow-none text-accent-500 bg-transparent',
    'hover:text-accent-100 active:text-accent-700 active:border-none',
    'focus:shadow-none focus:border-solid focus-visible:border-2 focus-visible:border-accent-300',
    'disabled:text-accent-900 disabled:border-none',
  )

  const variantClasses =
    {
      primary: cn(
        'text-light-100 bg-accent-500' +
          ' hover:bg-accent-100 disabled:bg-accent-900 active:bg-accent-700 ' +
          'focus:border-accent-700 disabled:text-light-900 disabled:bg-accent-900',
      ),

      secondary: cn(
        'border-none outline-none shadow-none text-light-100 ' +
          'bg-dark-300 hover:bg-dark-100 active:bg-[#212121] active:border-none focus:bg-dark-300 ' +
          'focus:shadow-none focus:border-solid focus-visible:border focus-visible:border-accent-300 ' +
          'disabled:bg-dark-500 disabled:text-light-900 disabled:border-none',
      ),

      transparent: cn(
        'text-accent-500 bg-transparent border border-solid border-accent-500 ' +
          'hover:text-accent-100 hover:border-accent-100 active:border-accent-700 ' +
          'active:text-accent-700 disabled:text-accent-900 disabled:border-accent-900 ' +
          'focus:shadow-none focus-visible:border-2 focus-visible:border-accent-700',
      ),

      default: defaultVariant,
    }[variant] || defaultVariant

  const sizeClasses = {
    small: 'min-h-0 h-auto py-1 px-4',
    medium: 'py-1.5 px-6',
    large: 'min-h-0 h-auto py-2 px-8',
  }[size]

  return (
    <button
      className={cn(baseClasses, variantClasses, sizeClasses, className)}
      onClick={onClick}
      disabled={isDisabled}
      {...props}
    >
      {loading ? 'Загрузка...' : children}
    </button>
  )
}
