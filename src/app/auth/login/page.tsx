import AuthFormLogin from '@/components/auth/form/AuthFormLogin'
import React from 'react'
import { ToastContainer } from 'react-toastify'

const LoginPage = () => {
  return (
    <div className='w-full max-w-[600px] mx-auto'>
        <AuthFormLogin/>
        <ToastContainer/>
    </div>
  )
}

export default LoginPage