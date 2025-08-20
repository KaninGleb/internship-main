'use client'

import { cn } from '@/common/utils'
import { ComponentPropsWithRef } from 'react'

type PageWrapperProps = ComponentPropsWithRef<'main'> & {
  direction?: 'row' | 'col'
  mt?: string
  pl?: string
  pr?: string
}

export const PageWrapper = ({ className, direction = 'col', mt, pl, pr, ...rest }: PageWrapperProps) => {
  return (
    <main
      className={cn(`flex h-screen w-full justify-center flex-${direction} mt-${mt} pl-${pl} pr-${pr}`, className)}
      {...rest}
    />
  )
}
