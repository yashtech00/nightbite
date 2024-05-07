import React, { useState } from "react";
import Itemlist from "./Itemlist";

const ResCategory = ({data,showitems,isonClick}) => {

  return (
    <div>
        <div className=" w-6/12 bg-gray-50 shadow-lg p-4  mx-auto my-4">
          <div className="flex justify-between cursor-pointer " onClick={isonClick}>
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
            </span>
          <span>⬇️</span>
        </div>
        {showitems && <Itemlist items={data.itemCards}/>}
        </div>
    </div>
  );
};

export default ResCategory; 