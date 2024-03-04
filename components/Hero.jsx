import React from 'react'

import Cards from './Cards'

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
        <div className=" w-full h-auto mx-auto py-24 pl-[10%] p-2 flex  bg-green-50 ">
        <div className='ml-[18%] mt-4 flex-col md:grid md:grid-cols-2 lg:grid-cols-3  gap-4'>

        {/* <Cards name="Hand Tossed" size="Mediun" price="$20.99" />
        <Cards name="Hand Tossed" size="small" price="$7.99" />
        <Cards name="Crunchy Thin" size="large" price="$9.99" />
        <Cards name="Cheeses Pizza" size="x-large" price="$7.99" />
        <Cards name="Crust Cheeses" size="x-small" price="$5.99" />
        <Cards name="Hand Tossed" size="small" price="$7.99" />
        <Cards name="Crunchy Thin" size="large" price="$11.99" />
        <Cards name="Hand Tossed" size="small" price="$7.99" />
        <Cards name="Crunchy Thin" size="large" price="$12.99" /> */}
        <Cards />
      
        </div>
        </div>
    </div>
  )
}

export default Hero
