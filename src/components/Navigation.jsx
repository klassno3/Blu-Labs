import { useEffect, useState } from 'react'
import {Link} from 'react-scroll'
import Logo from '../images/Group.svg'
import Button from './Button'
const Navigation = () => {

  const [ isOpen, setIsOpen ] = useState( false );
  const [ active, setActive ] = useState( false );
  const genericHamburgerLine = `h-[3px]  w-7 md:w-10 my-[3px] rounded-full bg-black transition ease transform duration-300`;
 

  useEffect(() => {
    const isActive = () => {
    window.scrollY > 0 ? setActive( true ) : setActive( false )
    // Your scroll event handling logic
  };

  window.addEventListener("scroll", isActive);

  // Cleanup function to remove the event listener
  return () => {
    window.removeEventListener("scroll", isActive);
  };
}, []);
 
  return (

    <div
      className={ `w-full z-[10000] ${ active ? "bg-secondary-100 z-50 shadow-xl font-poppins  fixed top-0 left-0  " :
        "bg-secondary-200 fixed top-0 left-0  " }` }>
      
      <div className="w-11/12 max-w-[1440px]    mx-auto flex justify-between items-center">
        <Link to="home" smooth={ true } spy={ true } offset={ -150 } className='cursor-pointer'>
          <img className='py-3 w-20 md:w-28' src={ Logo } alt="" />
        </Link>
        <div className="hidden lg:flex font-poppins items-center text-lg gap-12">
          <Link
            to="home"
            activeClass="current"
            smooth={ true }
            spy={ true }
            offset={ -150 }
            className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-gradient bg-clip-text hover:bg-[0%]">
            Home
          </Link>
          <Link
            to="about"
            activeClass="current"
            smooth={ true }
            spy={ true }
            offset={ -150 }
            className="relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-gradient bg-clip-text hover:bg-[0%]">
            About Us
          </Link>
          <Link
            to="services"
            activeClass="current"
            smooth={ true }
            spy={ true }
            offset={ -150 }
            className="relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-gradient bg-clip-text hover:bg-[0%] ">
            Services
          </Link>
          <Link
            to="portfolio"
            activeClass="current"
            smooth={ true }
            spy={ true }
            offset={ -150 }
            className="relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-gradient bg-clip-text hover:bg-[0%]">
            Our Portfolio
          </Link>
          <Link
            to="contact"
            smooth={ true }
            offset={ -150 }>
            <Button small color="primary" >
              Contact us
            </Button>
          </Link>
       
        </div>

        <div className={ `flex relative lg:hidden` }>
          {/* mobile menu */ }
          <button className="flex flex-col h-12 w-z  rounded justify-center items-center group" onClick={ () => setIsOpen( !isOpen ) }  >
            <div className={ ` transition-all duration-500 ${ genericHamburgerLine }
           ${isOpen ? "rotate-[405deg] translate-y-[6px]   group-hover:scale-105" : " group-hover:-translate-y-[3px]"  }` } />
            <div className={ `${ genericHamburgerLine } ${ isOpen ? "opacity-0" : "" }` } />
            <div className={ ` transition-all duration-300 ${ genericHamburgerLine } ${ isOpen ? "-rotate-[45deg]  -translate-y-[12px]  group-hover:scale-105" : " group-hover:translate-y-[2px]" }` } />
          </button>
        </div>
      </div>
      <div className={ `z-50 transition-all duration-300 flex justify-center items-center absolute overflow-x-hidden h-screen translate-x-0  w-3/4  top-[63px] ${active ? " bg-secondary-100/95":" bg-secondary-200/95"} ${ isOpen ? "lg:hidden right-0 " : "-right-full" }` }>
        <div className="flex flex-col font-poppins items-center text-base gap-10">
          <Link
            onClick={ () => setIsOpen( false ) }
            to="home"
            activeClass="current"
            smooth={ true }
            className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-gradient bg-clip-text hover:bg-[0%]">
            Home
          </Link>
          <Link
            onClick={ () => setIsOpen( false ) }
            to="about"
            activeClass="current"
            smooth={ true }
            className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-gradient bg-clip-text hover:bg-[0%]">
            About Us
          </Link>

          <Link
            onClick={ () => setIsOpen( false ) }
            to="services"
            activeClass="current"
            smooth={ true }
            className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-gradient bg-clip-text hover:bg-[0%]">
            Services
          </Link>
          <Link
            onClick={ () => setIsOpen( false ) }
            to="portfolio"
            activeClass="current"
            smooth={ true }
            spy={ true }
            offset={ -150 }
            className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-gradient bg-clip-text hover:bg-[0%]">
            Our Portfolio
          </Link>
          <Link
            onClick={ () => setIsOpen( false ) }
            to="contact"
            smooth={ true }
            offset={ -150 }> <Button
            small
            color="primary" >
            Contact us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Navigation