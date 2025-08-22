'use client'

import { Header, Sidebar } from '@/common/components'
import { SignUpPage } from '@/pages/SignUpPage/SignUpPage'

export default function Home() {
  return (
    <div className={'flex h-screen flex-col'}>
      <Header isAuth={false} isAdmin={false} />
      <SignUpPage />
    </div>
  )
}
