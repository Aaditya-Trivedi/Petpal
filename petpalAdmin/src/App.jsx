import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminLogin from './Pages/AdminLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AdminLogin/>
    </>
  )
}

export default App
