import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router';
import './App.css'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import Gallery from './pages/Gallery'
import AddPet from './pages/AddPet';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/AddPet" element={<AddPet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/AdminDash" element={<AdminDash />} /> */}


      </Routes>
      {/* <Register /> */}

      {/* <Login /> */}
      {/* <Gallery /> */}

    </>
  )
}

export default App
