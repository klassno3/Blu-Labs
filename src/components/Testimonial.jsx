import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';
import { TestimonialContent } from '../data';

const Testimonial = () => {
  return (
    <div className='my-10 md:my-20 w-11/12 mx-auto max-[1440px]:'>
          <h1 className="text-lg uppercase md:text-3xl pb-5 md:pb-12 mx-auto flex justify-center font-inter font-semibold text-primary-300">Testimonial</h1>

      <ScrollCarousel
        autoplay
        autoplaySpeed={4}
        speed={ 2 }
        margin={ 30 }
        
       
      >
        {TestimonialContent.map((item) => (
            <div className="bg-secondary-200 px-7 py-5 text-tertiary-200 font-poppins rounded-md w-96 shadow-md">
            <div className="flex items-center gap-4">
              <div>{ item.avatar }</div>
              <div className="flex text-sm md:text-base flex-col">
                <p className="font-semibold">{ item.name}</p>
                <p className=""> { item.title}</p>
              </div>
            </div>
            <p className='text-sm md:text-base mt-4 font-light'>
             {item.description}</p>
          </div>
        ))}
      </ScrollCarousel>
    </div>
  );
};

export default Testimonial;