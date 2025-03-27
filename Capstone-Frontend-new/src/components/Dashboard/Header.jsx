import { Sun, User } from '@phosphor-icons/react'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-10 py-4'>
      <div>
        <h1 className='text-2xl font-semibold'>Welcome, User!</h1>
      </div>
      <div className='flex gap-4'>
        <button>
            <Sun size={32} className='bg-slate-100 p-1 rounded-full' />
        </button>
        <a href="#">
            <User size={40} className='bg-slate-200 p-1 rounded-full border' />
        </a>
      </div>
    </div>
  )
}

export default Header
