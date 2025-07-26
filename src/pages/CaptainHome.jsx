import React from 'react'
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidesPopup from '../components/RidesPopup';
import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidesPopup from '../components/ConfirmRidesPopup';
function CaptainHome() {
  const [ridePopPanel,setridePopPanel]=useState(true);
  const ridePopPanelRef = useRef(null);
  const confirmRidePopPanelRef = useRef(null);


  const [confirmRidePopPanel, setConfirmRidePopPanel] = useState(false);
  
   useGSAP(
    function () {
      if(ridePopPanel) {
        gsap.to(ridePopPanelRef.current, {
         transform: "translateY(0)",
          duration: 0.5,
          ease: "power3.inOut",
          opacity: 1,   
        })
      }else {  
        gsap.to(ridePopPanelRef.current, {
          transform: "translateY(100%)",
          duration: 0.5,
          ease: "power3.inOut",
          opacity: 0,
        }); 
      }
    }, [ridePopPanel]
  ); 
     useGSAP(
    function () {
      if(confirmRidePopPanel) {
        gsap.to(confirmRidePopPanelRef.current, {
         transform: "translateY(0)",
          duration: 0.5,
          ease: "power3.inOut",
          opacity: 1,   
        })
      }else {  
        gsap.to(confirmRidePopPanelRef.current, {
          transform: "translateY(100%)",
          duration: 0.5,
          ease: "power3.inOut",
          opacity: 0,
        }); 
      }
    }, [confirmRidePopPanel]
  ); 

  return (
  <div className='h-screen'> 
    <div className='fixed  p-6 top-0 flex items-center justify-between w-screen'>
       <img
        className="w-16 "
        src="https://imgs.search.brave.com/z3WiIOauTbGDJBvlN9ZoxU6nohyibvEsMM-wW-etxes/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTIwMTYtMjAxOC03/MDB4Mzk0LnBuZw"
        alt="Uber Logo"
      />
     <Link to={'/home'} className=' h-10  w-10 bg-white flex items-center justify-center rounded-full'>
         <i className="text-lg ri-logout-box-r-line"></i>
     </Link>
     </div> 
        <div className='h-3/5'>
             <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Home Background"  />
        </div>
        <div className='h-2/5 p-6'>
           <CaptainDetails />
        </div>
    <div ref={ridePopPanelRef} className='fixed w-full z-20 bottom-0 translate-y-full bg-white px-3 py-9 pt-12'>
            <RidesPopup setConfirmRidePopPanel={setConfirmRidePopPanel} confirmRidePopPanel={confirmRidePopPanel} setridePopPanel={setridePopPanel} />
      </div> 
       <div ref={confirmRidePopPanelRef} className='fixed w-full h-screen z-20 bottom-0 translate-y-full bg-white px-3 py-9 pt-12'>
            <ConfirmRidesPopup setConfirmRidePopPanel={setConfirmRidePopPanel} setridePopPanel={setridePopPanel} />
      </div>
    </div>
   
  )
}

export default CaptainHome