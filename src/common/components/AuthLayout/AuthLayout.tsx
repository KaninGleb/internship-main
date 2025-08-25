'use client'

import { cn } from '@/common/utils'
import { Card } from '../Cards/Card'
import { Typography } from '../Typography/Typography'

type AuthCardProps = {
  title: string
  children: React.ReactNode
  mb?: string
  pb?: string
  className?: string
}

export const AuthLayout = ({ title, children, className, mb = '3.5', pb }: AuthCardProps) => {
  return (
    <Card className={cn('flex w-full max-w-[380px] flex-col items-center p-6', pb && `pb-[${pb}]`, className)}>
      <Typography as={'h1'} variant={'h1'} className={cn(mb && `mb-${mb}`)}>
        {title}
      </Typography>
      <div className={'w-full'}>{children}</div>
    </Card>
  )
}
