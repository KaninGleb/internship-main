'use client'
import React from 'react'
import { cn } from '@/common/utils'

type LoaderProps = {
  size?: number // px
  durationMs?: number // скорость вращения
  className?: string // доп классы (цвет и т.д.)
  label?: string // aria-label
}

export const Loader: React.FC<LoaderProps> = ({ size = 20, durationMs = 1100, className, label = 'Loading…' }) => {
  return (
    <span
      role='status'
      aria-label={label}
      className={cn('inline-flex animate-spin', className)}
      style={{ animationDuration: `${durationMs}ms` }}
    >
      <svg
        viewBox='0 0 24 24'
        width={size}
        height={size}
        fill='none'
        stroke='currentColor'
        strokeWidth='3'
        strokeLinecap='round'
      >
        <circle cx='12' cy='12' r='10' className='opacity-20' />
        <path d='M22 12a10 10 0 0 0-10-10' />
      </svg>
    </span>
  )
}
