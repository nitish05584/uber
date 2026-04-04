import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {

         const [email,setEmail]=useState("")
    
         const [password,setPassword]=useState('')
    
         const [firstName,setFirstName]=useState('')
         const [lastName,setLastName]=useState('')
         const [userData,setUserData]=useState({})
    
        const sugmitHandler=(e)=>{
            e.preventDefault()
        }
  return (
    <div>
          <div className='p-7 flex h-screen flex-col justify-between'>
          <div className=''>
            <img className='w-16 mb-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"alt=""/>
   
   
   
        <form >
           <h3 className='text-lg font-medium mb-2'>What's your name</h3>
   
            <div className='flex gap-4 mb-5'>
               <input 
               required
                value={firstName} onChange={(e)=>setFirstName(e.target.value)} 
                type="text" placeholder='First name ' className='bg-[#eeee] rounded px-2 py-2 border w-1/2 text-lg placeholder:text-base'/>
            
              <input required
               value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" placeholder='Last name ' className='bg-[#eeee]  rounded px-2 py-2 border w-1/2 text-lg placeholder:text-base'/>
            </div>
   
   
           <h3 className='text-lg font-medium mb-2'>What's your email</h3>
   
           <input required 
           value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='email@expamle.com ' className='bg-[#eeee] mb-5 rounded px-2 py-2 border w-full text-lg placeholder:text-base'/>
   
   
           <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
   
           <input  required 
           value={password} onChange={(e)=>setPassword(e.target.value)}
            type="password" placeholder='password ' className='bg-[#eeee] mb-5 rounded px-2 py-2 border w-full text-lg placeholder:text-base'/>
   
           <button className='bg-[#111] text-white font-semibold mb-3 rounded px-2 py-2  w-full text-lg placeholder:text-base'>login</button>
          <p className='text-center'>Already have a account? <Link to="/captain-login" className='text-blue-600'>Logi here</Link></p>
        </form>
          </div>
   
            <div>
             <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
               Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
           </div>
   
       </div>
       </div>
  )
}

export default CaptainSignup
