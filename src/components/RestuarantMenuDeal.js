import React from "react";

const RestuarantMenuDeal = ({ data }) => {
  return (
    <div className="">
      <div className="m-2 p-2 border border-b-4 rounded-xl mx-2  h-20 w-56  ">
      
        <div className="font-bold flex">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic" className="w-6 h-6 mr-2" />
          <span>
            {data.header}
          </span>
          
        </div>
        <div className="p-1 text-gray-600 text-xs">
          <p>
            {data.description} | {data.couponCode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestuarantMenuDeal;
