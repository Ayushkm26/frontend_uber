import React from 'react'

function WaitingForDriver(props) {
  return (
    <div >
      <h5 className='absolute top-2 p-1  right-3  text-2xl font-boldon' onClick={()=>{
          props.setwatingForDriver(false);
        }}><i className="text-3xl text-gray-100 ri-arrow-down-s-fill"></i></h5>
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

export default WaitingForDriver