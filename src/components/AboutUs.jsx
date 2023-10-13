import React, { useState } from 'react'
import About from "../images/Business Plan-rafiki.svg"
import {FaEye} from 'react-icons/fa'

const AboutUs = () => {
  const [ isOpen, setIsOpen ] = useState( false );
 
  return (
    <div>

    <div className='about max-w-[1440px]   w-11/12 mx-auto '>
  <div className='bg-secondary-100 pb-7 md:pb-12'>
       <div className="flex flex-col lg:flex-row pt-8 md:pt-16  lg:items-start gap-12 lg:justify-between">
          <div
        
          className="lg:w-1/2 md:w-3/4 mx-auto lg:flex hidden items-center  justify-center  lg:justify-start">
          <img src={ About } alt="" className="w-9/12" />
        </div>  
        <div
        
          className="lg:w-1/2 flex flex-col items-start gap-8">
          <div className="flex flex-col items-start gap-2 md:gap-3">
          <h1 className="text-lg uppercase md:text-3xl font-inter font-semibold text-primary-300">About Us</h1>

            <p className="text-tertiary-100 text-left font-poppins text-sm md:text-base ">
                  Blu Labs PLC is a software development company established in November 2022.
                  We have created several web applications, including &nbsp;
                     <a href='https://enkugifts.pythonanywhere.com' target="_blank" rel="noopener noreferrer" className='text-primary-200 cursor-pointer'>
             diyethiopia.com, &nbsp;
          </a>
                     <a href='https://www.diyethiopia.com' target="_blank" rel="noopener noreferrer" className='text-primary-200 cursor-pointer'>
             enkugifts.com,&nbsp;
          </a>
                     <a href='https://www.isms.et/' target="_blank" rel="noopener noreferrer" className='text-primary-200 cursor-pointer'>
            ismset.com
          </a>
                .
              
                  Diyethiopia.com is an online store specializing in electronics, offering a wide range of electronic, mechanical, and electro-mechanical materials and services. These services include 3D printing, PCB production, and electro-mechanical design. The website is fully operational, and customers are actively purchasing tools, materials and utilizing services.
              </p>
              <div className={`${isOpen ? "flex" : "hidden"} text-tertiary-100 font-poppins text-sm md:text-base `}>

              <p>
                Blu Labs specializes in custom software development, creating tailored solutions to address specific business requirements.We provides consulting and advisory services to assist clients in making informed decisions regarding their software development projects and develops mobile applications for both iOS and Android platforms. These apps are designed to provide intuitive and engaging user experiences.

              </p>
              </div>
              <button onClick={()=>setIsOpen(!isOpen)} className='text-primary-200 hover:underline uppercase font-inter flex gap-2 items-center'>
                <span>{isOpen ? "Show Less" :" Show More"} </span>
                <FaEye />
              </button>
          </div>
       
        </div>

      
      </div>
      </div>
      </div>
      <div className=" bg-primary-300 py-10 ">

      <div className="flex flex-col gap-7 md:gap-10 max-w-[1440px]  w-11/12 mx-auto  lg:flex-row justify-center">
          <div className="w-full  mx-auto sm:w-3/4 rounded shadow-md bg-secondary-200 p-5 lg:w-1/3">
            <div className="flex flex-col gap-2 items-center">

          <h3 className="text-lg uppercase md:text-2xl font-inter font-semibold text-primary-300">Vission</h3>
              <p className=" text-tertiary-100/80 text-center  font-poppins text-sm lg:text-base ">
To be a leading software development company that delivers innovative and customized solutions to meet the evolving needs of businesses and individuals.           </p>
            </div>
</div>
          <div className="w-full  mx-auto sm:w-3/4 rounded shadow-md bg-secondary-200 p-5 lg:w-1/3">
            <div className="flex flex-col gap-2 items-center">

          <h3 className="text-lg uppercase md:text-2xl font-inter font-semibold text-primary-300">Mission</h3>
              <p className=" text-tertiary-100/80 text-center  font-poppins text-sm lg:text-base ">
Blu Labs PLC is dedicated to providing cutting-edge software development services and solutions to help businesses thrive in the digital era.    </p>
            </div>
</div>
          <div className="w-full  mx-auto sm:w-3/4 rounded shadow-md bg-secondary-200 p-5 lg:w-1/3">
            <div className="flex flex-col gap-2 items-center">

          <h3 className="text-lg uppercase md:text-2xl font-inter font-semibold text-primary-300">Value</h3>
              <p className=" text-tertiary-100/80 text-center  font-poppins text-sm lg:text-base ">
                We embrace creativity and constantly seek innovative solutions to address complex business challenges.We are committed to delivering high-quality software development services that meet the highest industry standards.
              </p>
            </div>
</div>
      </div>
    </div>
      </div>
  )
}

export default AboutUs
