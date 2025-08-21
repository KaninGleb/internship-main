'use client'

import { Button, Input, Typography } from '@/common/components'
import Link from 'next/link'

export const SignInForm = () => {
  return (
    <form action=''>
      <div>
        <Input type={'email'} placeholder={'Epam@epam.com'} label={'Email'} />
        <Input type={'password'} placeholder={'**********'} />
      </div>
      <Link href={'/forgot-password'}>Forgot Password</Link>
      <Button type={'submit'}>Sign In</Button>
      <Typography>Don’t have an account?</Typography>
      <Button variant='default'>
        <Link href={'/sign-up'}>Sign Up</Link>
      </Button>
    </form>
  )
}
