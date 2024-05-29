import Skeleton from "react-loading-skeleton";
import { CDN_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


const RestaurantCard = (props) => {
  const { resdata } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resdata.info;
  const { deliveryTime } = resdata?.info.sla;
 
  return (
    <div
      data-testid="rescard"
      className=" res-card  m-4 p-4 w-[200px] justify-between  bg-gray-100 rounded-lg   hover:bg-orange-300 hover:shadow-2xl"
    >
      <img
        className="res-logo rounded-lg h-48 w-56"
        src={CDN_URL + resdata.info.cloudinaryImageId}
      />
      <h3 className=" font-semibold py-1 text-xl">{name}</h3>
      <div className=" py-1 flex font-semibold">
        <h4 className="">⭐{avgRating}</h4>
        <p className="mx-2">{"•"}</p>
        <h4 >🛵{deliveryTime}mins</h4>
      </div>
      <h4 className=" font-light">{cuisines.join(", ")}</h4>
      <div>
      <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
