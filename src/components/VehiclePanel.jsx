import React from 'react'

function VehiclePanel(props) {
  return (
    <div> <h5 className='absolute top-2 p-1  right-3  text-2xl font-boldon' onClick={()=>{
          props.setVechilePanel(false);
        }}><i className="text-3xl text-gray-700 ri-arrow-down-s-fill"></i></h5>
        <h3 className='text-xl font-semibold mb-5'>Select a ride</h3>
        <div  onClick= {()=>{
          props.setConfirmRidePanel(true);
          props.setVechilePanel(false);
        }}className="flex w-full items-center justify-between p-3 mb-2 ml-1 rounded-2xl border-2 border-transparent active:border-black">          
        <img className="h-12" src="https://i.postimg.cc/NfxQfbmn/Comfort-Taxi.jpg" alt="img" />
           
            <div className='w-1/2'>
              <h4 className='text-base font-medium'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
              <h5 className='text-gray-500 text-sm font-medium'>2 mins away</h5>
              <p className='text-xs font-normal '>Affordable, compact ride</p>
            </div>
            <h2>
              <span className='text-lg font-semibold'>₹100.69</span>
              
            </h2>
        </div>
        <div  onClick= {()=>{
          props.setConfirmRidePanel(true);
          props.setVechilePanel(false);
        }} className="flex w-full items-center justify-between p-3 mb-2 ml-1 rounded-2xl border-2 border-transparent active:border-black">               
        <img className="h-12" src="https://thumbs.dreamstime.com/b/fat-man-motorcycle-go-to-work-online-transportation-cartoon-illustration-vector-fat-man-motorcycle-go-to-work-169391691.jpg" alt="img" />
           
            <div className='w-1/2'>
              <h4 className='text-base font-medium'>MoterBike <span><i className="ri-user-fill"></i>1</span></h4>
              <h5 className='text-gray-500 text-sm font-medium'>5 mins away</h5>
              <p className='text-xs font-normal '>Affordable, motorcycle ride</p>
            </div>
            <h2>
              <span className='text-lg font-semibold'>₹75.00</span>
              
            </h2>
        </div>
        <div  onClick= {()=>{
          props.setConfirmRidePanel(true);
          props.setVechilePanel(false);
        }} className="flex w-full items-center justify-between p-3 mb-2 ml-1  rounded-2xl border-2 border-transparent active:border-black">               
        <img className="h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYMWz7h6PQVgBpQkU8n3ZZhGHR98zav5iZQ00pt38RaiCFTrxg-YJuh0z1ncOyBSO7d4&usqp=CAU" alt="img" />
            <div className='w-1/2'>
              <h4 className='text-base font-medium'>UberAuto  <span><i className="ri-user-fill"></i>2</span></h4>
              <h5 className='text-gray-500 text-sm font-medium'>7 mins away</h5>
              <p className='text-xs font-normal '>Affordable, Auto ride</p>
            </div>
            <h2>
              <span className='text-lg font-semibold'>₹90.50</span>
              
            </h2>
        </div>
            </div>
  )
}

export default VehiclePanel