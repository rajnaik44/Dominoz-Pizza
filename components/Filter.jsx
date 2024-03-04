import React from 'react'

const Filter = () => {
  return (
    <div className="fixed left-0  top-0  w-[20%]  h-screen  ">
        <div className="fixed left-0 top-0 w-[20%] h-screen  mt-28 border-r border-gray-300 mx-">
       <div className='flex justify-center items-center mt-6'>
        <h2 className='uppercase font-bold text-red-400 text-xl md:text-4xl'>Filter</h2>
       </div>
       <div className="py-4 flex flex-col mx-auto justify-center items-center">
            <ul className="uppercase ">
                <li className="py-4 text-sm md:text-xl font-bold border-b border-gray-300 ">Pricing</li> 
                <ul className=''>
                <div className='flex gap-2'>
                <input type="checkbox" />
                  <li className='py-2 hover:scale-75 ease-in duration-100'>high to low</li>
                  </div>
                  <div className='flex gap-2'>
                  <input type="checkbox" />
                  <li className='py-2 hover:scale-75 ease-in duration-100'>low to high</li>
                  </div>
                </ul>           
                <li className="py-4 text-sm md:text-xl font-bold border-b border-gray-300 ">Category</li>
                <ul>
                <div className='flex gap-2'>
                <input type="checkbox" />
                  <li className='py-2 hover:scale-75 ease-in duration-100'>small to x-large</li>
                  </div>
                  <div className='flex gap-2'>
                  <input type="checkbox" />
                  <li className='py-2 hover:scale-75 ease-in duration-100'>x-large to small</li>
                  </div>
                </ul>   
                <li className="py-4 text-sm md:text-xl font-bold border-b border-gray-300 ">Rating</li>
                <ul>
                <div className='flex gap-2'>
                <input type="checkbox" />
                  <li className='py-2 hover:scale-75 ease-in duration-100'>low</li>
                  </div>
                  <div className='flex gap-2'>
                  <input type="checkbox" />
                  <li className='py-2 hover:scale-75 ease-in duration-100'>high</li>
                  </div>
                </ul>   
            </ul>
            </div>
          </div>
    </div>
  )
}

export default Filter