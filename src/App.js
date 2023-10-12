import React from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className=''>
   
      <Navigation />
      <Home />
      <AboutUs />
      <Services />
      <Portfolio />
      <Contact/>
    </div>
  )
}

export default App
