'use client'

import React, { FC, ReactNode } from 'react'
import { Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { Icon } from '@/common/components'

export type OptionType<T = string> = {
  value: T
  label?: string
  icon?: string | ReactNode
}

export type SelectBoxProps<T extends string | number = string> = {
  options: OptionType<T>[]
  value: T | null
  onChange: (value: T) => void
  label?: string
  placeholder?: string
  className?: string
  disabled?: boolean
}

export const SelectBox: FC<SelectBoxProps> = ({
  options,
  value,
  onChange,
  label,
  placeholder,
  className,
  disabled,
}) => {
  const selectedOption = options.find((opt) => opt.value === value)

  const renderIcon = (icon?: string | ReactNode, alt?: string) => {
    if (!icon) return null

    if (typeof icon === 'string') {
      return <Image src={icon} alt={alt || ''} className='h-5 w-5 object-cover' />
    }

    return icon
  }

  return (
    <div className={twMerge('w-full max-w-sm', className)}>
      <Field>
        {label && <Label className='text-sm font-normal text-[var(--color-light-900)]'>{label}</Label>}

        <Listbox value={value} onChange={onChange} disabled={disabled}>
          {({ open }) => (
            <div className='relative mt-1'>
              <ListboxButton
                className={twMerge(
                  'relative block w-full cursor-pointer rounded-xs border px-3 py-1.5 text-left text-sm select-none data-focus:outline-2 data-focus:outline-offset-2 data-focus:outline-[var(--color-info-500)]',
                  disabled
                    ? 'cursor-not-allowed border-[var(--color-dark-300)] bg-[var(--color-dark-700)] text-[var(--color-dark-300)]'
                    : 'border-[var(--color-dark-100)] bg-[var(--color-dark-700)] hover:bg-[var(--color-dark-500)]',
                )}
              >
                <span className='flex gap-3'>
                  {renderIcon(selectedOption?.icon, selectedOption?.label)}
                  {selectedOption ? selectedOption.label : placeholder || 'Select...'}
                </span>
                <Icon
                  iconId='arrow-ios-Down-outline'
                  size={20}
                  color='white'
                  className={twMerge(
                    'absolute top-1/2 right-3 -translate-y-1/2 transition-transform duration-200',
                    open && 'rotate-180',
                  )}
                />
              </ListboxButton>

              <ListboxOptions
                transition
                className='absolute w-full rounded-xs border border-[var(--color-dark-100)] bg-[var(--color-dark-700)] shadow-lg transition duration-100 ease-in select-none focus:outline-none data-leave:data-closed:opacity-0'
              >
                {options.map((opt) => (
                  <ListboxOption
                    key={opt.value}
                    value={opt.value}
                    className='group flex w-full cursor-pointer items-center gap-2 px-3 py-1.5 transition duration-200 hover:bg-[var(--color-dark-500)] hover:text-[var(--color-info-500)]'
                  >
                    <span className='flex gap-3 text-sm text-[var(--color-light-900)] transition duration-200 group-hover:text-[var(--color-info-500)]'>
                      {renderIcon(opt.icon, opt.label)}
                      {opt.label}
                    </span>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          )}
        </Listbox>
      </Field>
    </div>
  )
}
