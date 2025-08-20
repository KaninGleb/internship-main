'use client'

import { ChangeEvent, FC, useId } from 'react'
import { cn } from '@/common/utils'

export type TextAreaProps = {
  placeholder?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  label?: string
  error?: string
  disabled?: boolean
  className?: string
  rows?: number
  id?: string
}

export const TextArea: FC<TextAreaProps> = ({
  placeholder = 'Text-area',
  value,
  onChange,
  label = 'Text-area',
  error,
  disabled = false,
  className = '',
  rows = 3,
  id,
}) => {
  const textareaId = id ?? useId()

  return (
    <div className={`flex min-w-[279px] flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={textareaId} className='text-xs leading-4 text-[#8d9094]'>
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        disabled={disabled}
        className={cn(
          'h-[84px] w-[284px] resize-none rounded-sm border bg-neutral-900 px-3 py-2 text-white transition-colors duration-200 outline-none',
          'hover:border-gray-400 focus:border-blue-500',
          {
            'border-gray-600': !error && !disabled,
            'border-[1px] border-red-500': error,
            'cursor-not-allowed border-gray-700 text-gray-500 opacity-50': disabled,
          },
        )}
      />
      {error && <span className='mt-1 text-[14px] text-red-500'>{error}</span>}
    </div>
  )
}
