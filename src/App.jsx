import { useState } from 'react'
import injectContext from './store/Appcontext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Pages/Home'
import Navbar from './components/Home/Navbar'
import Login from './components/Pages/Login'
import Signup from './components/Pages/Signup'
import Notfound from './components/Pages/Notfound'
import Store from './components/Pages/Store'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/signin" element={<Login  />} />
        <Route path="/signup" element={<Signup  />} />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default injectContext(App)
