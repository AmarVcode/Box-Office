import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
