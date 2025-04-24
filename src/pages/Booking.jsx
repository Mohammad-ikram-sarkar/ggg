import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Booking = () => {
  const data = useLoaderData();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Retrieve stored IDs from localStorage (assumes they are saved as an array of IDs)
    const storedIds = JSON.parse(localStorage.getItem("bookingIds") || "[]");

    // Filter the loaded data based on stored IDs
    const filtered = data.filter((booking) => storedIds.includes(booking.id));
    setFilteredData(filtered);
  }, [data]);

  return (
    <div>
      {filteredData.length > 0 ? (
        filteredData.map((booking) => (
          <div
            key={booking.id}
            className="mx-[160px] my-[20px] border-gray-200 border-2 py-[50px] rounded-2xl"
          >
            <div className="flex justify-between items-center mx-[32px]">
              <div>
                <h1 className="text-[20px] font-bold text-[#141414]">
                  {booking.name}
                </h1>
                <h1 className="text-[#14141499] font-medium">
                  {booking.specialization}
                </h1>
              </div>
              <h1 className="text-[#14141499] font-medium">
                Appointment Fee: {booking.fee} Taka
              </h1>
            </div>
            <div className="flex justify-center items-center mx-[32px] text-[#FF0000] rounded-[99px] mt-[30px] border-2">
              <button
                className="font-medium"
                onClick={() => handleCancel(booking.id)}
              >
                Cancel Appointment
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center mt-10 text-gray-500">No bookings found.</p>
      )}
    </div>
  );

  // Optional: handle cancel logic - remove ID from localStorage and update state
  function handleCancel(id) {
    const storedIds = JSON.parse(localStorage.getItem("bookingIds") || "[]");
    const updatedIds = storedIds.filter((storedId) => storedId !== id);
    localStorage.setItem("bookingIds", JSON.stringify(updatedIds));
    setFilteredData((prev) => prev.filter((item) => item.id !== id));
  }
};

export default Booking;
