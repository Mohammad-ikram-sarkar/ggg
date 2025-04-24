import React from 'react';
import heroimg from './../../assets/banner-img-1.png'
const Bener = () => {
    return (
       <>
       
       <div className=''>

      <div
        className="
          mx-[160px]
          object-cover              /* full width */
          h-[550px]            /* your chosen height */
           bg-cover            /* background-size: cover */
                     /* background-position: center */
          flex flex-col        /* to center any children */
          items-center justify-center
          text-white
           bg-no-repeat
           rounded-2xl
        "
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        {/* Example overlay content */}
        <div className="max-w-[800px] text-center space-y-4">
          <h1 className="text-5xl font-bold drop-shadow-md">
            It avoids subjective claims or exaggeration that might raise red flags legally
          </h1>
          <p className="text-lg drop-shadow-sm opacity-40">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
          </p>
        </div>
      </div>
      </div>
      <div>
        
      </div>
       </>
    );
};

export default Bener;