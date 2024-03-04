import React from 'react'

const Filter = () => {
  return (
    <div className="fixed left-0  top-0  w-[20%]  h-screen  ">
        <div className="fixed left-0 top-0 w-[20%] h-screen  mt-28 border-r border-gray-300 mx-">
       <div className='flex justify-center items-center mt-6'>
        <h2 className='uppercase font-bold text-red-400'>Filter</h2>
       </div>
       <div className="py-4 flex flex-col mx-auto justify-center items-center">
            <ul className="uppercase ">
                <li className="py-4 text-xl font-bold border-b border-gray-300 hover:scale-75 ease-in duration-100">Pricing</li>            
                <li className="py-4 text-xl font-bold border-b border-gray-300 hover:scale-75 ease-in duration-100">Category</li>
                <li className="py-4 text-xl font-bold border-b border-gray-300 hover:scale-75 ease-in duration-100">Rating</li>
            </ul>
            </div>
          </div>
    </div>
  )
}

export default Filter