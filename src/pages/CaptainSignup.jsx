import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {CaptainDataContext} from '../context/CaptainContex';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CaptainSignup() {
  const navigate = useNavigate();
  
  const [FirstName, setFirstName] = useState('')
   const [LastName, setLastName] = useState('')
   const [userData, setUserData] = useState({})
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')  
   const [vehicleColor, setVehicleColor] = useState('')
   const [vehiclePlate, setVehiclePlate] = useState('')
   const [vehicleType, setVehicleType] = useState('')
   const [vehicleCapacity, setVehicleCapacity] = useState('')



  const {captain,setCaptain} = useContext(CaptainDataContext);
   const handleLogin = async(e) => {  
     e.preventDefault();    
    const captainData= {
       fullname: {
         firstname: FirstName,
         lastname: LastName  
       } ,
       email: email,
       password: password,
        vehicle: {
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
          vehicleType: vehicleType
          
        }
     };
      console.log("Captain Data:", captainData);
     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
     if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      console.log("Captain registered successfully:", data.token);
      localStorage.setItem('token', data.token);  
      navigate('/captain-home');
     }

     console.log("User Data:", captainData);
      setEmail('');       
     setPassword('');
     setFirstName('');
     setLastName('');
      setVehicleColor('');
      setVehiclePlate('');
      setVehicleType('');
      setVehicleCapacity('');
   }
  return (
      <div className='py-5 px-5  h-screen flex flex-col justify-between'>
          <div>
            <img
           className="w-16 mb-7"
           src="https://imgs.search.brave.com/cykZ27VRScThHwy8RGxrj9c1g3kAPOiXNfIPS4mdXeU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1FbWJs/ZW0tNzAweDM5NC5w/bmc"
           alt="Uber Logo"
         />
        <form onSubmit={(e)=>{handleLogin(e)}}>
         <h3 className='text-base font-medium mb-1'> Whats's our Captain Name</h3>
         <div className='flex gap-4 mb-3'>
            <input type="text" 
           required 
           className='bg-[#eeeeee] w-1/2  rounded px-4 py-2  text-lg placeholder:text-sm'
           placeholder="Enter Firstname" 
           value={FirstName}
           onChange={(e)=>setFirstName(e.target.value)}
           />
            <input type="text" 
            value={LastName}
           onChange={(e)=>setLastName(e.target.value)}
           className='bg-[#eeeeee]   w-1/2 rounded px-4 py-2   text-lg placeholder:text-sm'
           placeholder="Enter Lastname" 
           
           />
         </div>
           <h3 className='text-base  font-medium mb-1'>
               What's our Captain email
           </h3>
           <input type="email" 
           value={email} 
           onChange={(e)=>setEmail(e.target.value)}
           className='bg-[#eeeeee] mb-3 rounded px-4 py-2  w-full text-base placeholder:text-sm'
           placeholder="email@example.com" 
           required 
           />
           <h3 className='text-base font-medium mb-1'>
               What's your password
           </h3>
           <input type="password"
           className='bg-[#eeeeee] mb-3 rounded px-4 py-2  w-full text-base placeholder:text-sm'
           value={password}  
           onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter your password" 
            required 
            />
            <h3 className='text-base font-medium mb-1'>
              Vehicle Information
            </h3>
            <div className='flex gap-4 mb-3'>
              <input
                type="text"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-sm'
                placeholder="Vehicle Color"
                required
              />
              <input
                type="text"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-sm'
                placeholder="Vehicle Plate"
                required
              />
            </div>
            <div className='flex gap-4 mb-5'>
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-sm'
                required
              >
                <option value="" disabled className='text-base font-black'>Select Vehicle Type</option>
                <option value="Car">Car</option>
                <option value="Auto">Auto</option>
                <option value="Motorbike">Motor-bike</option>
              </select>
              <input
                type="number"
                min="1"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-sm'
                placeholder="Capacity"
                required
              />
            </div>
           <button className='bg-[#111]  text-white font-bold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'
    type="Login">Create Captain Account</button>
        </form>
            <p className='text-center'>Already have a account? <Link className='text-blue-600' to={"/captain-login"}>Login here</Link></p>
   
          </div>
          <div>
           <p className='text-[12px] text-gray-500 mb-1 leading-tight'>
            This site is protected by reCAPTCHA and the<span className='underline decoration-blue-500'> Google Privacy </span>Policy and <span className='underline decoration-blue-500'>Terms of Service</span> apply.
           </p>
          </div>
       </div>
  )
}

export default CaptainSignup