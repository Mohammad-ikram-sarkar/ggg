import React, { Suspense } from "react";
import { AiOutlineTrademarkCircle } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";
import { BiMessageSquareError } from "react-icons/bi";

export default function DeynicRouto() {
  const { id } = useParams();
  const bookid = parseInt(id);
  const data = useLoaderData();
  const lawerdata = data.find((lawyer) => lawyer.id === bookid);

  console.log(lawerdata);
  const getlawyerdata = () => {
    console.log(lawerdata.id);
    const id = lawerdata.id;

    // Get existing bookings array from localStorage or create empty array if none exists
    const existingBookings = JSON.parse(
      localStorage.getItem("bookingIds") || "[]"
    );

    // Add the current lawyer ID if it's not already in the array
    if (!existingBookings.includes(id)) {
      existingBookings.push(id);
      localStorage.setItem("bookingIds", JSON.stringify(existingBookings));
      alert("Appointment booked successfully!");
    } else {
      alert("You have already booked this lawyer!");
    }
  };

  const { name, specialization, experience, license, availability, img, fee } =
    lawerdata;

  return (
    <>
      <Suspense>
        <div className="flex flex-col justify-center items-center mx-[160px] text-wrap bg-[#0F0F0F0D] p-[70px] mb-4 rounded-2xl">
          <h1 className="text-[32px] py-[20px] font-bold">
            Lawyer's Profile Details
          </h1>
          <p className="text-center font-medium text-[#141414B3]">
            Advocate Arjun Mehta is a dedicated and experienced legal
            professional, committed to providing expert legal advice and strong
            representation. He has worked on a variety of cases in both criminal
            and civil courts, known for his sharp legal mind and client-first
            approach.
          </p>
        </div>

        <div className="flex border-2 border-gray-200  gap-5 mx-[160px] p-[32px] rounded-2xl ">
          <div>
            <img
              className="w-[308px] h-[308px] object-center rounded-3xl"
              src={img}
              alt=""
            />
          </div>
          <div>
            <button className="bg-[#176AE51A] text-[#176AE5] text-center rounded-[99px] font-medium mt-[40px] px-[30px] py-[5px]">
              {experience} experience
            </button>
            <h1 className="text-[32px] font-bold p-[10px]">{name}</h1>
            <div className="flex items-center gap-5 font-medium text-[#14141499] p-[10px]">
              <p>{specialization}</p>
              <p className="flex items-center ">
                <AiOutlineTrademarkCircle className="" />
                <span>License No: {license}</span>
              </p>
            </div>
            <div className="flex text-[#141414B3] font-medium p-[10px]">
              <div>Availability : </div>
              <div className="flex gap-2">
                {availability.map((avle) => (
                  <div className="bg-[#FFA0001A] text-[#FFA000] px-[10px] rounded-[99px] font-normal">
                    {avle}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#141414B3] font-medium pl-2">
                Consultation Fee:{" "}
                <span className="text-[#0EA106]">Taka {fee}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-[160px] border-2 border-gray-200 my-[30px]  rounded-2xl">
          <h1 className="flex items-center justify-center text-2xl font-bold py-[10px]">
            Book an Appointment
          </h1>
          <div className="flex justify-between px-[32px] items-center">
            <h1 className="text-[18px] font-bold">Availability</h1>
            <h1 className="bg-[#09982F1A] text-[#09982F] px-[24px] py-[5px] rounded-[99px] font-medium ">
              Lawyer Available Today
            </h1>
          </div>
          <button className="flex justify-center font-medium items-center ml-[80px]  px-[40px] text-[#FFA000] bg-[#FFA0001A] rounded-[99px] py-[5px] my-[20px]">
            <BiMessageSquareError />
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </button>
          <div className="flex justify-center items-center">
            <button
              onClick={() => getlawyerdata()}
              className="px-[650px] bg-[#0EA106] text-white py-[5px] rounded-[99px] my-[20px] font-bold"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      </Suspense>
    </>
  );
}
