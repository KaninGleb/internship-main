'use client'

import { Button, Input, Typography } from '@/common/components'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

export const SignInForm = () => {
  const isLoggedIn = false

  const {} = useForm({})

  return (
    <form className='flex w-full flex-col justify-center'>
      <div className='mb-5 flex flex-col gap-8'>
        <Input className='w-full' type={'email'} placeholder={'Epam@epam.com'} label={'Email'} />
        <Input className='w-full' type={'password'} placeholder={'**********'} />
      </div>
      <Link href={'/forgot-password'} className='text-light-900 mb-6 self-end px-1 text-sm leading-6 font-normal'>
        Forgot Password{' '}
      </Link>
      <Button type={'submit'} variant='primary'>
        Sign In
      </Button>
      <div className='mt-4.5 text-center'>
        <Typography className='mb-1.5 text-base leading-6 font-normal' as={'a'}>
          Don’t have an account?
        </Typography>
        <Button size={'large'} className={'mt-1 w-full'}>
          <Link href={'/'}>Sign Up</Link>
        </Button>
      </div>
    </form>
  )
}
