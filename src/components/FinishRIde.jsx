import React from 'react'
import { Link } from 'react-router-dom';

const FinishRIde = (props) => {
  return (
   <div >
         <h5 className='absolute top-2 p-1  right-3  text-2xl font-boldon' onClick={()=>{
            props.setFinishridePopPanel(false);
        }}><i className="text-3xl ri-arrow-down-s-fill"></i></h5>
      <h3 className='text-2xl font-bold mb-5'>Finish the ride </h3>
         <div className='flex  justify-between  items-center p-4 border-2 border-yellow-300 rounded-lg mt-4'>
            <div className='flex items-center  gap-3'>
                <img className='h-12 rounded-full object-cover w-12' src='https://imgs.search.brave.com/RjXfLwZCM3kb6oFKfFHjG0HY6odyeupJU1AUpvET48k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/bWlsZXktd29tYW4t/b3V0ZG9vcnMtY2l0/eV8yMy0yMTQ4Nzc0/MzE2LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDA' alt='' />
                <h2 className='text-lg font-medium'>random</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 KM</h5>
         </div>
        <div className='flex gap-2 justify-between flex-col items center pt-3'>
          <div className='w-full'>
          <div className='flex items-center gap-5 py-3  border-gray-300'>
              <i className=" text-lg ri-map-pin-fill"></i>
              <div>
                <h3 className='text-lg font-medium'>562/11-A</h3>
                <p className='text-base -mt-1 text-gray-600'>Baba nagar Syndicate Buxar Bihar</p>
              </div>
          </div>
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
           <div className='mt-6'>
          
        
           
          <Link to='/captain-home' className='w-full mt-2 flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg '>FInish Ride </Link>
          <p className='text-red-500 mt-6 text-xs text-center'> click on Finish button if you have Completed the payment</p>
        </div>
         </div>
    </div>
  )
}

export default FinishRIde