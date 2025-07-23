import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../context/Usercontext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem("token");
    const { user } = useContext(UserDataContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); // To handle async check

    useEffect(() => {
        const verifyToken = async () => {
            if (!token) {
                navigate('/user-login');
                return;
            }

            try {
                const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/verify-token`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setLoading(false); // Token is valid
            } catch (err) {
                console.error("Token verification failed", err);
                localStorage.removeItem("token"); // Clear invalid token
                navigate('/user-login'); // Redirect
            }
        };

        verifyToken();
    }, [token, navigate]);

    if (loading) return null; // Optional: add spinner if needed

    return <>{children}</>;
};

export default UserProtectedWrapper;
