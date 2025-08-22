'use client'

import { Card, Header, Icon, Typography } from '@/common/components'
import { SignInForm } from '@/features/auth/Index'

const SignInPage = () => (
  <>
    <Header isAuth={false} isAdmin={false} />
    <main className='flex h-screen flex-col items-center'>
      <Card className={'flex w-95 flex-col items-center p-6'}>
        <Typography as={'h1'} variant={'h1'}>
          Sign In
        </Typography>
        <div className={'mt-3.5 mb-6 flex gap-15'}>
          <a href={'https://www.google.com/'}>
            <Icon iconId='google' size={36} className='transition hover:scale-110' />
          </a>
          <a href={'https://github.com/'}>
            <Icon iconId='github' size={36} color='var(--color-light-100)' className='transition hover:scale-110' />
          </a>
        </div>
        <SignInForm />
      </Card>
    </main>
  </>
)

export default SignInPage
