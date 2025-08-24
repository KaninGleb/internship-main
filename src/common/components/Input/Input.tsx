'use client'
import React, { ChangeEvent, forwardRef, useState } from 'react'
import { cn } from '@/common/utils'
import type { InputUnitType, InputWidthUnitType } from '@/common/types'
import { Icon } from '@/common/components'

type InputPropsType = {
  type?: InputUnitType
  placeholder?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  label?: string
  error?: string
  disabled?: boolean
  className?: string
  widthSize?: InputWidthUnitType
}

export const Input = forwardRef<HTMLInputElement, InputPropsType>(
  ({ type, placeholder, value, onChange, label, error, disabled, className, widthSize, ...rest }, ref) => {
    const [isVisible, setIsVisible] = useState(false)
    const inputType = (type === 'password' && isVisible ? 'text' : type) || 'text'
    const toggleVisibility = () => {
      if (!disabled) {
        setIsVisible(!isVisible)
      }
    }
    let widthClass: string
    switch (widthSize) {
      case 'sm':
        widthClass = 'w-[100px]'
        break
      case 'full':
        widthClass = 'w-full'
        break
      default:
        widthClass = 'w-[284px]'
    }

    const canInteract = !disabled && !error
    const hoverStyles = canInteract && 'hover:border-light-900 hover:text-light-900'
    const activeStyles = canInteract && 'active:border-light-100 active:text-light-100 active:border-[1px]'
    const iconActiveStyles = canInteract && 'peer-active:text-light-100'

    return (
      <div className={cn('mb-[15px] flex w-full flex-col items-start')}>
        {label && (
          <label
            className={cn(
              'text-light-900 block w-full text-left text-sm font-[var(--font-weight-regular)]',
              disabled && 'text-dark-100',
            )}
          >
            {label}
          </label>
        )}
        <div className={cn('relative', widthClass)}>
          <input
            ref={ref}
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={cn(
              'border-dark-100 text-light-900 mt-[2px] box-border h-9 w-full',
              'rotate-0 rounded-[2px] border bg-transparent py-[10px] pr-[40px] pl-[10px] text-left',
              'text-base font-light opacity-100 transition-colors duration-300',
              hoverStyles,
              activeStyles,
              'focus:ring-accent-500 focus:text-light-900 focus:shadow-none focus:ring-2 focus:outline-none',
              error && 'text-light-100 border-danger-500',
              disabled && 'border-dark-100 text-dark-100 cursor-not-allowed',
              type === 'search' && 'peer pl-[40px] [&::-webkit-search-cancel-button]:hidden',
              className,
            )}
            disabled={disabled}
            {...rest}
          />
          {type === 'search' && (
            <span
              className={cn(
                'text-light-900 absolute top-1/2 left-3 flex -translate-y-1/2 items-center justify-center',
                disabled && 'text-dark-100',
                canInteract && 'peer-active:text-light-100',
                error && 'text-light-100',
              )}
            >
              <Icon iconId={'search'} size={20} color='currentColor' />
            </span>
          )}
          {type === 'password' && (
            <button
              type='button'
              className={cn(
                'absolute top-1/2 right-[10px] flex -translate-y-1/2 cursor-pointer',
                'items-center justify-center border-none bg-none p-0 text-white',
                disabled && 'cursor-not-allowed opacity-50',
                iconActiveStyles,
              )}
              onClick={toggleVisibility}
              disabled={disabled}
              aria-label={isVisible ? 'Hide password' : 'Show password'}
            >
              {isVisible ? (
                <Icon iconId={'eye-outline'} color={'white'} size={20} />
              ) : (
                <Icon iconId={'eye-off-outline'} color={'white'} size={20} />
              )}
            </button>
          )}
        </div>
        {error && <span className={cn('text-danger-300 mt-[5px] block text-xs')}>{error}</span>}
      </div>
    )
  },
)

Input.displayName = 'Input'
