import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            const token = localStorage.getItem('token');

            try {
                if (token) {
                    await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                }
            } catch (error) {
                const errorMsg = error?.response?.data?.message;
                console.error("Logout failed:", errorMsg || error.message);

                // Optional: handle specific blacklist message
                if (errorMsg === "Token is blacklisted") {
                    console.warn("Token was already blacklisted.");
                }
            } finally {
                localStorage.removeItem('token'); // Always remove token
                navigate('/user-login');          // Always redirect
            }
        };

        logoutUser();
    }, [navigate]);

    return <div>Logging out...</div>;
};

export default UserLogout;
