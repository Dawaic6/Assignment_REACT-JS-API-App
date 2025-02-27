import React, { useState } from "react";

const FormValidation = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErrors(['Username and password are required']);
      return;
    }
    // perform form submission logic, e.g. send data to API
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  return (
    <div>
      <h2>Form Validation</h2>
      {errors.length > 0 && <p style={{ color: 'red' }}>{errors[0]}</p>}
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;