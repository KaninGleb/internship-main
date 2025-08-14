import React, { ChangeEvent } from 'react'


type OptionType = {
  id: string | number
  value: string | number
}

type SelectPropsType = {
  options?: OptionType[]
  className?: string
  onChangeOption?: (option: number) => void
  value: number
}

export const Select: React.FC<SelectPropsType> = ({
  options,
  className,
  onChangeOption,
  value,
}) => {
  const mappedOptions: React.ReactNode[] = options
    ? options.map((o) => (
        <option key={o.id} value={o.value}>
          {o.value}
        </option>
      ))
    : []

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChangeOption) {
      onChangeOption(+e.currentTarget.value)
    }

  }

  return (
    <select
            onChange={onChangeCallback}
            className={className}
            value={value}
        >
        {mappedOptions}

    </select>
  )
}


