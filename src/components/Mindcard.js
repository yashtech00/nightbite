import React, { useState } from "react";
import { MIND_URL } from "../utils/constants";

const Mindcard = (foodItem) => {
  const { foodData } = foodItem;

  return (
    <div>
      <div className="w-[180px] ">
        <img src={MIND_URL + foodData.imageId} />
      </div>
    </div>
  );
};

export default Mindcard;
