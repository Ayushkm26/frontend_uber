import React, { use, useRef } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panel, setPanel] = useState(false);
   const panelRef =useRef(null);
   const panelCloseRef=useRef(null);
   const vechileFoundRef=useRef(null)
   const ConfirmRidePanelref = useRef(null);
    const vechilePanelref=useRef(null);
    const WaitingForDriverRef=useRef(null)
   const [vechilePanel, setVechilePanel] = useState(false);
    const [ConfirmRidePanel, setConfirmRidePanel] = useState(false);
    const [vechileFound, setVechileFound] = useState(false);
    const [watingForDriver, setwatingForDriver] = useState(false);

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
  useGSAP(
    function () {
      if(vechilePanel) {
        gsap.to(vechilePanelref.current, {
         transform: "translateY(0)",
          duration: 0.5,
          ease: "power3.inOut",
          opacity: 1,   
        })
      }else {  
        gsap.to(vechilePanelref.current, {
          transform: "translateY(100%)",
          duration: 0.5,
          ease: "power3.inOut",
          opacity: 0,
        }); 
      }
    }, [vechilePanel]
  );  
    useGSAP(
    function () {
      if(ConfirmRidePanel) {
        gsap.to(ConfirmRidePanelref.current, {
         transform: "translateY(0)",
          duration: 0.5,
          ease: "power3.inOut",
          opacity: 1,   
        })
      }else {  
        gsap.to(ConfirmRidePanelref.current, {
          transform: "translateY(100%)",
          duration: 0.5,
          ease: "power3.inOut",
          opacity: 0,
        }); 
      }
    }, [ConfirmRidePanel]
  );  
    useGSAP(
    function () {
      if(vechileFound) {
        gsap.to(vechileFoundRef.current, {
         transform: "translateY(0)",
          duration: 0.5,
          ease: "power3.inOut",
          opacity: 1,   
        })
      }else {  
        gsap.to(vechileFoundRef.current, {
          transform: "translateY(100%)",
          duration: 0.5,
          ease: "power3.inOut",
          opacity: 0,
        }); 
      }
    }, [vechileFound]
  ); 
    useGSAP(
    function () {
      if(watingForDriver) {
        gsap.to(WaitingForDriverRef.current, {
         transform: "translateY(0)",
          duration: 0.5,
          ease: "power3.inOut",
          opacity: 1,   
        })
      }else {  
        gsap.to(WaitingForDriverRef.current, {
          transform: "translateY(100%)",
          duration: 0.5,
          ease: "power3.inOut",
          opacity: 0,
        }); 
      }
    }, [watingForDriver]
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
      <div  className='h-screen w-screen'>
       {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
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
               <LocationSearchPanel  setPanel={setPanel}  setVechilePanel={setVechilePanel}/>
          </div>
   
      </div>
      <div ref={vechilePanelref} className='fixed w-full z-20 bottom-0 translate-y-full bg-white px-3 py-9 pt-12'>
        <VehiclePanel setVechilePanel={setVechilePanel} setConfirmRidePanel={setConfirmRidePanel}/>
      </div> 
         <div ref={ConfirmRidePanelref} className='fixed w-full z-20 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVechileFound={setVechileFound}/>
      </div> 
      <div  ref={vechileFoundRef} className='fixed w-full z-20 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
           <LookingForDriver setVechileFound={setVechileFound}/>
      </div> 
       <div  ref={WaitingForDriverRef} className='fixed w-full z-20 bottom-0   bg-white px-3 py-6 pt-12'>
           <WaitingForDriver setwatingForDriver={setwatingForDriver}/>
      </div> 
      
      
      
    </div>
  )
}

export default Home