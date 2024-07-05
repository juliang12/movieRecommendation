import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white h-10 bg-slate-900 text-center flex items-center justify-center'>
        create by {new Date().getFullYear()}
    </footer>
  )
}

export default Footer