import { useState } from 'react'

import './App.css'
import Login from './pages/Login.jsx'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {


  return (

    <BrowserRouter>
      {/* <Layout> */}
        {/* <Router> */}
          <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
    
          </Routes>
        {/* </Router> */}
      {/* </Layout> */}
    </BrowserRouter>
    // <>
    //  <h1 className="text-3xl font-bold bg-blue-500 text-white p-4">bidding application</h1>
    // </>
  )
}

export default App
