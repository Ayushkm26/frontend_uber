import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/Usercontext';
function CaptainProtectedWrarapper({children}) {
    
    const token = localStorage.getItem("token");
    const { user } = useContext(UserDataContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); // To handle async check

    useEffect(() => {
        const verifyToken = async () => {
            if (!token) {
                navigate('/captain-login');
                return;
            }

            try {
                const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/verify-token`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setLoading(false); // Token is valid
            } catch (err) {
                console.error("Token verification failed", err);
                localStorage.removeItem("token"); // Clear invalid token
                navigate('/captain-login'); // Redirect
            }
        };

        verifyToken();
    }, [token, navigate]);

    if (loading) return <div>Loading -----</div>; // Optional: add spinner if needed

    return <>{children}</>;
};
 

export default CaptainProtectedWrarapper