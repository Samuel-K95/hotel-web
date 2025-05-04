import React from 'react'
import { useLocation, useNavigate } from 'react-router'


const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Facilities', path: '/facilities' },
        { label: 'Rooms', path: '/rooms' },
        { label: 'Contact-Us', path: '/contact-us' },

    ]

    console.log('path', location.pathname)
  return (
    <div className='w-full flex justify-between border-b-2 border-gray-100 py-4'>
        <div className='w-1/2'>
            logo
        </div>
        <div className='flex w-1/2 justify-evenly'>
        {navItems.map(({ label, path }) => {
          const isActive = location.pathname === path;
          return (
            <div
              key={label}
              onClick={() => navigate(path)}
              className='relative cursor-pointer hover:text-[#3252DF] transition-colors duration-300'
            >
              {label}
              <span
                className={
                  `absolute left-0 -bottom-1 h-[2px] bg-[#3252DF] transition-all duration-300 ease-out
                  ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`
                }
              ></span>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Header