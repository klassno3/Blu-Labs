import React, { useState } from 'react'
import { useFormik } from "formik";
 import * as Yup from 'yup';
import Input from './Input';
import  Button  from './Button';
import TextArea from './TextArea';

import {FaMailBulk,FaPhone} from "react-icons/fa"
import {FaLocationDot} from "react-icons/fa6"
const Contact = () => {
  const [firstName,setFirstName]=useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")
   
    const Schema = Yup.object().shape( {
    firstName: Yup.string().required( "Enter a value for this field." ), 
   message: Yup.string().required( "Enter a value for this field." ), 
    
    email: Yup.string().email( "invalid email" ).required( "Enter a value for this field." ),
    
  
    
  })
    const handleSubmit = (values) => {
    console.log(values)
   
 }
   const formik = useFormik( {
     initialValues : {
    _id: new Date().getTime(),
    firstName: firstName,
    email: email,
    message: message,
   
   
    
  },
    validationSchema: Schema,
    onSubmit: handleSubmit
    
  } );
  return (
     <div id='contact' className='py-20'>
    
      <div className="flex flex-col md:flex-row justify-center gap-8 w-10/12 mx-auto">

        <div className="w-full flex flex-col gap-2 font-poppins">
          <div className="flex flex-col gap-1">

          <h5 className="text-tertiary-100 text-xl md:text-3xl font-semibold">Need additional information?</h5>
         
          <p className="text-tertiary-100/90 w-3/4 font-light text-left font-poppins text-sm md:text-base ">
        Elevate Your Experience: Seamless, Intuitive Software at Your Fingertips!
         
          </p>
          </div>
          <div className="text-tertiary-100  text-left font-poppins text-sm md:text-base ">

          <div className="flex items-center gap-2"><FaMailBulk/><span>support@bluelabs.net</span></div>
          <div className="flex items-center gap-2"><FaLocationDot/><span>Bole, sub city, 22 Festival 22 Building, #401</span></div>
          <div className="flex items-center gap-2"><FaPhone/><span>+251908555657</span></div>
          </div>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
</link>
<ul class="flex">
  <li>
    <a href="#" className="w-10 h-10 bg-white text-center text-gray-900 text-2xl mx-2 block rounded-full flex justify-center items-center relative overflow-hidden border border-white z-10 hover:text-white transform transition duration-500">
      <i class="fab fa-facebook-f icon"></i>
    </a>
  </li>
  <li>
    <a href="#" className="w-10 h-10 bg-white text-center text-gray-900 text-2xl mx-2 block rounded-full flex justify-center items-center relative overflow-hidden border border-white z-10 hover:text-white transform transition duration-500">
      <i class="fab fa-twitter icon"></i>
    </a>
  </li>
  <li>
    <a href="#" className="w-10 h-10 bg-white text-center text-gray-900 text-2xl mx-2 block rounded-full flex justify-center items-center relative overflow-hidden border border-white z-10 hover:text-white transform transition duration-500">
      <i class="fab fa-linkedin-in icon"></i>
    </a>
  </li>
</ul>







        </div>
      <div className="w-3/4  ">
          
        
        <form onSubmit={formik.handleSubmit } action="">
            <div className="flex flex-col items-start gap-5">
                <h1 className="text-lg uppercase md:text-3xl font-inter font-semibold text-primary-300">Contact us</h1>
            <Input
              type="text"
              label="First Name"
              placeHolder="First Name"
              require={ true }
              name="firstName"
              value={ formik.values.firstName }
              error={ formik.touched.firstName && formik.errors.firstName }
              onBlur={ formik.handleBlur }
              onChange={ ( e ) => {
                formik.handleChange( e );
                setFirstName( e.target.value );
              } }
            />
            <Input
              type="text"
              label="Email"
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
            <TextArea
              type="textarea"
             
              placeHolder="Write a message"
              label="Tell us about it"
              require={ true }
              name="message"
              value={ formik.values.message }
              error={ formik.touched.message && formik.errors.message }
              onBlur={ formik.handleBlur }
              onChange={ ( e ) => {
                formik.handleChange( e );
                setMessage( e.target.value );
              } }
            />
           
            <Button
              type="submit"
              handleClick={ handleSubmit }
              small
              color='primary'>
              Submit
            </Button>
          </div>
        </form>
      </div>
      
        </div>
     
    </div>
  )
}

export default Contact
