import React from 'react';
import CountUp from 'react-countup';
import img1 from '../../assets/success-doctor.png'
import img2 from './../../assets/success-patients.png'
import img3 from './../../assets/success-review.png'
import img4 from './../../assets/success-staffs.png'

const countercard = [

   {
    image:img1,
    num:199,
    title:'Total Lawyer'
   },
   
   {
    image:img2,
    num:467,
    title:'Total Reviews',
    

   },
   {
   image:img3,
   num:1900,
   title:'Cases Initiated'
   },
   {
    image:img4,
    num:300,
    title:'Total Stuffs'
   }
]

const Couner = () => {
  return (
   <>
   
 
   
   <div>

   <h1 className='flex justify-center text-[40px] font-extrabold'>We Provide Best Law Services</h1>
   <p className='flex justify-center opacity-[0.8] text-[16px]'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>

   <div className='grid grid-cols-4 gap-5 px-[160px] py-[40px]'>
   {
    countercard.map((coun) =>(
      <div className='flex flex-col items-center justify-center bg-[#0F0F0F26] p-[40px] rounded-2xl'>
        <img src={coun.image} alt="" />
        <h1 className='text-[48px] font-bold'> <CountUp start={0} end={coun.num} duration={4} /> +</h1>
        <p className='text-[20] opacity-[0.8] font-medium'>{coun.title}</p>
      </div>
    ))
   }
    
   </div>
   
   </div>
   </>
  );
};

export default Couner;
