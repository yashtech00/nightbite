import { TOP_RESTUARANT_CARD_IMG } from "../utils/constants";

const TopRestaurantscard = (propsdata) => {
  const { TopRestData } = propsdata;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    areaName,
    costForTwo,
    cuisines,
    aggregatedDiscountInfoV3,
  } = TopRestData.info;
  const { deliveryTime } = TopRestData.info.sla;

  return (
    <div className="border border-b-2 w-[250px] m-4 p-4 justify-between rounded-lg bg-gray-100 hover:bg-orange-300 hover:shadow-2xl">
      <div className="relative bg-gradient-to-t from-black to-transparent">
        <img
          src={TOP_RESTUARANT_CARD_IMG + cloudinaryImageId}
          className="w-full h-48 object-cover rounded-t-lg"
          alt={name}
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center     ">
          <span className="text-white text-xl font-extrabold   ">
            {aggregatedDiscountInfoV3?.header}{" "}
            {aggregatedDiscountInfoV3?.subHeader}
          </span>
        </div>
      </div>
      <div className="">
        <h3 className=" font-semibold py-1 text-xl">{name}</h3>
        <div className=" py-1 flex font-semibold">
          <h4 className="">⭐{avgRating}</h4>
          <p className="mx-2">{"•"}</p>
          <h4>🛵{deliveryTime}mins</h4>
        </div>
        <spam className=" font-light">{cuisines.join(", ")}</spam>
        <div>
          <p className="font-light">{areaName}</p>
        </div>
      </div>
    </div>
  );
};

export default TopRestaurantscard;
