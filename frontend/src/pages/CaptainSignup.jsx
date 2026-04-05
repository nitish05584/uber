import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainSignup = () => {

         const [email,setEmail]=useState("")
    
         const [password,setPassword]=useState('')
    
         const [firstName,setFirstName]=useState('')
         const [lastName,setLastName]=useState('')

         

         const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')


  const navigate=useNavigate()



         const {captain,setCaptain}=useContext(CaptainDataContext)
    

         const submitHandler = async (e) => {
  e.preventDefault()

  const captainData = {
    fullname: {
      firstname: firstName,
      lastname: lastName
    },
    email,
    password,
    vehicle: {
      color: vehicleColor,
      plate: vehiclePlate,
      capacity: vehicleCapacity,
      vehicleType
    }
  }

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData,
      { withCredentials: true }
    )

    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain || data)
      navigate('/captain-home')
    }

  } catch (error) {
    console.log(error.response?.data || error.message)
  }

  setEmail('')
  setFirstName('')
  setLastName('')
  setPassword('')
  setVehicleColor('')
  setVehiclePlate('')
  setVehicleCapacity('')
  setVehicleType('')
}
       
       return (
        <div>
          <div className='p-7 flex h-screen flex-col justify-between'>
          <div className=''>
            <img className='w-16 mb-5' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"alt=""/>
   
   
   
        <form  onSubmit={submitHandler}>
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




             <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
                      </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>




   
           <button className='bg-[#111] text-white font-semibold mb-3 rounded px-2 py-2  w-full text-lg placeholder:text-base'>Create new Account</button>
          <p className='text-center'>Already have a account? <Link to="/captain-login" className='text-blue-600'>Login here</Link></p>
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
