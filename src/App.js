import React from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from "./components/Footer"
import Testimonial from './components/Testimonial'
const App = () => {
  return (
    <div className=''>
   
      <Navigation />
      <Home />
      <AboutUs />
      <Services />
      <Portfolio />
      {/* <Testimonial/> */}
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
