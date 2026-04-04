import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
         const [email,setEmail]=useState("")
        const [password,setPassword]=useState('')
    
        const [captain,setCaptain]=useState({})
    
        const submitHandler=(e)=>{
          e.preventDefault()
        }
  return (
      <div className='p-7 flex h-screen flex-col justify-between'>
           <div className=''>
             <img className='w-20 mb-3' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"alt=""/>
    
    
    
         <form onSubmit={submitHandler}>
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
    
            <input required
            value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email@expamle.com ' className='bg-[#eeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base'/>
    
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
    
    
            <input value={password} onChange={(e)=>setPassword(e.target.value)} required type="password" placeholder='password ' className='bg-[#eeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base'/>
    
            <button className='bg-[#111] text-white font-semibold mb-3 rounded px-2 py-2  w-full text-lg placeholder:text-base'>login</button>
           <p className='text-center'>join a feelt ? <Link to="/captain-signup" className='text-blue-600'>Resister as a captain</Link></p>
         </form>
           </div>
    
           <div>
            <Link to="/login" className='bg-[#d5622d] flex items-center justify-center  text-white font-semibold mb-5 rounded px-2 py-2  w-full text-lg placeholder:text-base'>Sign in as User</Link>
           </div>
        </div>
  )
}

export default CaptainLogin
