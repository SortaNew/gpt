import React, {useState} from 'react'

import { Brand, CTA, Navbar } from './components';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers' 
import './App.css'

const App = () => {

  const [toggleDark, setToggleDark] = useState(false);

  const toggleDarkMode = () => {
    setToggleDark(!toggleDark)
  }

  

  return (
    <div className="App">
      <div className={toggleDark ? 'lg' : 'gradient__bg'}>
        <Navbar/>
        <button onClick={toggleDarkMode}>
              {toggleDark ? 'Gradient' : 'Dark Mode'}
        </button>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App