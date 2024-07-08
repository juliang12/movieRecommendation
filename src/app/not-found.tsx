"use server"
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        <h1 className='text-3xl text-white'>Page not found</h1>
        <p className='text-3xl text-slate-400'>404</p>
    </div>
  )
}

export default NotFound