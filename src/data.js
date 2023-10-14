import {BsPeople} from "react-icons/bs"
import { HiOutlineComputerDesktop} from "react-icons/hi2"
import { CgWebsite } from "react-icons/cg"
import { BiMobileAlt } from "react-icons/bi"
import AvatarOne from "./images/avatar-1.jpg"
import AvatarTwo from "./images/avatar-2.jpg"
import AvatarThree from "./images/avatar-3.jpg"
import AvatarFour from "./images/avatar-4.jpg"
export const services = [

 {
    id: 1,
    title: "Software Development",
    description: "Blu Labs specializes in custom software development, creating tailored solutions to address specific business requirements.",
    icon:<HiOutlineComputerDesktop/>
  },
 {
    id: 2,
    title: "Consulting and Advisory Services",
    description: "Blu Labs provides consulting and advisory services to assist clients in making informed decisions regarding their software development projects.",
    icon:<BsPeople/>
  },
 {
    id: 3,
    title: "Web Application Development",
    description: "Blu Labs excels in designing and building web-based applications. These applications are developed using modern technologies and best practices.",
    icon:<CgWebsite/>
  },
 {
    id: 4,
    title: "Mobile App Development",
    description: "Blu Labs develops mobile applications for both iOS and Android platforms. These apps are designed to provide intuitive and engaging user experiences.",
    icon:<BiMobileAlt/>
  },


]
export const TestimonialContent = [
  {
    id: 1,
    name: "Selam Mekonen",
    title:"Principle",
    description: "I have been using the Student Management System for the past year, and I am extremely satisfied with its capabilities. This system has completely transformed the way we handle student information and administration at our institution.",
    avatar: <img  className="rounded-full w-16 h-16 object-cover"  src={ AvatarOne } alt="profile pic"/>,
  },
  {
    id: 2,
    name: "Girma Ayele",
    title:"Principle",
    description: "I have been using the Student Management System for the past year, and I am extremely satisfied with its capabilities. This system has completely transformed the way we handle student information and administration at our institution.",
    avatar:<img  className="rounded-full w-16 h-16 object-cover"  src={ AvatarFour} alt="profile pic"/>
  },
  {
    id: 3,
    name: "Meron kebede",
    title:"Principle",
    description: "I have been using the Student Management System for the past year, and I am extremely satisfied with its capabilities. This system has completely transformed the way we handle student information and administration at our institution.",
    avatar: <img   className="rounded-full w-16 h-16 object-cover"  src={ AvatarThree} alt="profile pic"/>
  },
  {
    id: 4,
    name: "Daneil Habtamu",
    title:"Principle",
    description: "I have been using the Student Management System for the past year, and I am extremely satisfied with its capabilities. This system has completely transformed the way we handle student information and administration at our institution.",
    avatar:<img  className="rounded-full w-16 h-16 object-cover"  src={ AvatarTwo} alt="profile pic"/>
  },
]