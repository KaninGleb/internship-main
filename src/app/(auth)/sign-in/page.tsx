'use client'

import { Icon } from '@/common/components'
import { AuthLayout } from '@/common/components/AuthLayout/AuthLayout'
import { SignInForm } from '@/features/auth/Index'

const SignInPage = () => (
  <main className='flex h-screen flex-col items-center'>
    <AuthLayout title={'Sign In'}>
      <div className={'mt-3.5 mb-6 flex justify-center gap-15'}>
        <a href={'https://www.google.com/'}>
          <Icon iconId='google' size={36} className='transition hover:scale-110' />
        </a>
        <a href={'https://github.com/'}>
          <Icon iconId='github' size={36} color='var(--color-light-100)' className='transition hover:scale-110' />
        </a>
      </div>
      <SignInForm />
    </AuthLayout>
  </main>
)

export default SignInPage
