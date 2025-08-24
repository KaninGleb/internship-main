import React, { useRef } from 'react'
import { Checkbox } from '@headlessui/react'
import { Icon } from '@/common/components'
import { cn } from '@/common/utils'

const baseStyles = `relative block w-4 h-4 rounded-[2px] transition-all duration-200 ease-in-out border-2 border-white
bg-transparent cursor-pointer`

const svgStyles =
  'stroke-black opacity-0 absolute top-0 left-0 w-full h-full transition-opacity duration-200 ease-in-out'

const hoverStyles = cn(
  'hover:before:content-[""] hover:before:absolute hover:before:top-1/2 hover:before:left-1/2',
  'hover:before:w-8 hover:before:h-8 hover:before:rounded-full hover:before:-translate-x-1/2',
  'hover:before:-translate-y-1/2 hover:before:bg-[rgb(from_var(--color-dark-300)_r_g_b_/_70%)]',
)

const activeStyles = cn(
  'active:before:content-[""] active:before:absolute active:before:top-1/2',
  'active:before:left-1/2 active:before:w-8 active:before:h-8',
  'active:before:rounded-full',
  'active:before:-translate-x-1/2 active:before:-translate-y-1/2',
  'active:before:bg-[rgb(from_var(--color-dark-100)_r_g_b_/_70%)]',
)

const focusStyles = cn(
  'focus-within:before:content-[""] focus-within:before:absolute',
  'focus-within:before:top-1/2 focus-within:before:left-1/2 focus-within:before:w-8',
  'focus-within:before:h-8 focus-within:before:rounded-full focus-within:before:-translate-x-1/2',
  'focus-within:before:-translate-y-1/2 focus-within:before:bg-dark-500',
)

const pseudoStyles = cn(hoverStyles, activeStyles, focusStyles)

const getVariantClasses = (checked: boolean, disabled: boolean) =>
  cn(
    !disabled && checked && 'bg-white [&_svg]:opacity-100',
    disabled && 'opacity-100 pointer-events-none border-[var(--color-dark-100)] [&_svg]:stroke-white',
    disabled && checked && 'bg-[var(--color-dark-100)] [&_svg]:opacity-100 ',
    disabled && !checked && 'bg-transparent border-[var(--color-light-900)] ',
  )

type CheckboxProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

export const CheckBox = ({ checked, onChange, disabled = false, className }: CheckboxProps) => {
  const checkboxRef = useRef<HTMLButtonElement>(null)

  const handleMouseLeave = () => {
    if (checkboxRef.current) {
      checkboxRef.current.blur()
    }
  }

  return (
    <span
      className={cn(
        'relative mr-[0.6rem] inline-block h-4 w-4',
        disabled && 'cursor-not-allowed',
        !disabled && pseudoStyles,
      )}
      onMouseLeave={!disabled ? handleMouseLeave : undefined}
    >
      <Checkbox
        ref={checkboxRef}
        checked={checked}
        onChange={onChange}
        className={cn(baseStyles, 'active:bg-white', getVariantClasses(checked, disabled), className)}
        disabled={disabled}
        data-checked={checked || undefined}
      >
        <Icon iconId='checkmark' size={14} color={disabled && checked ? 'white' : 'black'} className={svgStyles} />
      </Checkbox>
    </span>
  )
}
