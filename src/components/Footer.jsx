import React from 'react'
import { useNavigate } from 'react-router'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <div className='w-full flex flex-col justify-center items-center border-t-2 border-gray-100 pt-10 pb-5 mt-10'>
      <div className='w-full flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-0 py-5 px-4'>

        {/* Logo Section */}
        <div className='w-full md:w-1/3 flex flex-col md:items-end items-center text-center md:text-right'>
          <img src="../src/assets/images/logo (2).png" alt="logo" className='w-20 h-20' />
          <p className='font-bold text-2xl sm:text-3xl lg:text-4xl text-[#152C5B]'>Luxury Hotels</p>
        </div>

        {/* Navigation Links */}
        <div className='w-full md:w-1/3 flex flex-col items-center text-center gap-2'>
          <div className='hover:text-[#3252DF] hover:cursor-pointer' onClick={() => navigate('/')}>Home</div>
          <div className='hover:text-[#3252DF] hover:cursor-pointer' onClick={() => navigate('/facilities')}>Facilities</div>
          <div className='hover:text-[#3252DF] hover:cursor-pointer' onClick={() => navigate('/rooms')}>Rooms</div>
          <div className='hover:text-[#3252DF] hover:cursor-pointer' onClick={() => navigate('/contact-us')}>Contact-Us</div>
        </div>

        {/* Social Media Links */}
        <div className='w-full md:w-1/3 flex flex-col items-center md:items-start gap-3'>
          <div className='flex items-center gap-2'>
            <img src="../src/assets/images/Instagram (1).png" alt="Instagram" />
            <span className='hover:text-[#3252DF] hover:cursor-pointer'>Instagram</span>
          </div>

          <div className='flex items-center gap-2'>
            <img src="../src/assets/images/Facebook.png" alt="Facebook" />
            <span className='hover:text-[#3252DF] hover:cursor-pointer'>Facebook</span>
          </div>

          <div className='flex items-center gap-2'>
            <img src="../src/assets/images/Twitter (1).png" alt="Twitter" />
            <span className='hover:text-[#3252DF] hover:cursor-pointer'>Twitter</span>
          </div>
        </div>
      </div>

      <div className='text-center text-gray-400 text-sm px-4'>
        © 2025 • All rights reserved • Luxury Hotels
      </div>
    </div>
  )
}

export default Footer
