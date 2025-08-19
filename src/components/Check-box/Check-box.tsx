import React from 'react'
import { Checkbox } from '@headlessui/react'
import { Icon } from '@/common/components'
import s from './Check-box.module.css'

type CheckboxProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

export const CheckBox = ({ checked, onChange, disabled = false, className }: CheckboxProps) => {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      className={`${s.checkbox} ${className}`}
      disabled={disabled}
      data-checked={checked || undefined}
    >
      <Icon iconId='checkmark' size={14} className={'stroke-black opacity-0 group-data-checked:opacity-100'} />
    </Checkbox>
  )
}
