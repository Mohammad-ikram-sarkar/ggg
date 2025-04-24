import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import { AiOutlineTrademarkCircle } from 'react-icons/ai';

const LawyerCard = ({ data }) => {
  // Initial number of items to show
  const INITIAL_COUNT = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  
  // Determine which lawyers to display
  const visibleLawyers = data.slice(0, visibleCount);
  const isAllVisible = visibleCount >= data.length;

  // Show all items when button clicked
  const handleShowMore = () => {
    setVisibleCount(data.length);
  };

  return (
    <>
    




      <div className="grid grid-cols-2  mx-auto  gap-2 pt-[100px] pb-[10px] px-[160px]">
        {visibleLawyers.map((lawyer) => (
          <div
            key={lawyer.id}
            className="flex gap-[2rem] border-gray-200 border-2 p-[10px] items-center rounded-[16px]"
          >
            {/* Image section */}
            <div>
              <img
                className="w-[159px] h-[158px] object-cover rounded-md"
                src={lawyer.img}
                alt={lawyer.name}
              />
            </div>

            {/* Info section */}
            <div>
              <div className="flex gap-4 items-center">
                <button className="px-[20px] py-[5px] rounded-2xl bg-[#09982F1A] text-[#09982F]">
                  Available
                </button>
                <button className="px-[20px] py-[5px] bg-blue-200 text-[#176AE5] rounded-2xl">
                  {lawyer.experience || '5+ Years Experience'} Experience
                </button>
              </div>
              <h1 className="text-xl font-semibold">{lawyer.name}</h1>
              <p className="text-gray-600 text-[18px] font-medium">
                {lawyer.specialization || 'Criminal Expert'}
              </p>
              <h1 className="flex items-center  text-sm text-gray-600 text-[16px] font-medium">
                <AiOutlineTrademarkCircle className="" />
                <span>License No: {lawyer.license}</span>
              </h1>
              <Link to={`/lawyer/${lawyer.id}`}>  
                <button className="mt-4 w-full text-[#176AE5] border border-[#176AE5] rounded py-[5px]">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Show More button: hidden once all data is visible */}
      {!isAllVisible && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 mb-[10px] bg-[#176AE5] text-white rounded-lg hover:bg-[#145bb5] transition"
          >
            Show {data.length - INITIAL_COUNT} More
          </button>
        </div>
      )}
   
    </>
  );
};

export default LawyerCard;
