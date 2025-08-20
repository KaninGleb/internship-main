import { ComponentProps, forwardRef } from 'react'
import { cn } from '@/common/utils'

type CardProps = ComponentProps<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('border-dark-300 bg-dark-500 rounded-xs border', className)} {...props}>
      {children}
    </div>
  )
})
