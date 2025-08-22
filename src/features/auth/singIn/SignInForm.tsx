'use client'

import { Button, Input, Typography } from '@/common/components'
import Link from 'next/link'

export const SignInForm = () => {
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
      <div className='mt-4.5 flex w-full flex-col items-center'>
        <Typography className='mb-1.5 text-base leading-6 font-normal'>Don’t have an account?</Typography>
        <Button variant='default'>
          <Link href={'/'}>Sign Up</Link>
        </Button>
      </div>
    </form>
  )
}
