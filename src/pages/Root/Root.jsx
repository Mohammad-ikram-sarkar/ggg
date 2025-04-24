import React from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer'

export default function Root() {
  return (
   <>
   <div className=''>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>

   </div>
   </>
  )
}
