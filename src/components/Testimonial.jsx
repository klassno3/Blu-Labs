import React from 'react'
import Carousel from "react-multi-carousel";
import { TestimonialContent } from '../data';
import "react-multi-carousel/lib/styles.css";
const Testimonial = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 1440, min: 1200 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1200, min: 640 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1
    }
  };
  
  return (

    <div>
      <div className='my-10 max-w-[1440px] md:my-20 w-11/12 mx-auto max-[1440px]'>
        <h1 className="text-lg uppercase md:text-3xl mx-auto flex justify-center font-inter font-semibold text-primary-300">Testimonial</h1>
        <Carousel
          infinite={ true }
          itemClass="sm:pr-7 px-1 mx-auto"
          responsive={ responsive }>
          { TestimonialContent.map( ( item ) => (
            <div key={item.id} className="bg-secondary-200 w-full px-7 mt-5 md:mt-10 mb-2 py-5 text-tertiary-200 font-poppins rounded-xl  shadow-md">
              <div className="flex items-center gap-4">
                <div>{ item.avatar }</div>
                <div className="flex text-sm md:text-base flex-col">
                  <p className="font-semibold">{ item.name }</p>
                  <p className=""> { item.title }</p>
                </div>
              </div>
              <p className='text-xs md:text-base mt-4 font-light'>
                { item.description }</p>
            </div>
          ) ) }
        </Carousel>
      </div>
    </div>
  )
}
export default Testimonial