import React from 'react'
import { Link } from 'react-router-dom'

function Riding() {
  return (
    <div className='h-screen'>  
     <Link to={'/home'} className='fixed h-10 right-2 top-2 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className=" text-lg font-bold ri-home-4-line"></i>
     </Link>
        <div className='h-1/2'>
             <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Home Background"  />
        </div>
        <div className='h-1/2 p-4'>
                <div className='flex items-center justify-between'>
        <img className="h-[90px] w-[110px] " src="https://i.postimg.cc/NfxQfbmn/Comfort-Taxi.jpg" alt="img" />
         <div className='text-right'>
         <h2 className='text-lg font-medium'>Ayush kr</h2>
         <h4 className='text-xl font-semibold -mt-1 -mb-1'>BR44 B 2324</h4>
         <p className='text-sm text-gray-600'>Maruti suzki Alto</p>
         </div>
        </div>
        <div className='flex gap-2 justify-between flex-col items center'>
          <div className='w-full'>
         
          
             <div className='flex items-center gap-5 py-3 border-t-1 border-gray-200'>
              <i className=" text-lg ri-map-pin-time-line"></i>
              <div>
                <h3 className='text-lg font-medium'>562/11-A</h3>
                <p className='text-base -mt-1 text-gray-600'>Baba nagar Syndicate Buxar Bihar</p>
              </div>
          </div>
           <div className='flex items-center gap-5 py-3 border-t-1 border-gray-200'>
              <i className="text-lg ri-currency-fill"></i>
              <div>
                <h3 className='text-lg font-medium'>rs 500</h3>
                <p className='text-base -mt-1 text-gray-600'>cash</p>

              </div>
          </div>
          </div>
          </div>
              <button className='w-full mt-2 bg-green-600 text-white font-semibold p-2 rounded-lg '>Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding