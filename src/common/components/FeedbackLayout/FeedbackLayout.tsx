import { ComponentProps, FormEvent, ReactNode } from 'react'
import Image, { ImageProps } from 'next/image'
import { Typography } from '@/common/components'
import { cn } from '@/common/utils'

const FeedbackLayoutRoot = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn('bg-dark-700 font-inter flex min-h-screen flex-col items-center pt-8.75 text-white', className)}>
      {children}
    </div>
  )
}

const FeedbackLayoutTitle = ({ className, ...props }: ComponentProps<typeof Typography>) => {
  return (
    <Typography variant='h3' className={cn('pb-5 text-center text-xl leading-[1.8] font-bold', className)} {...props} />
  )
}

const FeedbackLayoutMessage = ({ className, ...props }: ComponentProps<typeof Typography>) => {
  return <Typography className={cn('font-inter text-center text-base leading-6', className)} {...props} />
}

const FeedbackLayoutActions = ({
  children,
  className,
  onSubmit,
}: {
  children: ReactNode
  className?: string
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
}) => {
  return (
    <form className={cn('flex w-full flex-col items-center', className)} onSubmit={onSubmit} aria-required noValidate>
      {children}
    </form>
  )
}

const FeedbackLayoutImage = ({ className, ...props }: ImageProps) => {
  return (
    <div className='relative flex justify-center'>
      <Image className={cn('object-contain', className)} unoptimized priority={true} {...props} />
    </div>
  )
}

export const FeedbackLayout = {
  Root: FeedbackLayoutRoot,
  Title: FeedbackLayoutTitle,
  Message: FeedbackLayoutMessage,
  Actions: FeedbackLayoutActions,
  Image: FeedbackLayoutImage,
}
