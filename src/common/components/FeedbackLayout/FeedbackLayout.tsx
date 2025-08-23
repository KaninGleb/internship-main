import { ComponentProps, FormEvent, ReactNode } from 'react'
import Image, { ImageProps } from 'next/image'
import { Typography } from '@/common/components'
import { cn } from '@/common/utils'

const FeedbackLayoutRoot = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        'bg-dark-700 flex min-h-screen flex-col items-center pt-8.75 font-[var(--font-family-primary)] text-white',
        className,
      )}
    >
      {children}
    </div>
  )
}

const FeedbackLayoutTitle = ({ className, ...props }: ComponentProps<typeof Typography>) => {
  return (
    <Typography
      variant='h3'
      className={cn('pb-5 text-center text-xl leading-[1.8] font-[var(--font-weight-bold)]', className)}
      {...props}
    />
  )
}

const FeedbackLayoutMessage = ({ className, ...props }: ComponentProps<typeof Typography>) => {
  return (
    <Typography
      className={cn(
        'text-center text-base leading-[var(--line-height-m)] font-[var(--font-weight-regular)]',
        className,
      )}
      {...props}
    />
  )
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
