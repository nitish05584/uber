import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'
import { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'


const UserSignup = () => {

     const [email,setEmail]=useState("")

     const [password,setPassword]=useState('')

     const [firstName,setFirstName]=useState('')
     const [lastName,setLastName]=useState('')
     const [userData,setUserData]=useState({})

     const navigate=useNavigate()



  const { user, setUser } = useContext(UserDataContext)

   const submitHandler = async (e) => {
  e.preventDefault();

  const newUser = {
    fullname: {
      firstname: firstName,
      lastname: lastName
    },
    email,
    password
  };

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser,
      { withCredentials: true }
    );

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token)
      navigate('/home');
    }

    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');

  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};
  return (
    <div>
       <div className='p-7 flex h-screen flex-col justify-between'>
       <div className=''>
         <img className='w-16 mb-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"alt=""/>



     <form onSubmit={submitHandler}>
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

        <button className='bg-[#111] text-white font-semibold mb-3 rounded px-2 py-2  w-full text-lg placeholder:text-base'>Create account</button>
       <p className='text-center'>Already have a account? <Link to="/login" className='text-blue-600'>Login here</Link></p>
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

export default UserSignup

