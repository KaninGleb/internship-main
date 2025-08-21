'use client'

import { Card, Header, Icon, Typography } from '@/common/components'
import { SignInForm } from '@/features/auth/Index'

const SignInPage = () => (
  <div className='flex w-screen flex-col items-center'>
    <Header isAuth={false} isAdmin={false} />
    <Card className={'flex flex-col items-center'}>
      <Typography as={'h1'} variant={'h1'}>
        Sign In
      </Typography>
      <div className={'flex'}>
        <Icon iconId='google' size={36} />
        <Icon iconId='github' size={36} color='var(--color-light-100)' />
      </div>
      <SignInForm />
    </Card>
  </div>
)

export default SignInPage
