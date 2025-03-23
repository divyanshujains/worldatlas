import React from 'react'
import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Country from './pages/Country'

const App = () => {
  return (
    <div>
      
     <Routes>
       <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Country' element={<Country />} />

     </Routes>
    </div>
  )
}

export default App
