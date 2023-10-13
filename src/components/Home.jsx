import React from 'react'
import { Link } from 'react-scroll'
import Hero from "../images/Business Plan-bro (11).svg"
import Button from './Button'
import { motion } from "framer-motion"
const Home = () => {
   const leftAnimate = {
    offScreen:{x:-100},
    onScreen: {
      x:0,
     transition :{ 
              type: "spring",
              duration:2,
            } }
  }
   const rightAnimate = {
    offScreen:{x:100},
    onScreen: {
      x:0,
     transition :{ 
              type: "spring",
              duration:2,
            } }
  }
  return (
    <motion.div
     transition={ {staggerChildren:0.1} }
            initial={"offScreen"}
            animate={"onScreen" }
      className='home bg-secondary-200 pb-20'>
       <div className="flex flex-col lg:flex-row pt-8 md:pt-28 max-w-[1440px]  w-11/12 mx-auto  gap-12 lg:justify-between">
        
        <motion.div variants={leftAnimate}
        
          className="mt-32  lg:w-1/2 flex flex-col items-center lg:items-start gap-8">
          <div className="flex flex-col items-center lg:items-start gap-5">

          <h1 className=" text-4xl md:text-5xl font-inter font-semibold text-primary-300">BLU LABS</h1>
            <p className="text-tertiary-100 text-center lg:text-left font-poppins text-sm md:text-lg ">
           We prioritize the development of software applications that are easy to use
 and provide a positive user experience. Our team conducts comprehensive
 testing and quality assurance procedures to guarantee that our software adheres to the highest standards in terms of performance, security, and functionality.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center   gap-5 md:gap-10">

              <Link to='contact' smooth={ true } offset={-150}>

              <Button color="primary" >
            Get In Touch
              </Button>
              </Link>
                <Link to='about' smooth={ true } offset={-150}>
              <Button icon  color="secondary">
               Learn more
              </Button>
              </Link>
          </div>
        </motion.div>

        <motion.div
        variants={rightAnimate}
          className="lg:w-1/2 md:w-3/4 flex items-center mx-auto  justify-center lg:items-end lg:justify-end">
          <img src={ Hero } alt="" className="w-9/12" />
        </motion.div>  
      </div>
    </motion.div>
  )
}

export default Home
