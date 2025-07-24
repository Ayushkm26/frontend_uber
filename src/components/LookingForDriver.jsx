import React from 'react'

function LookingForDriver(props) {
  return (
    <div >
      <h5 className='absolute top-2 p-1  right-3  text-2xl font-boldon' onClick={()=>{
          props.setVechileFound(true);
        }}><i className="text-3xl text-gray-100 ri-arrow-down-s-fill"></i></h5>
      <h3 className='text-2xl font-bold mb-5'>Looking for a Driver</h3>
        <div className='flex gap-2 justify-between flex-col items center'>
          <img className="h-[180px] w-[260px] " src="https://i.postimg.cc/NfxQfbmn/Comfort-Taxi.jpg" alt="img" />
          <div className='w-full'>
          <div className='flex items-center gap-5 py-3 border-t-1 border-gray-300'>
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
        </div>
         
    </div>  
    )
}

export default LookingForDriver