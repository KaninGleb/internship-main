'use client'

import React from 'react'
import { Header, Pagination } from '@/common/components'
import { SignUpPage } from '@/pages/SignUpPage/SignUpPage'


export default function Home() {
  return (
    <>
      <Header isAuth={false} isAdmin={false} />
      <SignUpPage />
      <Pagination totalCount={500} onChange={() => null}/>
    </>
  )
}
