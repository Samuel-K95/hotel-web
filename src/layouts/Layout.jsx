import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Layout = () => {
  return (
    <div className='font-sans w-full flex flex-col justify-between px-5 py-1'>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout