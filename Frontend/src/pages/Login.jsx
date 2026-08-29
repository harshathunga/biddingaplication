import React, { useState } from 'react'
import {apilogin} from '../Api/Authapi.js'
function Login() {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

    const handleSubmit = async(data) => {
        const response = await apilogin(data);
        console.log(response);
    }

  return (

    
    <div>

      <input
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            type="email"
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
    </div>
  )
}

export default Login
