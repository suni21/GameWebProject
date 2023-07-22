// import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [cred, setCred] = useState({});

  const users = [
    {
      mail: "suniti@gmail.com",
      password: "123456",
    },
    {
      mail: "abc@gmail.com",
      password: "123456",
    },
  ];

  const handleLogin = (e) => {
    const credentialsMatched = users.find((item) => {
      return item.mail === cred?.email && item?.password === cred?.password;
    });
    if (credentialsMatched) {
      localStorage?.setItem("authToken", "dummyToken");
      navigate("/Home");
    }
  }

  const handleChange = (e) => {
    setCred({
      ...cred,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container">
      <input 
        className="input-field"
        onChange={handleChange} 
        value={cred?.email} 
        name="email" 
        placeholder="Enter Email" 
      />
      <input 
        className="input-field"
        onChange={handleChange} 
        value={cred?.password} 
        name="password" 
        type="password"
        placeholder="Enter Password"
      />
      <button 
        className="login-button"
        onClick={handleLogin}
      >
        Login
      </button>
      {
        users[0].name
      }
    </div>
  );
};

export default Login;