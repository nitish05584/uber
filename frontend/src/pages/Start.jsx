import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='bg-cover bg-center bg-[url(https://cdn.zmescience.com/wp-content/uploads/2026/03/white-phase-active-scaled.png)]  h-screen pt-5  w-full flex  justify-between flex-col '
    >
        <img className='w-16 ml-8' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"alt=""/>

        <div className='bg-white  py-4 px-4 pb-7'>
            <h2 className='text-[30px] font-bold px-5'>Get Started with Uber</h2>
            <Link to="/login" className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      
    </div>
  )
}

export default Start

