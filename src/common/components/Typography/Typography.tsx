import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { cn } from '@/common/utils'

type TypographyVariant = 'p' | 'large' | 'h1' | 'h2' | 'h3' | 'link'

const variantClasses: Record<TypographyVariant, string> = {
  p: 'text-sm font-normal leading-relaxed',
  large: 'text-2xl font-semibold leading-snug',
  h1: 'text-xl font-bold leading-relaxed',
  h2: 'text-xl font-semibold leading-tight',
  h3: 'text-base font-semibold leading-normal',
  link: 'text-accent-300 underline hover:text-accent-500',
}

type TypographyProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
  variant?: TypographyVariant
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className' | 'variant'>

export const Typography = <T extends ElementType = 'p'>({
  as,
  children,
  className,
  variant = 'p',
  ...restProps
}: TypographyProps<T>) => {
  const Text = as || getDefaultComponent(variant)

  return (
    <Text className={cn(variantClasses[variant], className)} {...restProps}>
      {children}
    </Text>
  )
}

const getDefaultComponent = (variant: TypographyVariant): ElementType => {
  switch (variant) {
    case 'large':
    case 'h1':
      return 'h1'
    case 'h2':
      return 'h2'
    case 'h3':
      return 'h3'
    default:
      return 'p'
  }
}
