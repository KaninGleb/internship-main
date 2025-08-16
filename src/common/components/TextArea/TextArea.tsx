'use client'

import React from 'react'
import { cn } from '@/common/utils'

export type TextAreaProps = {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  label?: string
  error?: string
  disabled?: boolean
  className?: string
  rows?: number
  id?: string
}

export const TextArea: React.FC<TextAreaProps> = ({
  placeholder = 'Text-area',
  value,
  onChange,
  label = 'Text-area',
  error,
  disabled = false,
  className = '',
  rows = 3,
  id = 'textArea',
}) => {
  const textareaId = id ?? React.useId()

  return (
    <div className={`flex flex-col gap-1 min-w-[279px] ${className}`}>
      {label && (
        <label htmlFor={textareaId} className="text-xs leading-4 text-[#8d9094]">
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
          'w-[284px] h-[84px] resize-none rounded-sm border px-3 py-2 text-white bg-neutral-900 outline-none transition-colors duration-200',
          'hover:border-gray-400 focus:border-blue-500',
          {
            'border-gray-600': !error && !disabled,
            'border-red-500': error,
            'border-gray-700 text-gray-500 cursor-not-allowed opacity-50': disabled,
          }
        )}
      />
      {error && (
        <span className="mt-1 text-xs text-red-500">{error}</span>
      )}
    </div>
  )
}




