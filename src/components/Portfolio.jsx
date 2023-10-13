import React from 'react'
import Enku from "../images/Enku.jpg"
import Diy from "../images/Diy.jpg"
import ISMS from "../images/ISMS.jpg"
import { motion } from "framer-motion"

import Button from './Button'
const Portfolio = () => {
  
  const rightCardAnimate = {
    offScreen: {
      x: 100,
      opacity: 0
    },
    onScreen: {
      x: 0,
      opacity: 1,
     transition :{ 
              type: "spring",
       
              duration:2,
            } }
}
const leftCardAnimate = {
      
    offScreen: {
      x: -100,
      opacity: 0
    },
    onScreen: {
      x: 0,
      opacity: 1,
     transition :{ 
              type: "spring",
       
              duration:2,
            } }
  }
  return (
    <div className='portfolio bg-secondary-200 py-16  md:py-20'>
        <h1 className="text-lg uppercase md:text-3xl pb-5 md:pb-12 mx-auto flex justify-center font-inter font-semibold text-primary-300">Our Portfolio</h1>
      <motion.div
       transition={ { staggerChildren: 0.1 } }
        initial={ "offScreen" }
        whileInView={ "onScreen" }
        viewport={ {
          once: true, amount:.2
        } }  className="grid grid-cols-1 md:grid-cols-2 w-11/12 max-w-[1440px]  sm:w-8/12 md:w-10/12 mx-auto gap-8 md:gap-16">
      
        <motion.div variants={leftCardAnimate} className="flex flex-col items-start shadow-lg   rounded-md bg-white">
         <img  className="h-full rounded-md rounded-b-none"src={Enku} alt="" />
          
          <div className='flex flex-col p-6 items-start gap-6 '>
          <div className='flex flex-col  items-start gap-1 '>
            <h4 className="font-poppins text-tertiary-100 md:text-2xl text-xl">Enku Gift</h4> 
            <p className="font-poppins text-tertiary-100/70 text-sm md:text-base ">

ENKU Gift is an online store where users can explore the selection of products available. Upon successful delivery of your order, we will send you an email to confirm its completion.
            </p>
</div>
          <a href='https://enkugifts.pythonanywhere.com' target="_blank" rel="noopener noreferrer">
          <Button small color="primary" >
            Vist Site
            </Button>
          </a>
          </div>
        </motion.div>
        <motion.div variants={rightCardAnimate} className="flex flex-col  items-start  rounded-md bg-white shadow-lg">
         <img  className=" h-full rounded-md rounded-b-none" src={ISMS} alt="" />
          
          <div className='flex flex-col p-6 items-start gap-6 '>
          <div className='flex flex-col  items-start gap-1 '>
            <h4 className="font-poppins text-tertiary-100 md:text-2xl text-xl">ISMS</h4> 
            <p className="font-poppins text-tertiary-100/70 text-sm md:text-base ">

Ismset.com is a web-based school management system that helps schools manage student, teacher, parent, and staff registration and academic records.            </p>
</div>
          <a href='https://www.isms.et/' target="_blank" rel="noopener noreferrer">
          <Button small color="primary" >
            Vist Site
            </Button>
          </a>
          </div>
        </motion.div>
        <motion.div variants={leftCardAnimate} className="flex flex-col md:flex-row md:col-span-2  md:row-span-1  items-start  rounded-md bg-white shadow-lg">
      <img  className="md:w-1/2 h-full rounded-md md:rounded-r-none md:rounded-t-l-md md:rounded-md rounded-b-none"src={Diy} alt="" />
          
          <div className='flex flex-col p-6 items-start gap-6 '>
          <div className='flex flex-col  items-start gap-1 '>
            <h4 className="font-poppins text-tertiary-100 md:text-2xl text-xl">ISMS</h4> 
            <p className="font-poppins text-tertiary-100/70 text-sm md:text-base ">

Ismset.com is a web-based school management system that helps schools manage student, teacher, parent, and staff registration and academic records.            </p>
</div>
          <a href='https://www.diyethiopia.com' target="_blank" rel="noopener noreferrer">
          <Button small color="primary" >
            Vist Site
            </Button>
          </a>
          </div>
        </motion.div>
    
    </motion.div>
</div>
  )
}

export default Portfolio
