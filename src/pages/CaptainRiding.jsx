import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import FinishRIde from '../components/FinishRIde';
const CaptainRiding = () => {
  const [finishridePopPanel,setFinishridePopPanel]=useState(false);
  const finishridePopPanelRef=useRef(null);
   useGSAP(
    function () {
      if(finishridePopPanel) {
        gsap.to(finishridePopPanelRef.current, {
         transform: "translateY(0)",
          duration: 0.5,
          ease: "power3.inOut",
          opacity: 1,   
        })
      }else {  
        gsap.to(finishridePopPanelRef.current, {
          transform: "translateY(100%)",
          duration: 0.5,
          ease: "power3.inOut",
          opacity: 0,
        }); 
      }
    }, [finishridePopPanel]
  ); 
  return (
   <div className='h-screen'> 
   
    <div className='fixed  p-6 top-0 flex items-center justify-between w-screen'>
       <img
        className="w-16 "
        src="https://imgs.search.brave.com/z3WiIOauTbGDJBvlN9ZoxU6nohyibvEsMM-wW-etxes/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTIwMTYtMjAxOC03/MDB4Mzk0LnBuZw"
        alt="Uber Logo"
      />
     <Link to={'/captain-home'} className=' h-10  w-10 bg-white flex items-center justify-center rounded-full'>
         <i className="text-lg ri-logout-box-r-line"></i>
     </Link>
     </div> 
        <div className='h-4/5'>

             <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Home Background"  />
        </div>
        <div className='h-1/5 p-6 bg-yellow-500 flex justify-between relative items-center'
       >

             <h4 className='text-xl font-semibold'>4 km away</h4>
             <button onClick={()=>setFinishridePopPanel(true)} className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg '>Complte Ride </button>
        </div>
            <div ref={finishridePopPanelRef} className='fixed w-full z-20 bottom-0 translate-y-full bg-white px-3 py-9 pt-12'>
              <FinishRIde setFinishridePopPanel={setFinishridePopPanel} />
      </div> 
    </div>
   
  )
}

export default CaptainRiding