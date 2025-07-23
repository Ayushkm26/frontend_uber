import React, { use, useRef } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';

function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panel, setPanel] = useState(false);
   const panelRef =useRef(null);
   const panelCloseRef=useRef(null);
  useGSAP(
   function () {
      if(panel) {
        gsap.to(panelRef.current, {
          height: "70vh",
          duration: 0.2,
          ease: "power4.inOut",
          padding:20,
          overflowY: "auto",
          opacity: 1
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
          duration: 0.2,
          ease: "power4.inOut"
        });
     
      } else {
        gsap.to(panelRef.current, {
          height: "0",
          duration: 0.5,
          ease: "power3.inOut",
          opacity: 0,
          padding: 0,
          overflowY: "hidden"
        }); 
        gsap.to(panelCloseRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power3.inOut"
        });
   }
  }, [panel]
    
  );
  const SumbitHandler = (e) => {
    e.preventDefault();

  }
  return (
    <div className='h-screen  relative'>
       <img
        className="w-16  absolute top-5 left-5"
        src="https://imgs.search.brave.com/z3WiIOauTbGDJBvlN9ZoxU6nohyibvEsMM-wW-etxes/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTIwMTYtMjAxOC03/MDB4Mzk0LnBuZw"
        alt="Uber Logo"
      />
      <div className='h-screen w-screen'>
       {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://t3.ftcdn.net/jpg/07/28/30/26/240_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg"
          alt="Home Background"  />
      </div>
      <div className=' flex flex-col justify-end absolute h-screen top-0 w-full '>
       <div className='h-[30%] p-6 bg-white relative'> 
       <h5 ref={panelCloseRef} onClick={()=>{
        setPanel(false)
       }} className='absolute top-3 opacity-0 right-3 text-gray-500 text-2xl font-bold'> 
        <i className="ri-arrow-down-double-line"></i>
        </h5>
            <h4 className='text-2xl font-semibold'>Find a Trip</h4>
        <form onSubmit={(e)=>{
          SumbitHandler(e)
        }}>
          <div className='line absolute h-15 w-1 top-1/2 left-10 bg-gray-900 rounded-full'> </div>
          <input
           onClick={() => {setPanel(true)}}
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="bg-[#eee] rounded-lg px-12 py-2 mt-5 w-full text-base placeholder:text-base"
            placeholder="Enter your destination"
            required
          />
           <input
            type="text"
            onClick={() => {setPanel(true)} } 
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="bg-[#eee] rounded-lg px-12  mt-3 py-2  w-full text-base placeholder:text-base"
            placeholder="Enter your pickup location"
            required
          />

          </form>
          </div>
          <div ref={panelRef} className='h-[0] opacity-0 bg-white '>
               <LocationSearchPanel />
          </div>
   
      </div>
      <div className='fixed w-full z-20 bottom-0 translate-y-full bg-white px-3 py-8'>
        <h3 className='text-xl font-semibold mb-5'>Select a ride</h3>
      <div className="flex w-full items-center justify-between p-3 mb-2 ml-1 rounded-2xl border-2 border-transparent active:border-black">          
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
       <div className="flex w-full items-center justify-between p-3 mb-2 ml-1 rounded-2xl border-2 border-transparent active:border-black">               
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
      <div className="flex w-full items-center justify-between p-3 mb-2 ml-1  rounded-2xl border-2 border-transparent active:border-black">               
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
    </div>
  )
}

export default Home