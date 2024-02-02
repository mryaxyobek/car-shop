import React from 'react'
import { Link } from 'react-router-dom'

import car from '../img/car.png'
import restangle from '../img/hero-restangle.png'
const Hero = () => {


  return (
    <div className='flex items-center py-40'>
      <div className="w-full max-w-base mx-auto px-5">

        {/* parent */}
        <div className="flex items-center flex-col text-white text-center space-y-3.5">
          <h1 className='text-xl'>Mashina bozor Lorem, ipsum dolor.</h1>
          <p className="text-4xl font-bold">O'zbekistondagi #1 mashina bozor sayti!</p>
          <p className="text-2xl font-medium  max-w-2xl">Har xil markadagi moshinalarni hamyonbop narxda
            Oson soting va sotib oling!</p>
          <Link to='/catalog' className='inline-block px-20 py-3 bg-main rounded-lg font-semibold text-lg !mt-7'>Katalog</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero