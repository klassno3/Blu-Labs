import { Link } from 'react-scroll'
import { useState } from 'react'
import { useFormik } from "formik";
 import * as Yup from 'yup';
import Logo from '../images/Logo-white.svg'
import { FaMailBulk, FaPhone } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6"
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Input  from './Input'
import Button from './Button'
const Footer = () => {
const [email,setEmail]=useState("")
   const initialValues = {
    _id: new Date().getTime(),
    email: email,
    
   
   
    
  }
  const handleSubmit = (values) => {
    console.log(values)
   
  }
  
  const Schema = Yup.object().shape({

 
});
    const formik = useFormik( {
    initialValues,
    validationSchema: Schema,
    onSubmit: handleSubmit
    
  } );
  return (

    <div className='bg-primary-300 py-5  mt-16 md:mt-28'>
      <div className="w-11/12 max-w-[1440px] md:w-10jbjjh1/12 mx-auto text-sm sm:text-base ">
        <Link to="home" activeClass="current" smooth={ true } offset={ -150 } className='cursor-pointer'>
          <img className='pt-3 w-20 md:w-28' src={ Logo } alt="" />
        </Link>
        <div className="flex flex-col my-5">
          
          <div className="grid grid-col-1 md:grid-cols-2 gap-6  ">
            <div className="flex flex-col font-light gap-2 md:gap-3 ">
              <p className=" font-poppins text-secondary-200 md:w-10/12">
             Elevate Your Experience: Seamless, Intuitive Software at Your Fingertips!
              </p>
              <div className="flex flex-col gap-2">
                <a href = "mailto:support@bluelabs.net" target="_blank" rel="noopener noreferrer" className="flex w-max items-center gap-2 font-poppins  text-secondary-200">
                  <FaMailBulk />
                  <p  className="">support@bluelabs.net</p>
                </a>
                <a href="https://maps.app.goo.gl/R1MexHMnpyXvxq2u8" target="_blank" rel="noopener noreferrer" className="flex w-max bg-red-100 items-center gap-2 font-poppins  text-secondary-200">
                  <FaLocationDot />
                  <p className="">Bole, sub city, 22 Festival 22 Building, #401</p>
                </a>
                <a href="tel:0908555657" target="_blank" rel="noopener noreferrer" className="flex  w-max items-center gap-2 font-poppins  text-secondary-200">
                  <FaPhone />
                  <p className="">+251908555657</p>
                </a>
              </div>
                 {/* add social medial links   */}
        <div className="flex gap-4  text-secondary-200">
            <a href="https://blu-labs-company.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-all duration-300"><FaFacebook size={25}/></a>
            <a href="https://blu-labs-company.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-all duration-300"><FaInstagram  size={25}/></a>
            <a href="https://blu-labs-company.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-all duration-300"><FaLinkedin  size={25}/></a>
          </div>
            </div>
            <div className=''>

            
            <div className="flex flex-col lg:items-end   ">
                <div className="flex w-9/12 sm:w-8/12 md:w-full xl:w-9/12 flex-col gap-4 ">
                  <div className="flex flex-col gap-3">

                <h5 className="text-secondary-200 text-base md:text-xl font-semibold">Sign up for Our New Letter</h5>

              <Input
                
                type="text"
                
                placeHolder="example@gmail.com"
                require={ true }
                name="email"
                value={ formik.values.email }
                error={ formik.touched.email && formik.errors.email }
                onBlur={ formik.handleBlur }
                onChange={ ( e ) => {
                  formik.handleChange( e );
                  setEmail( e.target.value );
                } }
                />
               
                <Button  type="submit"
                  handleClick={ handleSubmit }
                  small color="tertiary"
                  >
               Submit
              </Button>
                
                    </div>
            <div className="inline-flex font-light  text-secondary-200 flex-col sm:flex-row font-poppins lg:items-center  text-sm lg:text-base gap-3 lg:gap-4">
              <Link to="home" offset={ -150 } activeClass="currently" smooth={ true } className="hover:underline  transition-all duration-500 cursor-pointer">Home</Link>
              <Link to="about" offset={ -150 } activeClass="currently" smooth={ true } className="hover:underline  transition-all duration-500 cursor-pointer">About Us</Link>
              <Link  to="services"offset={-150}  activeClass="currently" smooth={ true }   className=" hover:underline transition-all duration-500  cursor-pointer">Services</Link>
              <Link  to="portfolio"offset={-150}  activeClass="currently" smooth={ true }   className=" hover:underline transition-all duration-500  cursor-pointer">Our Portfolio</Link>
              <Link  to="contact"offset={-150}  activeClass="currently" smooth={ true }   className=" hover:underline transition-all duration-500  cursor-pointer">Contact us</Link>
            </div>
                </div>
            </div>
          </div>
            </div>
          <div className="flex flex-col mt-5 items-center gap-5 justify-center mx-auto ">
            <p className="font-light text-secondary-200 font-poppins ">&copy;All rights Reserved 2023</p>
         
           
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Footer
