import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import footerimg from './../../assets/logo-footer.png'
import { Link } from 'react-router'

export default function Footer() {
  return (
     <>
     <div className='flex flex-col items-center bg-[#0F0F0F] text-white py-[100px]'>
        <div className='flex items-center  '>
            <img className='h-[42px]' src={footerimg} alt="" />
            <h1 className='text-[32px] font-bold'>Law.BD</h1>
        </div>
        <div className='flex gap-4 text-white'>
        <Link to="/">Home</Link>
        <Link to="/My-Bookings">My Bookings</Link>
        <Link to="/Blogs">Blogs</Link>
        <Link to ="/Contact-us">Contact Us</Link>

        </div>
        <div className='flex items-center justify-center gap-4 border-t-2 border-gray-600 w-full pt-2.5 mt-4 border-dashed'>

        <a href=""><FaFacebook className='text-sky-500' size={26} /></a>
        <a href=""><FaLinkedin className='text-sky-700' size={26}/></a>
        <a href=""><FaGithub size={26} className='text-white'/></a>
        </div>
     </div>
     
     </>
  )
}
