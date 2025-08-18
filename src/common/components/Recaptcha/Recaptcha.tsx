'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/common/utils'
import { Icon } from '../Icon/Icon'
import { Loader } from '@/common/components/Loader/Loader'
import { Typography } from '@/common/components'

type Status = 'default' | 'checked' | 'loading' | 'error' | 'expired'

type RecaptchaProps = {
  className?: string
  label?: string
  initialStatus?: Status
  loadingMs?: number
  expireAfterMs?: number
  onVerify?: (verified: boolean) => void
  onExpire?: () => void
  errorText?: string
  expiredText?: string
}

export const Recaptcha: React.FC<RecaptchaProps> = ({
  className,
  label = "I'm not a robot",
  initialStatus = 'expired',
  loadingMs = 700,
  expireAfterMs = 90_000,
  onVerify,
  onExpire,
  errorText = 'Please verify that you are not a robot',
  expiredText = 'Verification expired. Check the checkbox again.',
}) => {
  const [status, setStatus] = useState<Status>(initialStatus)
  const isChecked = status === 'checked'
  const isLoading = status === 'loading'
  const isError = status === 'error'
  const isExpired = status === 'expired'

  const expireTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearExpire = () => {
    if (expireTimer.current) {
      clearTimeout(expireTimer.current)
      expireTimer.current = null
    }
  }

  useEffect(() => {
    clearExpire()
    if (status === 'checked' && expireAfterMs > 0) {
      expireTimer.current = setTimeout(() => {
        setStatus('expired')
        onExpire?.()
      }, expireAfterMs)
    }
    return clearExpire
  }, [status])

  const verify = () => {
    if (isLoading) return
    if (isChecked) {
      setStatus('default')
      onVerify?.(false)
      return
    }
    setStatus('loading')
    setTimeout(() => {
      setStatus('checked')
      onVerify?.(true)
    }, loadingMs)
  }

  const handleClick = () => {
    if (isError) setStatus('default')
    else verify()
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <div className={cn('relative w-[420px] text-white', className)}>
      <button
        type='button'
        role='checkbox'
        aria-checked={isChecked}
        aria-busy={isLoading}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          'flex w-full items-center justify-between rounded-sm border bg-zinc-900 px-4 py-3 transition outline-none focus:border-blue-500',
          {
            'border-zinc-600 hover:border-zinc-400': !isError && !isExpired,
            'border-red-600': isError,
            'border-zinc-700': isExpired,
            'cursor-wait': isLoading,
            'cursor-pointer': !isLoading,
          },
        )}
      >
        {status === 'error' && <p className='absolute top-[5px] mt-1 text-start text-xs text-red-500'>{errorText}</p>}
        {status === 'expired' && (
          <p
            className={cn(
              'absolute top-[5px] mb-1 text-start text-[12px] leading-[1] whitespace-pre-line text-red-500',
              status === 'expired' ? 'visible text-red-500' : 'invisible',
            )}
          >
            {status === 'expired' ? expiredText.replace(' again', '\nagain') : '\u00A0'}
          </p>
        )}

        <div className='flex w-full justify-between'>
          <div className='flex items-center gap-4'>
            <div
              className={cn(
                'relative ml-1 flex h-5 w-5 items-center justify-center rounded-[2px] border border-transparent bg-white hover:border-gray-400',
                isChecked || isLoading ? 'bg-zinc-900' : '',
              )}
              aria-hidden
            >
              {isChecked && (
                <Icon
                  iconId={'reCaptcha-checkmark'}
                  className={cn(
                    'h-[22px] w-[28px] overflow-visible [stroke-linecap:butt] [stroke-linejoin:miter] [stroke-miterlimit:10]',
                    'scale-150 fill-none stroke-[#2E7D32] [stroke-width:2] transition',
                  )}
                />
              )}
              {isLoading && <Loader size={28} durationMs={1400} className='text-blue-500' />}
            </div>

            <Typography
              className={cn(
                'font-["Roboto",sans-serif] text-[16px] leading-[14px] font-medium',
                isLoading || isExpired ? 'text-zinc-200' : 'text-zinc-100',
              )}
            >
              {label}
            </Typography>
          </div>

          <div className='rounded-lg p-4'>
            <div className='flex flex-col items-center text-center'>
              <Icon iconId='recaptcha-without-text' size={48} className='mb-[10px] shrink-0' />
              <span className='text-[12px] leading-[12px] font-medium text-zinc-100'>reCAPTCHA</span>
              <div className='mt-[4px] inline-flex items-center gap-[2px] text-[10px] leading-[10px] font-medium whitespace-nowrap text-zinc-300'>
                <a
                  href=''
                  target='_blank'
                  rel=''
                  className='text-[8px] underline-offset-2 hover:text-zinc-100 hover:underline'
                >
                  Privacy
                </a>
                <span className='relative -top-[1px]'>-</span>
                <span className='text-[8px] leading-none text-zinc-300'>Terms</span>
              </div>
            </div>
          </div>
        </div>
      </button>

      {status === 'expired' && (
        <p className='mt-2 text-[12px] leading-[1] whitespace-pre-line text-red-500'>{errorText}</p>
      )}
    </div>
  )
}
