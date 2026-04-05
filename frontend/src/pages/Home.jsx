import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
const Home = () => {
      const [ pickup, setPickup ] = useState('')
    const [ destination, setDestination ] = useState('')
    const [ panelOpen, setPanelOpen ] = useState(false)

    const panelRef=useRef(null)

    const submitHandler=(e)=>{
      e.preventDefault()
    }
    useGSAP(function(){
     if(panelOpen){
      gsap.to(panelRef.current,{
    height:'70%'
  })
     }else{
      gsap.to(panelRef.current,{
    height:'0%'
  })
     }
    })

  return (
    <div className='h-screen relative overflow-hidden'>
       <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      


       <div className='h-screen w-screen object-cover'>
        <img src="https://i.sstatic.net/gtiI7.gif"alt=""/>
       </div>

       <div className=' h-screen flex flex-col justify-end absolute top-0 w-full '>
      <div className='h-[30%] p-6 bg-white relative'>

          <h5 ref={panelCloseRef} onClick={() => {
           setPanelOpen(false)
           }} className='absolute opacity-0 right-6 top-6 text-2xl'>
           <i className="ri-arrow-down-wide-line"></i>
            </h5>

          <h4 className='text-2xl font-semibold'>Find a Trip</h4>
         <form className='relative py-3' onSubmit={(e) => {
         submitHandler(e)
          }}>
         <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
         <input
          onClick={() => {
             setPanelOpen(true)
             setActiveField('pickup')
                   }}
            value={pickup}
            onChange={handlePickupChange}
            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'
             type="text"
            placeholder='Add a pick-up location'
                   />
                    <input
                    onClick={() => {
                setPanelOpen(true)
               setActiveField('destination')
                   }}
                   value={destination}
                   onChange={handleDestinationChange}
                  className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3'
                     type="text"
                 placeholder='Enter your destination' />
                </form>

      </div>
      <div ref={panelRef} className=' bg-red-500 h-0'>

      </div>
       </div>
    </div>
  )
}

export default Home

