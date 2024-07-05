"use client"
import useAuth from '@/hooks/auth/useAuth'
import { redirect } from 'next/navigation'

interface Props {
    children: React.ReactNode
}
const AuthGuard = ({children}: Props) => {
  const { user } = useAuth()

  return (
    <>{!user ? redirect('/auth/login') : children}</>
  )
}

export default AuthGuard