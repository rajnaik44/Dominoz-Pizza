"use client"
import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]" >
    <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <h1 className='text-4xl cursor-pointer'>Product</h1>
        <ul className='flex gap-8'>
            <li className='font-bold text-xl hover:scale-75 ease-in duration-150'>Home</li>
            <li className='font-bold text-xl hover:scale-75 ease-in duration-150'>About</li>
            <li className='font-bold text-xl hover:scale-75 ease-in duration-150'>Contact</li>
        </ul>
    </div>
      
    </div>
  )
}

export default Navbar
