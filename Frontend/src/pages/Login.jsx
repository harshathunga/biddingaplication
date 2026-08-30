import React, { useState } from 'react'
import bgimages from '../assets/images.jpg'
import "../App.css";
import { useNavigate } from "react-router-dom";

import {apilogin,regitserapi} from '../Api/Authapi.js'
function Login() {

  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [RegisterData, setRegisterData] = useState({
    username:"",
    email: "",
    password: ""
  });
  const [tab, setTab] = useState(true);

    const handleSubmit = async(data) => {

      const response = await apilogin(data);

      setLoginData({
        email: "",
        password: ""
      });
      alert(response.message);

      navigate("/products")


    }

    const handleRegistrationSubmit = async(data) => {

      const response = await regitserapi(data);

      console.log(response)

      setRegisterData({
        username:"",
        email: "",
        password: ""
      });
      alert(response.message);


    }

  return ( 
    <div className="flex bg-grey-500 items-center justify-center min-h-screen ">

      <div className ="  h-full w-1/2 bg-cover bg-center p-5">
        
        <img src= {bgimages} className='w-full h-full object-cover'></img>

      </div>

      <div className = "w-1/2 p-8" >

        <div className='flex'>
          <button onClick={()=> setTab(!tab)} className={`p-5 rounded-xl m-3 ${tab ==true ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}>Login</button>
          <button onClick={()=> setTab(!tab)} className={`p-5 m-3 rounded-xl ${!tab  ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}>Register</button>
        </div>
        {tab ? (<div > 
        <input
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            type="text"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-blue-400"
          />
          <input
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-blue-400"
          />
      <button onClick={() => handleSubmit(loginData)}>
        click me
      </button>
      </div>): (<div>
        <input
            value={RegisterData.username}
            onChange={(e) => setRegisterData({ ...RegisterData, username: e.target.value })}
            type="text"
            placeholder="Username"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-blue-400"
          />
        <input
            value={RegisterData.email}
            onChange={(e) => setRegisterData({ ...RegisterData, email: e.target.value })}
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-blue-400"
          />
          <input
            value={RegisterData.password}
            onChange={(e) => setRegisterData({ ...RegisterData, password: e.target.value })}
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-blue-400"
          />
      <button onClick={() => handleRegistrationSubmit(RegisterData)}>
        click me
      </button>
      </div>)}
        
      </div>

      

      
    </div>
  )
}

export default Login
