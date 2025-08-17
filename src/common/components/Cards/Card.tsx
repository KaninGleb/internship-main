import React, { ComponentProps, forwardRef } from 'react'
import { cn } from '@/common/utils'

type CardProps = {
  className?: string
} & ComponentProps<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(({ children, className, ...props }, ref) => {
  return (
    <div
      className={cn(
        'min-h-[100px] min-w-[100px] rounded-xs border border-[var(--color-dark-300)] bg-[var(--color-dark-500)]',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
})
