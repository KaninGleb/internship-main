import React from 'react'
import { Icon } from '@/common/components'
import { cn } from '@/common/utils'
import type { IconIdType } from '@/common/types'

type MenuKey = 'home' | 'add' | 'chat' | 'search' | 'user'

const pairs: Record<MenuKey, { base: IconIdType; hover?: IconIdType; baseFill?: boolean }> = {
  home: { base: 'home-outline', hover: 'home', baseFill: true },
  add: { base: 'plus-square-outline', hover: 'plus-square', baseFill: true },
  chat: { base: 'message-circle-outline', hover: 'message-circle', baseFill: true },
  search: { base: 'search', hover: 'search', baseFill: true },
  user: { base: 'person-outline', hover: 'person', baseFill: true },
}

export type MenuItem = { key: MenuKey; ariaLabel?: string }

export const MENU_ITEMS: MenuItem[] = [
  { key: 'home', ariaLabel: 'Главная' },
  { key: 'add', ariaLabel: 'Добавить' },
  { key: 'chat', ariaLabel: 'Сообщения' },
  { key: 'search', ariaLabel: 'Поиск' },
  { key: 'user', ariaLabel: 'Профиль' },
]

type MenuProps = {
  items?: MenuItem[]
  name?: string
  defaultValue?: MenuKey
  onChange?: (key: MenuKey) => void
  className?: string
}

export const Menu: React.FC<MenuProps> = ({ items = MENU_ITEMS, name = 'menu', defaultValue, onChange, className }) => {
  const size = 'h-[18px] w-[18px]'
  const thinOnUse = '[&_use]:stroke-[0.2]'

  return (
    <fieldset className={cn('w-full border-y border-white/10 bg-[#111] text-white/90', className)}>
      <legend className='sr-only'>Навигация</legend>
      <ul className='mx-auto flex max-w-[420px] items-center justify-between gap-x-[39px] px-4 py-3'>
        {items.map((it, i) => {
          const inputId = `${name}-${it.key}`
          const p = pairs[it.key]

          return (
            <li key={it.key} className='relative'>
              <input
                id={inputId}
                type='radio'
                name={name}
                value={it.key}
                defaultChecked={defaultValue ? defaultValue === it.key : i === 0}
                onChange={(e) => onChange?.(e.currentTarget.value as MenuKey)}
                aria-label={it.ariaLabel ?? it.key}
                className='peer sr-only'
              />

              <label
                htmlFor={inputId}
                className={cn(
                  'group grid h-10 w-10 cursor-pointer place-items-center rounded-md',
                  'peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500/50 peer-focus-visible:outline-none',
                )}
              >
                {/* 1) ДЕФОЛТ — белый  */}
                <Icon
                  iconId={p.base}
                  size={18}
                  color='transparent'
                  className={cn(
                    size,
                    thinOnUse,
                    p.baseFill
                      ? '[&_use]:fill-white [&_use]:stroke-white'
                      : '[&_use]:fill-transparent [&_use]:stroke-white',
                    'group-hover:hidden peer-checked:hidden',
                  )}
                />

                {/* 2) HOVER / ACTIVE */}
                {p.hover ? (
                  <Icon
                    iconId={p.hover}
                    size={18}
                    color='transparent'
                    className={cn(
                      size,
                      thinOnUse,
                      'hidden group-hover:inline peer-checked:inline',
                      '[&_use]:fill-[#3B82F6] [&_use]:stroke-[#3B82F6]',
                    )}
                  />
                ) : (
                  <Icon
                    iconId={p.base}
                    size={18}
                    color='transparent'
                    className={cn(
                      size,
                      thinOnUse,
                      'hidden group-hover:inline peer-checked:inline',
                      '[&_use]:fill-transparent [&_use]:stroke-[#3B82F6]',
                    )}
                  />
                )}
              </label>
            </li>
          )
        })}
      </ul>
    </fieldset>
  )
}
