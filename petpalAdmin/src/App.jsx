import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminLogin from './Pages/AdminLogin'
import AddCategory from './Pages/AddCategory'
import ViewCategories from './Pages/ViewCategories'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AdminLogin/>
      <AddCategory/>
      <ViewCategories/>
    </>
  )
}

export default App
