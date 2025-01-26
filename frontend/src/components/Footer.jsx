import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Aiming for excellence in healthcare technology, 
          CarePlus is committed to continuous improvement. We strive to enhance our platform by integrating the latest advancements, 
          ensuring a superior user experience and delivering exceptional service. 
          Whether you're scheduling your first appointment or managing ongoing care, 
          CarePlus is dedicated to supporting you every step of the way.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-600-995-8371</li>
            <li>connect@careplus</li>
          </ul>
        </div>

      </div>

      <div>
  <hr />
  <p className='py-5 text-sm text-center'>
    Copyright {new Date().getFullYear()} @ careplus - All Rights Reserved.
  </p>
</div>


    </div>
  )
}

export default Footer
