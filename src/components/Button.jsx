import React from 'react'
import {GoChevronRight} from 'react-icons/go'
const Button = ( { children, color, small,icon,handleClick,type }) => {
  return (
    <button type={ type }  onClick={()=>handleClick}>
      <div className={ ` cursor-pointer text-lg transition-all duration-1000 ${ color === 'primary' ? 'bg-primary-300 border-2  hover:shadow-lg hover:shadow-primary-100/70 border-primary-300 text-white rounded-sm ' : 'border-2 border-primary-300 text-primary-300 rounded-sm' } font-pop` }>
        
        <div className={ `flex gap-3 items-center justify-center group  ${!small ?'py-2 px-8 md:py-3 md:px-8  ': 'py-1.5 px-6'}` }>
          <p className="font-poppins ">{ children }</p>
                <GoChevronRight className={`${icon ? "flex" :"hidden" } group-hover:translate-x-1 transition-all duration-300`} size={20} />
              </div>
     </div>
    </button>
  )
}

export default Button
