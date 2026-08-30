import { useState } from 'react'

import './App.css'
import Login from './pages/Login.jsx'
import Products from './pages/Products.jsx'
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
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/products" element={<Products></Products>}></Route>
    
          </Routes>
        {/* </Router> */  }
      {/* </Layout> */}
    </BrowserRouter>
    
  )
}

export default App
