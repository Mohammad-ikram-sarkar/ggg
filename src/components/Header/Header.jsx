import React from "react";
import logo from "./../../assets/logo.png";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center py-[20px] mx-[160px] overflow-auto">
        {/* loge section */}
        <div className="flex gap-4 items-center justify-center">
          <img className=" h-[32px]" src={logo} alt="" />
          <h1 className="text-[32px] font-[700]">Law.BD</h1>
        </div>

        <div className="flex gap-4 opacity-80">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/booking">My Bookings</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </div>
        <div>
          <button className="px-[30px] py-[15px] btn text-white bg-[#0EA106] rounded-[99px]">
            Contact Now
          </button>
        </div>
      </div>
    </>
  );
}
