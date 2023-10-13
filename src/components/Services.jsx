import React from 'react'
import { services } from '../data'
const Services = () => {
  return (
    <div className='services max-w-[1440px]  w-11/12 mx-auto  my-16 md:my-28'>
       <h1 className="text-lg uppercase md:text-3xl pb-4 md:pb-8  font-inter font-semibold text-primary-300">services we provide</h1>
      <div className="grid grid-cols-1  md:grid-cols-2  gap-5 md:gap-8">
        
      { services.map( ( item ) => (
        <div className="bg-primary-300 sm:w-3/4 md:w-full mx-auto shadow py-5 px-6 rounded-md text-secondary-200">
          <div className="flex flex-col gap-2">

          <div className="flex flex-col gap-1">
            
          <div className="text-3xl md:text-5xl">
            { item.icon }
          </div>
          <p className="font-poppins text-base lg:text-xl font-semibold">{item.title}</p>
            </div>
     
             <p className="text-secondary-200/90  font-light text-left font-poppins text-sm lg:text-base "> {item.description}</p>
          
        </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Services
