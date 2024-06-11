import { useState } from 'react'
import injectContext from './store/Appcontext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Pages/Home'
import Navbar from './components/Home/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home  />} />
      </Routes>
    </BrowserRouter>
  )
}

export default injectContext(App)
