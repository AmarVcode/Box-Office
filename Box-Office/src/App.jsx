import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Home from './components/home';
import Error from './components/error';
import Navbar from './components/navbar'

function App() {

  return (
  <div>

   <Navbar />
   <BrowserRouter>
   <Routes>
<Route path='/' element={<Home />} />
<Route path='*' element={<Error />} />
   </Routes>
   </BrowserRouter>
  </div>
  )
}

export default App
