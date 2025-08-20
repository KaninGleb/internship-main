import { ButtonHTMLAttributes } from 'react'
import { Icon } from '@/common/components'
import { IconIdType } from '@/common/types'

export const dayPickerCommonProps = {
  defaultMonth: new Date(),
  showOutsideDays: true,
  weekStartsOn: 1 as const,
  modifiers: {
    weekend: { dayOfWeek: [0, 6] },
  },
  modifiersClassNames: {
    today: 'text-[var(--color-accent-500)]',
    selected: 'rounded-full bg-[var(--color-accent-900)]',
    weekend: 'text-[var(--color-danger-300)]',
    range_start: 'bg-[var(--color-accent-900)] rounded-l-full rounded-r-none',
    range_middle: 'bg-[var(--color-accent-900)] rounded-none',
    range_end: 'bg-[var(--color-accent-900)] rounded-r-full rounded-l-none',
    outside: 'text-[var(--color-light-900)]',
  },
  classNames: {
    root: `w-full`,
    month_caption: 'text-base font-bold flex items-center h-[36px] mx-2',
    button_next: 'w-9 h-9 rounded-full bg-[var(--color-dark-100)]',
    button_previous: 'w-9 h-9 rounded-full bg-[var(--color-dark-100)]',
    weekday: 'w-9 h-9 text-[var(--color-light-900)] text-base font-normal py-3',
    day_button: 'text-center cursor-pointer',
    day: 'h-9 w-9 cursor-pointer hover:bg-[var(--color-accent-900)] rounded-full text-center',
  },
  components: {
    PreviousMonthButton: ({ ...restProps }) => <MonthButton iconId='arrow-ios-back' {...restProps} />,
    NextMonthButton: ({ ...restProps }) => <MonthButton iconId='arrow-ios-forward' {...restProps} />,
  },
}

type MonthButtonProps = {
  iconId: IconIdType
} & ButtonHTMLAttributes<HTMLButtonElement>

const MonthButton = ({ iconId, ...restProps }: MonthButtonProps) => {
  return (
    <button
      {...restProps}
      className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[var(--color-dark-100)] duration-300 hover:opacity-70'
    >
      <Icon iconId={iconId} size={20} color='white' />
    </button>
  )
}
