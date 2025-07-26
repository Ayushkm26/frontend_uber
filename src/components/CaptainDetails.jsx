import React from 'react'

function CaptainDetails() {
  return (
    <div>   <div className='flex items-center justify-between '>
            <div className='flex items-center justify-start gap-3'>
              <img className='h-10 w-10 rounded-full object-cover' src='https://imgs.search.brave.com/4avxOzPiIRu4L0r5xW_KNThnqHAsTZ57yUsdKyTWIUo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kejl5/ZzBzbm5vaGxjLmNs/b3VkZnJvbnQubmV0/L190aGUtZW5qb3lh/YmxlLWFydC1vZi1s/ZWFybmluZy10by10/YWxrLXRvLXJhbmRv/bS1wZW9wbGUtMV8u/anBnLmpwZw'></img>
              <h4 className='text-lg font-medium'>madhur Dua</h4>
            </div>
            <div>
             <h4 className='text-xl font-semibold'>₹200.00</h4>
            <p className='text-sm font-medium text-gray-500 pl-2'>Earned</p>
            </div>
          </div>
        
            <div className='flex justify-center mt-8 bg-gray-100 rounde-xl p-3 gap=5 items-start' >
              <div className='text-center ml-2'>
                <i className="text-3xl mb-2   font-light ri-time-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600 '>hours Online</p>
              </div>
              <div className='text-center ml-2'>
                <i className="text-3xl mb-2   font-light ri-speed-up-line"></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>hours Online</p>
              </div>
              <div className='text-center ml-2'>
                <i className='text-3xl mb-2 font-light ri-booklet-line'></i>
                <h5 className='text-lg font-medium'>10.2</h5>
                <p className='text-sm text-gray-600'>hours Online</p>
              </div>
            
          </div></div>
  )
}

export default CaptainDetails