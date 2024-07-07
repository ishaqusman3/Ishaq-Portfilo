import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import { Contact } from './Pages/Contact'
import Projects from './Pages/Projects'
import { Header } from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/Contact' element = { <Contact />}/>
          <Route path='/Projects' element = { <Projects />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  
    </>
  )
}

export default App
