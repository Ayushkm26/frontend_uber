import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CaptainSignup() {
  const [FirstName, setFirstName] = useState('')
   const [LastName, setLastName] = useState('')
   const [userData, setUserData] = useState({})
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')  
   const handleLogin = (e) => {  
     e.preventDefault();
     console.log("User signed up with email:", email);
     setEmail('');       
     setPassword('');
     setFirstName('');
     setLastName('');
     setUserData({
       fullName: {
         FirstName: FirstName,
         LastName: LastName  
       } ,
       email: email,
       password: password
     });
     console.log("User Data:", userData);
   }
  return (
      <div className='py-5 px-5  h-screen flex flex-col justify-between'>
          <div>
            <img
           className="w-16 mb-9 "
           src="https://imgs.search.brave.com/cykZ27VRScThHwy8RGxrj9c1g3kAPOiXNfIPS4mdXeU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1FbWJs/ZW0tNzAweDM5NC5w/bmc"
           alt="Uber Logo"
         />
        <form onSubmit={(e)=>{handleLogin(e)}}>
         <h3 className='text-base font-medium mb-2'> Whats's our Captain Name</h3>
         <div className='flex gap-4 mb-5'>
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
           <h3 className='text-base  font-medium mb-2'>
               What's our Captain email
           </h3>
           <input type="email" 
           value={email} 
           onChange={(e)=>setEmail(e.target.value)}
           className='bg-[#eeeeee] mb-6 rounded px-4 py-2  w-full text-base placeholder:text-sm'
           placeholder="email@example.com" 
           required 
           />
           <h3 className='text-base font-medium mb-2'>
               What's your password
           </h3>
           <input type="password"
           className='bg-[#eeeeee] mb-6 rounded px-4 py-2  w-full text-base placeholder:text-sm'
           value={password}  
           onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter your password" 
            required 
            />
           <button className='bg-[#111]  text-white font-bold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'
    type="Login">SignUp</button>
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