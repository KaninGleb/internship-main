import { Input } from '@/components/Input/Input'
import React, { useState } from 'react'
import { Button } from '@/components/Button/Button'
import { Checkbox } from '@headlessui/react'
import { Icon } from '@/components/Icons'


export const SignUpPage = () => {
  const [enabled, setEnabled] = useState(true)



  return (
    <div className='flex max-w-[378px] items-center justify-center bg-black m-auto'>
      <div className='bg-dark-700 w-full max-w-md rounded-lg p-8 border border-dark-300 '>
        <h2 className='mb-4 flex flex-col items-center justify-center text-xl font-semibold text-white text-[20px]'>Sign Up</h2>

        <div className='mb-6 flex justify-center gap-15'>
          <a href={'https://www.google.com/'}>
            <Icon name='google' size={36} className='transition hover:scale-110' />
          </a>
          <a href={'https://github.com/'}>
            <Icon name='github' size={36} className='transition hover:scale-110' />
          </a>
        </div>

        <Input className={'w-full'} label={'Name'} placeholder={"Epam11"} />

        <Input className={'w-full'} type={'email'} label='Email' placeholder={"Epam@epam.com"} />

        <Input className={'w-full'} type={'password'} label={'Password'}  />

        <Input className={'w-full'} type={'password'} label={'Password confirmation'} />

        <div className='mb-4 flex items-center'>
          <Checkbox
            checked={enabled}
            onChange={setEnabled}
            className='group mr-2 block size-4 rounded-[2px] border bg-white data-checked:bg-white'
          >
            <svg className='stroke-black opacity-0 group-data-checked:opacity-100' viewBox='0 0 14 14' fill='none'>
              <path d='M3 8L6 11L11 3.5' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </Checkbox>

          <p className=' text-[12px] w-full text-white italic font-[var(--font-family-primary)]'>
            I agree to the{' '}
            <a href={'#'} className={'text-info-300 underline'}>
              Terms of Service
            </a>{' '}
            and{' '}
            <a href={'#'} className={'text-info-300 underline'}>
              Privacy Policy
            </a>
          </p>
        </div>

        <Button className={'w-full'} variant={'primary'} size={'large'} children={'Sign up'} />

        <div className='m-auto mt-4 text-center'>
          <a href={'#'}>
            <p className='text-white mb-1'>Do you have an account?</p>
          </a>
          <Button className={'text-info-500 w-full'} size={'large'} children={'Sign in'} />
        </div>
      </div>
    </div>
  )
}
