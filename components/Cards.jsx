import React from 'react'
import pizza1 from '@/public/1.jpg'
import Image from 'next/image'
import { data } from '@/app/data'

const Cards = () => {
  return (
    <>
        {data.map((item,i)=>(
    <div key={i} className='w-[350px] h-auto flex justify-center items-center rounded-lg shadow-xl shadow-gray-600 hover:scale-75 ease-in duration-150'>
        <div className='m-4 w-[200px]'>
          <Image  src={pizza1} alt='/' />
          </div>
        <div className=' flex-col mx-auto'>
          <h1 className='text-2xl font-bold'>{item.name}</h1>
          <p className=''>{item.size}</p>
          <p className='text-red-400 font-bold'>{item.price}</p>
        </div>
      </div>
          ))}
          </>
          
  )
}

export default Cards