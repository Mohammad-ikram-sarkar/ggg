import React, { Suspense } from 'react'
import Lawyercard from './lawyercard';

import Bener from './Bener'
import { useLoaderData } from 'react-router'
import Couner from './Couner';
export default function Home() {
  const data = useLoaderData();

  return (
    <div>

      <Bener/> 
      
     <Lawyercard data={data}></Lawyercard>
     <Couner></Couner>
    </div>
  )

}
