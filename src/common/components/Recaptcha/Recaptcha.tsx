'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/common/utils'
import { Icon } from '../Icon/Icon'
import { Loader } from '@/common/components/Loader/Loader'

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
          <div className='flex items-center gap-5'>
            <div
              className={cn(
                'relative ml-1 flex h-5 w-5 items-center justify-center rounded-[2px] border border-transparent bg-white hover:border-gray-400',
                isChecked || isLoading ? 'bg-zinc-900' : '',
              )}
              aria-hidden
            >
              {isChecked && (
                <Icon
                  iconId={'checkmark'}
                  className={cn(
                    'h-[22px] w-[28px] overflow-visible [stroke-linecap:butt] [stroke-linejoin:miter] [stroke-miterlimit:10]',
                    'scale-150 fill-none stroke-[#2E7D32] [stroke-width:2] transition',
                  )}
                />
              )}
              {/*{isChecked && (*/}
              {/*  <svg*/}
              {/*    viewBox="0 0 40 28"*/}
              {/*    aria-hidden="true"*/}
              {/*    className={cn(*/}
              {/*      'h-[22px] w-[30px] overflow-visible',*/}
              {/*      'fill-none stroke-[#2E7D32] [stroke-width:5] [stroke-linecap:square] [stroke-linejoin:miter]'*/}
              {/*    )}*/}
              {/*  >*/}
              {/*    <path d="M6 15 L16 25 L37 5" />*/}
              {/*  </svg>*/}
              {/*)}*/}

              {isLoading && <Loader size={28} durationMs={1400} className='text-blue-500' />}
            </div>

            <span
              className={cn(
                'text-base leading-tight font-semibold text-white',
                isLoading || isExpired ? 'text-zinc-200' : 'text-zinc-100',
              )}
            >
              {label}
            </span>
          </div>
          <div className='flex flex-col gap-[4px] text-[10px] leading-none text-zinc-300'>
            <Icon iconId='recaptcha-without-text' size={60} className='ml-[6px]' />
            <span className='-mt-[15px] mr-[15px] text-[14px] leading-[1] font-medium text-zinc-100 md:-mt-[30px]'>
              reCAPTCHA
            </span>
            <div className='mr-[15px] text-[10px] leading-[1] font-medium text-zinc-300'>
              <a href='' target='_blank' rel='' className='underline-offset-2 hover:text-zinc-100 hover:underline'>
                Privacy
              </a>
              <span className='px-1'>-</span>
              <span className='text-[10px] leading-none text-zinc-300'>Terms</span>
            </div>
          </div>
        </div>
      </button>

      {status === 'expired' && (
        <p className='mt-2 whitespace-pre-line text-[12px] leading-[1] text-red-500'>
          {errorText}
        </p>
      )}
    </div>
  )
}
