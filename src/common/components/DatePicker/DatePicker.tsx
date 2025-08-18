'use client'

import { ComponentProps } from 'react'
import ReactDatePicker from 'react-datepicker'
import styles from './DatePicker.module.css'
import { cn } from '@/common/utils'
import { CustomHeader } from './CustomHeader/CustomHeader'
import { CustomInput } from './CustomInput/CustomInput'
import 'react-datepicker/dist/react-datepicker.css'

export type DatePickerProps = {
  disabled?: boolean
  endDate?: Date | null
  errorMessage?: string
  placeholder?: string
  label?: string
  required?: boolean
  setEndDate?: (date: Date | null) => void
  setStartDate: (date: Date | null) => void
  startDate: Date | null
} & ComponentProps<'div'>

export const DatePicker = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  placeholder,
  label,
  required,
  errorMessage,
  disabled,
  className,
}: DatePickerProps) => {
  const isRange = endDate !== undefined
  const showError = !!errorMessage && errorMessage.length > 0

  const onChangeHandler = (dates: [Date | null, Date | null] | Date) => {
    if (Array.isArray(dates)) {
      if (dates.length !== 2) return

      const [start, end] = dates
      setStartDate(start)
      setEndDate?.(end)
    } else {
      setStartDate(dates)
    }
  }

  return (
    <div className={cn(styles.wrapper, className)}>
      {label && <span className={styles.label}>{label}</span>}
      <ReactDatePicker
        calendarStartDay={1}
        startDate={startDate}
        endDate={endDate}
        monthClassName={(date) => ''}
        onChange={onChangeHandler}
        selected={startDate}
        selectsRange={(isRange as true) || undefined}
        calendarClassName={styles.calendar}
        dayClassName={() => styles.day}
        customInput={<CustomInput placeholder={placeholder} showError={showError} />}
        renderCustomHeader={CustomHeader}
        dateFormat='dd/MM/yyyy'
        showPopperArrow={false}
        placeholderText={placeholder}
        required={required}
        disabled={disabled}
      />
      {showError && <p className={styles.errorText}>{errorMessage}</p>}
    </div>
  )
}
