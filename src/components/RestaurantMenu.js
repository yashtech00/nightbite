import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import ResCategory from "./ResCategory";
import { useEffect, useState } from "react";
import RestuarantMenuDeal from "./RestuarantMenuDeal";
import Skeleton from "react-loading-skeleton";

const RestaurantMenu = () => {
  const [showindex, setshowindex] = useState(null);
  
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);

  // const [deals , setdeals]=useState([]);

  const toggle = (index) => {
    setshowindex((previndex) => (previndex === index ? null : index));
  };

  const { resId } = useParams();
  const resinfo = useRestaurantMenu(resId);

  if (resinfo === null) return <Shimmer />;

  const deals =
    resinfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    areaName,
  } = resinfo.cards[2].card.card.info;

  // const { itemCards } =
  //   resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


  return loading ? (
    <div className="Menu mt-36 items-center">
      <div className="flex  ml-[25%] bg-white rounded-xl w-[50%] h-[10%] p-2 m-2 shadow-2xl ">
        <div className="">
          <h1 className=" NameOfRestuarant font-bold text-3xl m-1  ">
            <Skeleton count={1} width={100} height={30} />
          </h1>

          <div className=" DetailsOfRestuarant text-gray-400  text-sm m-1">
            <p>
              <Skeleton count={1} width={100} height={30} />
            </p>
            <p>
              <Skeleton count={1} width={100} height={30} />
            </p>
            <p>
              <Skeleton count={1} width={100} height={30} />
            </p>
          </div>
        </div>
        <div className=" Rating border border-black border-b-2 rounded-lg p-2 m-2 absolute left-[65%]">
          <p className="font-bold ml-4">
            <Skeleton count={1} width={100} height={30} />
          </p>
          <hr class="h-px my-2 bg-black border-0 "></hr>
          <p>
            <Skeleton count={1} width={100} height={30} />
          </p>
        </div>
      </div>
      <div className=" Deals ml-[24%] w-[51%]">
        <div className=" DealsHeading font-bold text-2xl m-4 ">
          <p>
            <Skeleton count={1} width={300} height={30} />
          </p>
        </div>
        <div
          className=" flex overflow-x-auto mx-2"
          style={{ scrollbarWidth: "none" }}
        >
          {[...Array(10)].map((_, index) => (
            <Skeleton
              key={index}
              height={70}
              width={200}
              className=" rounded-lg mx-6 ml-3"
            />
          ))}
        </div>
      </div>
      <div className="Categories ml-[26%]  ">
        {[...Array(10)].map((_, index) => (
          <Skeleton
            key={index}
            height={30}
            width={700}
            className=" rounded-lg m-2"
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="Menu mt-36 items-center">
      <div className="flex  ml-[25%] bg-white rounded-xl w-[50%] h-[10%] p-2 m-2 shadow-2xl ">
        <div className="">
          <h1 className="font-bold text-3xl m-1  ">{name}</h1>

          <div className=" text-gray-400  text-sm m-1">
            <p>{cuisines.join(", ")}</p>
            <p>{areaName}</p>
            <p>{costForTwoMessage}</p>
          </div>
        </div>
        <div className=" border border-black border-b-2 rounded-lg p-2 m-2 absolute left-[65%]">
          <p className="font-bold ml-4">⭐ {avgRating}</p>
          <hr class="h-px my-2 bg-black border-0 "></hr>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <div className=" ml-[24%] w-[51%]">
        <div className="font-bold text-2xl m-4 mr-6 ">
          <p>Deals for You</p>
        </div>
        <div
          className=" flex overflow-x-auto mx-2"
          style={{ scrollbarWidth: "none" }}
        >
          {deals.map((showdeals) => (
            <RestuarantMenuDeal
              key={showdeals?.info.offerIdS}
              data={showdeals?.info}
            />
          ))}
        </div>
      </div>

      {categories.map((categories, index) => (
        <ResCategory
          key={categories?.card?.card.title}
          data={categories?.card?.card}
          showitems={showindex === index}
          isonClick={() => toggle(index)}
          // setshowindex={()=>setshowindex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
