import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='flex items-center py-40 max-640:pb-8 max-640:pt-52'>
      <div className="w-full max-w-base mx-auto px-5">

        {/* parent */}
        <div className="flex items-center flex-col text-white text-center space-y-3.5 max-640:text-start max-640:items-start">
          <h1 className='text-xl max-640:text-lg max-410:max-w-56'>Mashina bozor Lorem, ipsum dolor.</h1>
          <p className="text-4xl font-bold max-640:hidden">O'zbekistondagi #1 mashina bozor sayti!</p>
          <p className="hidden font-bold max-640:block text-3xl">O'zbekistondagi <br /> #1 mashina bozor sayti!</p>
          <p className="text-2xl font-medium  max-w-2xl max-640:text-xl max-640:max-w-lg">Har xil markadagi moshinalarni hamyonbop narxda
            Oson soting va sotib oling!</p>
          <Link to='/catalog' className='inline-block px-20 py-3 bg-main rounded-lg font-semibold text-lg !mt-7 max-640:text-base'>Katalog</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero