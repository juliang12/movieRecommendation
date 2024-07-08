"use server"
import AuthRegisterForm from '@/components/auth/form/AuthRegisterForm'
import React from 'react'
import { ToastContainer } from 'react-toastify'

const RegisterPage = () => {
  return (
    <div className='w-full max-w-[600px] mx-auto'>
        <AuthRegisterForm/>
        <ToastContainer/>
    </div>
  )
}

export default RegisterPage