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
  label = 'I’m not a robot',
  initialStatus = 'default',
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
    <div
      className={cn(
        'relative flex w-[300px] items-center justify-between rounded-sm border bg-zinc-900 px-5 py-3 text-white transition outline-none focus:border-blue-500',
        {
          'border-zinc-600 hover:border-zinc-400': !isError && !isExpired,
          'border-red-600': isError,
          'border-zinc-700': isExpired,
          'cursor-wait': isLoading,
        },
        className,
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
        <button
          type='button'
          role='checkbox'
          aria-checked={isChecked}
          aria-busy={isLoading}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
          <div className={'flex cursor-pointer items-center gap-4'}>
            <div
              className={cn(
                'relative flex h-5 w-5 items-center justify-center rounded-[2px] border border-transparent bg-white hover:border-gray-400',
                isChecked || isLoading ? 'bg-zinc-900' : '',
              )}
              aria-hidden
            >
              {isChecked && (
                <Icon
                  iconId={'reCaptcha-checkmark'}
                  className={cn(
                    'h-[18px] w-[24px] shrink-0 translate-y-[1px]',
                    'overflow-visible transition',
                    'fill-[#2E7D32] stroke-none',
                  )}
                />
              )}
              {isLoading && <Loader size={28} durationMs={1400} className='text-blue-500' />}
            </div>

            <Typography
              className={cn(
                'font-["Roboto",sans-serif] text-[12px] leading-[14px] font-medium',
                isLoading || isExpired ? 'text-zinc-200' : 'text-zinc-100',
              )}
            >
              {label}
            </Typography>
          </div>
        </button>

        <div className='rounded-lg'>
          <div className='flex flex-col items-center text-center'>
            <Icon iconId='recaptcha-without-text' size={30} className='mb-[6px] shrink-0' />
            <span className='mb-[2px] text-[8px] leading-[12px] font-medium text-zinc-100'>reCAPTCHA</span>
            <div className='inline-flex items-center gap-0.5 text-[6px] leading-[10px] font-medium whitespace-nowrap text-zinc-300'>
              <a
                href='https://policies.google.com/privacy?hl=en'
                target='_blank'
                rel=''
                className='underline-offset-2 hover:text-zinc-100 hover:underline'
              >
                Privacy
              </a>
              -
              <a
                href='https://policies.google.com/terms?hl=en'
                target='_blank'
                rel=''
                className='underline-offset-2 hover:text-zinc-100 hover:underline'
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>

      {status === 'expired' && (
        <p className='mt-2 text-[12px] leading-[1] whitespace-pre-line text-red-500'>{errorText}</p>
      )}
    </div>
  )
}
