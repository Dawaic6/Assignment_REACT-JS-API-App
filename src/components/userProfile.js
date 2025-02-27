//src/components/userProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const UserProfile = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('https://api.example.com/user/${userId}');
                setUser(response.data);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchUser();
    },[userId]);
    return (
        <div>
            {user ? (
                <div>
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Loading User data....</p>
            )}
        </div>
    );
}
export default UserProfile;