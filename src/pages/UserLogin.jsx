import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function UserLogin() {
   const [email,setEmail]= useState('')
    const [password,setPassword]= useState('') 
    const [userData,setUserData]= useState({})

    const handleLogin = (e) => {
        e.preventDefault();
        setUserData({
            email: email,   
            password: password  
        });
        
        setEmail('');       
        setPassword('');
    };
  return (
    <div className='p-7  h-screen flex flex-col justify-between'>
       <div>
         <img
        className="w-16 mb-9 "
        src="https://imgs.search.brave.com/z3WiIOauTbGDJBvlN9ZoxU6nohyibvEsMM-wW-etxes/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTIwMTYtMjAxOC03/MDB4Mzk0LnBuZw"
        alt="Uber Logo"
      />
     <form onSubmit={(e)=>{handleLogin(e)}}>
        <h3 className='text-lg  font-medium mb-2'>
            What's your email
        </h3>
        <input type="email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        placeholder="email@example.com" 
        required 
        />
        <h3 className='text-lg font-medium mb-2'>
            What's your password
        </h3>
        <input type="password"
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         placeholder="Enter your password" 
         required 
         />
        <button className='bg-[#111]  text-white font-bold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'
 type="Login">Login</button>
     </form>
         <p className='text-center'>New here? <Link className='text-blue-600' to={"/user-signup"}>Create a new Account</Link></p>

       </div>
       <div>
        <Link to="/captain-login" className='bg-[#10b461] flex items-center justify-center  text-white font-bold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
       </div>
    </div>
  )
}

export default UserLogin