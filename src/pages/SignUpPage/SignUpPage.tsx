import { useState } from 'react'
import { Icon, Input, Button, CheckBox } from '@/common/components'

export const SignUpPage = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className='m-auto flex max-w-[378px] items-center justify-center bg-black'>
      <div className='bg-dark-500 border-dark-300 w-full max-w-md rounded-lg border p-8'>
        <h2 className='mb-4 flex flex-col items-center justify-center text-xl text-[20px] font-semibold text-white'>
          Sign Up
        </h2>

        <div className='mb-6 flex justify-center gap-15'>
          <a href={'https://www.google.com/'}>
            <Icon iconId='google' size={36} className='transition hover:scale-110' />
          </a>
          <a href={'https://github.com/'}>
            <Icon iconId='github' size={36} color={'white'} className='transition hover:scale-110' />
          </a>
        </div>

        <Input className={'w-full'} label={'Name'} placeholder={'Epam11'} />

        <Input className={'w-full'} type={'email'} label='Email' placeholder={'Epam@epam.com'} />

        <Input className={'w-full'} type={'password'} label={'Password'} />

        <Input className={'w-full'} type={'password'} label={'Password confirmation'} />

        <div className='mb-4 flex items-center'>
          <CheckBox checked={enabled} onChange={setEnabled} disabled={false} />

          <p className='w-full text-[12px] font-[var(--font-family-primary)] font-extralight text-white'>
            I agree to the{' '}
            <a href={'#'} className={'text-accent-300 underline'}>
              Terms of Service
            </a>{' '}
            and{' '}
            <a href={'#'} className={'text-accent-300 underline'}>
              Privacy Policy
            </a>
          </p>
        </div>

        <Button className={'w-full'} variant={'primary'} size={'large'} children={'Sign up'} />

        <div className='m-auto mt-4 text-center'>
          <a href={'#'}>
            <p className='mb-1 font-extralight text-white'>Do you have an account?</p>
          </a>
          <Button className={'text-accent-500 w-full'} size={'large'} children={'Sign in'} />
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
