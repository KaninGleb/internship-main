'use client'

import { useState, Fragment } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Icon, Button } from '@/common/components'
import { flagUK, flagRussia } from 'src/assets/icons'

type HeaderPropsType = {
  isAuth: boolean
  isAdmin?: boolean
  notifCounter?: number
}

type LangType = {
  title: string
  path: StaticImageData
}

const langs: LangType[] = [
  { title: 'English', path: flagUK },
  { title: 'Russian', path: flagRussia },
]

export const Header = ({ isAdmin = false, isAuth, notifCounter = 100 }: HeaderPropsType) => {
  const [lang, setLang] = useState<string>('English')

  const changeLangHandler = (value: string) => {
    setLang(value)
  }

  const rightContainerGap = isAuth ? 'gap-[46px]' : 'gap-[36px]'

  return (
    <header className='sticky top-0 z-50 border-b border-[var(--color-dark-300)] bg-[var(--color-dark-700)]'>
      <div className='mx-auto flex h-[60px] w-full max-w-[1280px] items-center justify-between py-[12px] pr-[64px] pl-[60px]'>
        <Link href='/' className='flex items-end select-none'>
          {isAdmin ? (
            <>
              <h1 className='text-[26px] font-[600]'>Inctagram</h1>
              <span className='mb-[4px] flex items-end text-[14px] font-normal'>
                Super<span className='font-[600]'>Admin</span>
              </span>
            </>
          ) : (
            <h1 className='text-[26px] font-[600]'>Inctagram</h1>
          )}
        </Link>

        <div className={`flex items-center ${rightContainerGap}`}>
          {isAuth && !isAdmin && (
            <div className='relative cursor-pointer' role='button'>
              {notifCounter > 0 && (
                <div
                  className={twMerge(
                    'bg-danger-500 text-w absolute top-[-5px] flex min-w-[16px] items-center justify-center rounded-full px-[4px] pb-[2px] font-medium',
                    notifCounter > 99
                      ? 'right-[-6px] text-[8px]'
                      : notifCounter > 9
                        ? 'right-[-4px] text-[10px]'
                        : 'right-[-2px] w-[13px] text-[10px]',
                  )}
                >
                  {notifCounter > 99 ? '99+' : notifCounter}
                </div>
              )}
              <Icon iconId={'bell-outline'} color={'white'} />
            </div>
          )}

          <Listbox value={lang} onChange={changeLangHandler}>
            {({ open }) => {
              const currLang = langs.find((l) => l.title === lang)

              return (
                <div className='relative w-[164px]'>
                  <ListboxButton className='bg-dark-800 flex h-[36px] w-full cursor-pointer items-center justify-between border border-[var(--color-dark-300)] px-2 text-white'>
                    <div className='flex items-center gap-3'>
                      {currLang && <Image src={currLang?.path.src} alt={lang} className='h-5 w-5 object-cover' />}

                      <span className='block truncate'>{lang}</span>
                    </div>
                    {open ? (
                      <Icon iconId={'arrow-ios-Up'} color={'white'} />
                    ) : (
                      <Icon iconId={'arrow-ios-Down-outline'} color={'white'} />
                    )}
                  </ListboxButton>

                  <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <ListboxOptions className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded border border-gray-500 bg-[var(--color-dark-700)] py-1 text-white shadow-lg focus:outline-none'>
                      {langs.map(({ title, path }) => (
                        <ListboxOption
                          key={title}
                          value={title}
                          className={({ focus }) =>
                            `relative flex cursor-pointer items-center gap-3 px-3 py-1.5 select-none ${
                              focus ? 'bg-gray-700 text-white' : 'text-gray-200'
                            }`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <Image src={path.src} alt={title} className='h-5 w-5 object-cover' />
                              <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                {title}
                              </span>
                            </>
                          )}
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </Transition>
                </div>
              )
            }}
          </Listbox>

          {!isAuth && (
            <div className='flex gap-[24px]'>
              <Button children={'Log in'} />
              <Button variant={'primary'} children={'Sign up'} />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
