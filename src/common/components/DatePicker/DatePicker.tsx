'use client'

import { useState } from 'react'

import { Icon } from '@/common/components'
import { cn } from '@/common/utils'

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { DateRange, DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'

import { format } from 'date-fns'
import { enUS, ru, Locale } from 'date-fns/locale'
import { dayPickerCommonProps } from './DayPickerCommonProps'

export type DatePickerProps = {
  label?: string
  errorMessage?: string
  placeholder?: string
  className?: string
  disabled?: boolean
  mode?: 'single' | 'range'
  locale?: 'ru' | 'en'
}

export const DatePicker = ({
  className,
  label,
  disabled,
  placeholder = 'dd/mm/yyyy',
  mode = 'single',
  errorMessage,
  locale = 'ru',
}: DatePickerProps) => {
  const [selected, setSelected] = useState<Date | undefined>()
  const [range, setRange] = useState<DateRange | undefined>()

  const localeObj: Locale = locale === 'ru' ? ru : enUS
  const showError = !!errorMessage && errorMessage.length > 0
  const formatDate = (date: Date) => format(date, 'dd/MM/yyyy', { locale: localeObj })

  const renderButtonText = () => {
    if (mode === 'single' && selected) return formatDate(selected)

    if (mode === 'range' && range?.from && range?.to) return `${formatDate(range.from)} – ${formatDate(range.to)}`

    return placeholder
  }

  return (
    <div className={cn('w-[300px]', className)}>
      {label && <label className='mb-1 block text-sm text-[var(--color-light-900)]'>{label}</label>}

      <Popover className='relative'>
        <PopoverButton
          disabled={disabled}
          className={cn(
            'relative flex h-[36px] w-full items-center rounded-xs border border-[var(--color-dark-300)] bg-[var(--color-dark-500)] p-3 text-left text-[--color-light-100]',
            disabled ? 'cursor-not-allowed touch-none text-[var(--color-light-900)]' : 'cursor-pointer',
            showError
              ? 'border-[var(--color-danger-500)] text-[var(--color-danger-500)] focus:ring-0 focus:outline-none'
              : 'border-[var(--color-dark-300)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent-700)] focus-visible:outline-none',
          )}
        >
          {renderButtonText()}
          <Icon
            iconId='calendar'
            color='white'
            size={20}
            className={cn('pointer-events-none absolute top-1/2 right-3 -translate-y-1/2')}
          />
        </PopoverButton>

        <PopoverPanel className='absolute z-10 w-full rounded-xs border border-[var(--color-dark-300)] bg-[var(--color-dark-500)] p-4'>
          {mode === 'single' && (
            <DayPicker
              locale={localeObj}
              mode='single'
              selected={selected}
              onSelect={setSelected}
              {...dayPickerCommonProps}
            />
          )}
          {mode === 'range' && (
            <DayPicker locale={localeObj} mode='range' selected={range} onSelect={setRange} {...dayPickerCommonProps} />
          )}
        </PopoverPanel>
      </Popover>
      {showError && <span className='my-1 text-[var(--color-danger-500)]'>{errorMessage}</span>}
    </div>
  )
}
