'use client'

import React from 'react'
import { FaEye, FaEyeSlash, FaSearch } from 'react-icons/fa'
import styles from './Input.module.css'
import { useState } from 'react'

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

  const inputType = type === 'password' && isVisible ? 'text' : type
  const inputErrorClass = error ? styles.inputError : ''
  const inputDisabledClass = disabled ? styles.inputDisabled : ''
  const inputSearchClass = type === 'search' ? styles.inputSearch : ''

  const toggleVisibility = () => {
    if (!disabled) {
      setIsVisible(!isVisible)
    }
  }

  return (
    <div className={`${styles.inputContainer} ${className}`}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={`${styles.inputWrapper} ${className} `}>
        {type === 'search' && (
          <span className={styles.searchIcon}>
            <FaSearch size={20} color='var(--color-light-900)' />
          </span>
        )}
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={` ${styles.input} ${inputErrorClass} ${inputDisabledClass} ${inputSearchClass} ${className}`}
          disabled={disabled}
        />
        {type === 'password' && (
          <button
            type='button'
            className={styles.toggleVisibility}
            onClick={toggleVisibility}
            disabled={disabled}
            aria-label={isVisible ? 'Скрыть пароль' : 'Показать пароль'}
          >
            {isVisible ? <FaEye size={20} color='white' /> : <FaEyeSlash size={20} color='white' />}
          </button>
        )}
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  )
}
