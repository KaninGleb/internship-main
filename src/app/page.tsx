'use client'

import { Header } from '@/common/components'
import { SignUpPage } from '@/pages/SignUpPage/SignUpPage'

export default function Home() {
  return (
    <>
      <Header isAuth={false} isAdmin={false} />

      <SignUpPage />
    </>
  )
}
