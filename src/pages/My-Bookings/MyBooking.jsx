import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { useLoaderData } from 'react-router'
import { getStoredBook} from '../../utility/addtobd'
import { GiConsoleController } from 'react-icons/gi'

export default function MyBooking() {
  const data = useLoaderData()
  const [bookingl , setbooking ] = useState([])
 
  useEffect(() => {
    const storeBookData = getStoredBook()
    const bookingdata = data.filter(booking => storeBookData.includes(booking.id))
    
   setbooking(bookingdata)
  //  console.log(bookingdata)
  },[])
  const getPath = (x, y, width, height) => (
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
     Z`
  );
  // console.log(bookingl)
  const TriangleBar = (props) => {
    const {
      fill, x, y, width, height,
    } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#d0ed57', '#a4de6c'];
  const hendelremove = (id) => {
  console.log(id)
  }
  return (
    <>
    <div>
    <BarChart width={600} height={300} data={bookingl}>
    <XAxis dataKey="name" />
    <YAxis />
    <Bar dataKey="fee" fill="#8884d8" 
      shape={<TriangleBar />} />
     
  </BarChart>
   
    </div>
     <div>

      {
        bookingl.map((lawerbooking) => (
          <div className='mx-[160px] my-[20px] border-gray-200 border-2 py-[50px] rounded-2xl'>
            <div className='flex justify-between items-center mx-[32px] '>
              <div className=''>
                <h1 className='text-[20px] font-bold text-[#141414]'>{lawerbooking.name}</h1>
                <h1 className='text-[#14141499] font-medium'>{lawerbooking.specialization}</h1>
              </div>
              <h1 className='text-[#14141499] font-medium'>Appointment Fee : {lawerbooking.fee} Taka</h1>
            </div>
            <div className='border-2 border- flex justify-center items-center mx-[32px] text-[#FF0000] rounded-[99px] mt-[30px] '>

            <button className='font-medium' onClick={() => hendelremove(lawerbooking.id)}>Cancel Appointment</button>
            </div>
          </div>
        ) )
      }
     </div>
    </>
  )
}
