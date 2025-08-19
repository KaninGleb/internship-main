'use client'
import React from 'react'
import { FaEye, FaEyeSlash, FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import { cn } from '@/common/utils'

type InputPropsType = Partial<{
  type: 'password' | 'email' | 'search'
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  error: string
  disabled: boolean
  className: string
}>

export const Input: React.FC<InputPropsType> = ({
  type,
  placeholder,
  value,
  onChange,
  label,
  error,
  disabled,
  className = '',
}: InputPropsType) => {
  const [isVisible, setIsVisible] = useState(false)
  const inputType = (type === 'password' && isVisible ? 'text' : type) || 'text'
  const toggleVisibility = () => {
    if (!disabled) {
      setIsVisible(!isVisible)
    }
  }

  return (
    <div className={cn('mb-[15px] flex min-w-[279px] flex-col items-start', className)}>
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
      <div className={cn('relative min-w-[279px]', className)}>
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={cn(
            'border-dark-100 text-light-900 mt-[2px] box-border h-[36px] min-w-[279px] rotate-0 rounded-[2px] border bg-transparent py-[10px] pr-[40px] pl-[10px] text-left text-base font-light opacity-100 transition-colors duration-300',
            !disabled && !error && 'hover:border-light-900 hover:text-light-900',
            !disabled && !error && 'active:border-light-100 active:text-light-100 active:border-[1px]',
            'focus:border-accent-500 focus:text-light-900 focus:border-[2px] focus:shadow-none focus:outline-none',
            error && 'text-light-100 border-danger-500',
            disabled && 'border-dark-100 text-dark-100 cursor-not-allowed',
            type === 'search' && 'peer pl-[40px] [&::-webkit-search-cancel-button]:hidden',
            className,
          )}
          disabled={disabled}
        />
        {type === 'search' && (
          <span
            className={cn(
              'text-light-900 absolute top-1/2 left-[10px] flex -translate-y-1/2 items-center justify-center',
              disabled && 'text-dark-100',
              !disabled && !error && 'peer-active:text-light-100',
              error && 'text-light-100',
            )}
          >
            <FaSearch size={20} />
          </span>
        )}
        {type === 'password' && (
          <button
            type='button'
            className={cn(
              'absolute top-1/2 right-[10px] flex -translate-y-1/2 cursor-pointer items-center justify-center border-none bg-none p-0 text-white',
              disabled && 'cursor-not-allowed opacity-50',
              !disabled && !error && 'active:border-light-100 active:text-light-100 active:border',
            )}
            onClick={toggleVisibility}
            disabled={disabled}
            aria-label={isVisible ? 'Hide password' : 'Show password'}
          >
            {isVisible ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
          </button>
        )}
      </div>
      {error && <span className={cn('text-danger-300 mt-[5px] block text-xs')}>{error}</span>}
    </div>
  )
}
