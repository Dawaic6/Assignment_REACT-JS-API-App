//Cedric IRADUKUNDA SANGWA
import React, { useState } from "react";
import axios from "axios";

const Authentication = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://api.example.com/login', { username, password });
      setToken(response.data.token);
      // Save the token securely (e.g., in localStorage)
    } catch (error) {
      console.error('Login Failed', error);
    }
  };

  const handleLogout = () => {
    setToken('');
    // Clear saved token
  };

  return (
    <div>
      <h2>Authentication</h2>
      {token ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Authentication;


