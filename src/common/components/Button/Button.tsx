'use client'

import React, { ButtonHTMLAttributes, type ElementType, forwardRef } from 'react'
import { VariantUnitType, SizeUnitType } from '@/common/types'
import { cn } from '@/common/utils'

type ButtonProps = {
  as?: ElementType
  onClick?: () => void
  variant?: VariantUnitType
  size?: SizeUnitType
  loading?: boolean
  className?: string
  disabled?: boolean
  fullWidth?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const sizeClassesMap = {
  small: 'py-1 px-4',
  medium: 'min-h-9 py-1.5 px-6',
  large: 'py-2 px-8',
}

const variantClassesMap = {
  primary: cn(
    'text-light-100 bg-accent-500',
    'hover:bg-accent-100 active:bg-accent-700',
    'disabled:bg-accent-900 disabled:text-light-900',
    'focus-visible:ring-2 focus-visible:ring-accent-700',
  ),
  secondary: cn(
    'text-light-100 bg-dark-300',
    'hover:bg-dark-100 active:bg-[#212121]',
    'disabled:bg-dark-500 disabled:text-light-900',
    'focus-visible:ring-2 focus-visible:ring-accent-300',
  ),
  transparent: cn(
    'text-accent-500 bg-transparent border border-solid border-accent-500',
    'hover:text-accent-100 hover:border-accent-100',
    'active:text-accent-700 active:border-accent-700',
    'disabled:text-accent-900 disabled:border-accent-900',
    'focus-visible:ring-2 focus-visible:ring-accent-700',
  ),
  default: cn(
    'text-accent-500 bg-transparent',
    'hover:text-accent-100 active:text-accent-700',
    'disabled:text-accent-900',
    'focus-visible:ring-2 focus-visible:ring-accent-300',
  ),
}

export const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    {
      as: Component = 'button',
      children,
      onClick,
      variant = 'default',
      size = 'medium',
      disabled,
      loading,
      className,
      fullWidth,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading

    const baseClasses = cn(
      'flex justify-center items-center gap-2.5',
      'text-base',
      'border-none rounded-[2px]',
      'transition-[opacity,background-color,color,box-shadow] duration-200 ease-in-out',
      'font-semibold cursor-pointer opacity-100',
      'focus:outline-none',
      'disabled:cursor-not-allowed',
      fullWidth && 'w-full',
    )

    const variantClasses = variantClassesMap[variant] || variantClassesMap.default
    const sizeClasses = sizeClassesMap[size]

    return (
      <Component
        ref={ref}
        className={cn(baseClasses, variantClasses, sizeClasses, className)}
        onClick={onClick}
        disabled={isDisabled}
        {...props}
      >
        {loading ? 'Загрузка...' : children}
      </Component>
    )
  },
)
