'use client'

import { ComponentPropsWithRef, ElementType, ReactNode } from 'react'
import { cn } from '@/common/utils'

type FlexWrapperProps<T extends ElementType> = {
  as?: T
  children: ReactNode
} & Omit<ComponentPropsWithRef<T>, 'children'>

export const FlexWrapper = <T extends ElementType = 'div'>({
  as,
  className,
  children,
  ...rest
}: FlexWrapperProps<T>) => {
  const Component = as || 'div'

  return (
    <Component className={cn(`flex w-full grow flex-col items-center justify-center`, className)} {...rest}>
      {children}
    </Component>
  )
}
