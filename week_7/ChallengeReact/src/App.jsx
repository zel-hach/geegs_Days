import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Components/Header'
import About from './Components/About'
import Cards from './Components/Cards'
import Contact from './Components/Contact'

function App() {
  
  return (
    <div className='w-full h-screen grid gap-10'>
      <Header></Header>
      <About></About>
      <Cards></Cards>
      <Contact></Contact>
    </div>
  )
}

export default App
