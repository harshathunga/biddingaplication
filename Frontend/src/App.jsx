import { useState } from 'react'

import './App.css'
import Login from './pages/Login.jsx'
import MyProducts from './pages/MyProducts.jsx'
import AllProducts from './pages/AllProducts.jsx'
import Check from './pages/Check.jsx'
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
            <Route path="/" element={<AllProducts></AllProducts>}></Route>
            <Route path="/myproducts" element={<MyProducts></MyProducts>}></Route>

            <Route path="/check/:id" element={<Check></Check>}></Route>
            <Route path="*" element={<div className='flex align-center justify-center mt-10 text-3xl font-bold'>NO ROUTES 404</div>}></Route>
    
          </Routes>
        {/* </Router> */  }
      {/* </Layout> */}
    </BrowserRouter>
    
  )
}

export default App
