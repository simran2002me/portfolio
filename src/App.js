import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Skills from './Components/Skills/Skills'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
    </div>
  )
}

export default App
