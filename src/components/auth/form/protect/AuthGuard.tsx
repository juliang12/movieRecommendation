"use client"
import { redirect, usePathname } from 'next/navigation'
import React from 'react'

interface Props {
    children: React.ReactNode
}
const AuthGuard = ({children}: Props) => {
    const user = localStorage.getItem('user')

  return (
    <>{!user ? redirect('/auth/login') : children}</>
  )
}

export default AuthGuard