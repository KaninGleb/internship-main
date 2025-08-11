'use client'

import React from 'react'
import styles from './TextArea.module.css'

export type TextAreaProps = {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  label?: string
  error?: string
  disabled?: boolean
  className?: string
  rows?: number

}

export const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  value,
  onChange,
  label,
  error,
  disabled = true,
  className = '',
  rows = 3,
}) => (

  <div className={`${styles.textAreaContainer} ${className}`}>
    {label && <label className={styles.label}>{label}</label>}
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      className={`${styles.textArea} ${error ? styles.textAreaError : ''} ${disabled ? styles.textAreaDisabled : ''}`}
      disabled={disabled}
    />
    {error && <span className={styles.errorMessage}>{error}</span>}
  </div>
)
