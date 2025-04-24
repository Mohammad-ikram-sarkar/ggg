import React from 'react'
import Root from './../pages/Root/Root'
import Error from '../pages/Error/Error';
import Home from "../pages/Home/Home"
import Mybooking from './../pages/My-Bookings/MyBooking'

import Contact from "./../pages/Contact/Contact"
import Blogs from "./../pages/Blogs/Blogs"

import {
    createBrowserRouter,
  
  } from "react-router";
import DeynicRouto from '../pages/Home/DeynicRouto';
import Booking from '../pages/Booking';
 export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root, 
      errorElement:<Error></Error>,
      children:[
        {
            index:true,
            loader:() =>fetch('fake.json'),
            path:"/",
       
            Component:Home,
            
        },
        {
          
            path:"/booking",
            loader:() =>fetch('fake.json'),
            Component:Booking
            
        },
        {
        
            path:"/blogs",
            Component:Blogs

        },
        {
       
           path:"/bontact-us",
           Component:Contact
        },
        {
          index:true,
          path:"/lawyer/:id",
          Component:DeynicRouto,
          loader:() =>fetch('fake.json'),
        },
    
      ]
    },
  ]);
  