import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function UserSignup() {
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
     <div className='p-7  h-screen flex flex-col justify-between'>
       <div>
         <img
        className="w-16 mb-9 "
        src="https://imgs.search.brave.com/z3WiIOauTbGDJBvlN9ZoxU6nohyibvEsMM-wW-etxes/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTIwMTYtMjAxOC03/MDB4Mzk0LnBuZw"
        alt="Uber Logo"
      />
     <form onSubmit={(e)=>{handleLogin(e)}}>
      <h3 className='text-base font-medium mb-2'> Whats's your Name</h3>
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
            What's your email
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
         <p className='text-center'>Already have a account? <Link className='text-blue-600' to={"/user-login"}>Login here</Link></p>

       </div>
       <div>
        <p className='text-[12px] text-gray-500 mb-1 leading-tight'>
          By processing, you agree to get calls and messages, including autodialed and pre-recorded calls, from Uber and its affiliates to the number you provided. 
        </p>
       </div>
    </div>
  )
}

export default UserSignup