import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {CaptainDataContext} from '../context/CaptainContex';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CaptainLogin() {
       const [email,setEmail]= useState('')
        const [password,setPassword]= useState('') 
        const [captainData,setcaptainData]= useState({})
        const {captain,setCaptain} = useContext(CaptainDataContext);
        const navigate = useNavigate();
        const handleLogin = async(e) => {
            e.preventDefault();
            const loginData = {
                email: email,   
                password: password  
            };
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, loginData);
            if (response.status === 200) {
                const data = response.data;
                setCaptain(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/captain-home');
            } else {
                console.error("Login failed:", response.data.message);
            }
            setEmail('');       
            setPassword('');
        };

  return (
    <div className='p-7  h-screen flex flex-col justify-between'>
       <div>
         <img
        className="w-20 mb-9 "
        src="https://imgs.search.brave.com/cykZ27VRScThHwy8RGxrj9c1g3kAPOiXNfIPS4mdXeU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1FbWJs/ZW0tNzAweDM5NC5w/bmc"
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
         <p className='text-center'>Join a fleet? <Link className='text-blue-600' to={"/captain-signup"}>Rigister as a Captain</Link></p>

       </div>
       <div>
        <Link to="/user-login" className='bg-[#d5622d] flex items-center justify-center  text-white font-bold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as User</Link>
       </div>
    </div>
  )
}

export default CaptainLogin