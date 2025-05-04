import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Rooms', path: '/rooms' },
    { label: 'Contact-Us', path: '/contact-us' },
  ];

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isSidebarOpen]);

  return (
    <div className='w-full border-b-2 border-gray-100 py-4 px-4 md:px-10 relative bg-white z-50'>
      {/* Header content */}
      <div className='flex justify-between items-center'>
        {/* Hamburger menu for small screens */}
        <div className='md:hidden'>
          <HiMenuAlt3
            size={28}
            className='cursor-pointer text-[#152C5B]'
            onClick={() => setIsSidebarOpen(true)}
          />
        </div>

        {/* Logo centered on mobile */}
        <div className='flex-1 flex justify-center md:justify-start'>
          <div className='flex items-center gap-3'>
            <img
              className='w-10 h-10 sm:w-12 sm:h-12'
              src='src/assets/images/logo (2).png'
              alt='logo'
            />
            <span className='font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#152C5B]'>
              Luxury Hotels
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <div className='hidden md:flex items-center gap-10'>
          {navItems.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <div
                key={label}
                onClick={() => navigate(path)}
                className='relative cursor-pointer hover:text-[#3252DF] transition-colors duration-300 group'
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#3252DF] transition-all duration-300 ease-out ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sidebar Overlay (Mobile Nav) */}
      {isSidebarOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-40 z-40'></div>
      )}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-2/3 max-w-xs bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='p-5 flex flex-col gap-6'>
          <div className='flex justify-between items-center mb-4'>
            <span className='text-xl font-bold text-[#152C5B]'>Menu</span>
            <IoMdClose
              size={24}
              className='cursor-pointer'
              onClick={() => setIsSidebarOpen(false)}
            />
          </div>
          {navItems.map(({ label, path }) => {
            const isActive = location.pathname === path;
            return (
              <div
                key={label}
                onClick={() => {
                  navigate(path);
                  setIsSidebarOpen(false);
                }}
                className={`cursor-pointer text-lg hover:text-[#3252DF] ${
                  isActive ? 'text-[#3252DF] font-semibold' : ''
                }`}
              >
                {label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
