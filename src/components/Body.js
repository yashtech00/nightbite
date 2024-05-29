import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import RestaurantCard from "./Restaurantcard";
import Mindcard from "./Mindcard";
import TopRestaurantscard from "./TopRestuarantscard";
import Typewriter from "typewriter-effect";
import { ReactTyped } from "react-typed";

const Body = () => {
  const [res, setres] = useState([]); // main list
  const [food, setfood] = useState([]);
  const [topRestuarants, settopRestuarants] = useState([]);
  const [filterbutton, setfilterbutton] = useState([]);
  const [filteredRest, setfilteredRest] = useState([]); // filter list
  const [searchlist, setsearchlist] = useState(""); // search list
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json, "yash");

      // extract food image
      const food = json?.data?.cards[0]?.card?.card?.imageGridCards;
      setfood(food.info || []);

      const topRestuarants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      settopRestuarants(topRestuarants || []);

      console.log(topRestuarants, "yash top restaurants");

      // extract restaurant list
      const extractedData =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle;
      console.log(extractedData);

      setres(extractedData?.restaurants || []);
      setfilteredRest(extractedData?.restaurants || []);
    } catch (error) {}
  };

  return loading ? (
    <div className="Mainbody min-h-full relative mb-[96px]">
      <div className="DownImg flex mt-8">
        <div className="Mainimage">
          
          <Skeleton
            height={500}
            width={2000}
          />
        </div>
        <div className="absolute w-[60%] ml-80 mt-20">
          <div className="text-5xl font-semibold mb-12">
            <span className="onImgText ">
              <Skeleton count={2} width={1000} height={25} duration={1} />
              <Skeleton count={1} width={300} height={25} duration={1} />
            </span>
          </div>
          <div className="search p-4 text-center mt-6">
            <span>
              <Skeleton height={40} width={`70%`} className=" rounded-3xl" />
              <Skeleton height={40} width={100} className=" rounded-3xl" />
            </span>
          </div>
          <div className="topRatedbtn m-6 p-6 text-center">
            <Skeleton height={40} width={200} className="mx-auto rounded-lg" />
          </div>
        </div>
      </div>
      <div className="w-[82%] mx-auto">
        <div className="flex justify-center">
          <div className="text-3xl p-4 mx-4 font-bold">
          <Skeleton count={5} height={40} width={150} className="my-2" />
          </div>
          <div
            className="mb-4 ml-6 flex overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {[...Array(10)].map((_, index) => (
              <Skeleton
                key={index}
                height={200}
                width={200}
                className=" rounded-lg mx-6 ml-3"
              />
            ))}
          </div>
        </div>
        <hr />
        <div className="flex justify-center">
          <div className="text-3xl p-4 mx-4 font-bold drop-shadow-xl">
          <Skeleton count={6} height={40} width={150} className="my-2" />
          </div>
          <div className="res-container flex flex-wrap">
            {[...Array(10)].map((_, index) => (
              <Skeleton
                key={index}
                height={400}
                width={250}
                className="mr-2 mb-4 mx-8 rounded-lg"
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
        <div className=" restuarants text-3xl p-4 mx-4 font-bold drop-shadow-xl">
          <Skeleton count={8} height={40} width={150} className="my-2" />
        </div>
        <div className="res-container flex flex-wrap">
          {[...Array(10)].map((_, index) => (
            <Skeleton
              key={index}
              height={200}
              width={300}
              className="mr-2 mb-4 rounded-lg"
            />
          ))}
          </div>
          </div>
      </div>
    </div>
  ) : (
    <div className="Mainbody  relative ">
      <div className="DownImg flex justify-center mt-[0%]">
        <div className="Mainimage">
          <img
            src="https://png.pngtree.com/background/20210711/original/pngtree-simple-food-top-view-banner-picture-image_1068662.jpg"
            className="w-screen h-[100%]"
          />
        </div>
          <div className="absolute w-[70%] mt-44">
          <div className="text-5xl font-semibold  text-gray-800 flex justify-center ">
          <ReactTyped
        strings={[
          "Delicious meals delivered to your doorstep.",
          "Fresh ingredients, cooked to perfection.",
          "Order now and enjoy hot and tasty food.",
          "Fast, reliable, and convenient food delivery.",
          "Experience the best food delivery service."
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
        </div>
          
          <div className="search p-4 text-center mt-6">
            <input
              type="text"
              data-testid="searchInput"
              placeholder="Search any restaurant"
              className="mr-3 rounded-3xl p-3 w-[60%] shadow-xl"
              value={searchlist}
              onChange={(e) => {
                setsearchlist(e.target.value);
              }}
            />

            <button
              className="px-6 bg-white rounded-3xl p-3 text-black font-semibold shadow-xl"
              onClick={() => {
                const filtered = res.filter((rest) =>
                  rest.info.name
                    .toLowerCase()
                    .includes(searchlist.toLowerCase())
                );
                setres(filtered);
              }}
            >
              Search
            </button>
          </div>
          <div className=" topRatedbtn m-6 p-6 text-center">
            <button
              className="filter-btn bg-white px-8 py-3 rounded-lg text-black font-semibold shadow-xl"
              onClick={() => {
                const filterbt = res.filter((ress) => ress.info.avgRating > 4);
                setres(filterbt);
              }}
            >
              Top rated Restaurants
            </button>
          </div>
        </div>
      </div>
      <div className="w-[82%] mx-auto ">
        <div className="flex justify-center">
          <div className="text-3xl p-4 mx-4 font-bold">
            What's On Your Mind? 🧠
          </div>
          <div
            className="mb-4 ml-6 flex overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {food.map((foodItem) => (
              <Link key={foodItem.id} to={"/restaurants/" + foodItem.id}>
                <Mindcard foodData={foodItem} />
              </Link>
            ))}
          </div>
        </div>
        <hr />
        <div className="flex justify-center">
          <div className="text-3xl p-4 mx-4 font-bold drop-shadow-xl">
            Top Restaurant Chains <br />
            In
            <br /> Delhi
            <br />
            🔝
          </div>

          <div
            className="res-container mb-4  flex overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {topRestuarants.map((TopRest) => (
              <Link
                key={TopRest.info.id}
                to={"/restaurants/" + TopRest.info.id}
              >
                <TopRestaurantscard TopRestData={TopRest} />
              </Link>
            ))}
          </div>
        </div>
        <hr />
        <div className="flex justify-center">
          <div className="text-3xl p-4 font-bold drop-shadow-xl">
            Restaurants
            <br />
            With
            <br />
            Online
            <br />
            Food
            <br />
            Delivery
            <br />
            In
            <br />
            Delhi
            <br />
            🍽️
          </div>
          <div className="res-container flex flex-wrap ">
            {res.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                <RestaurantCard resdata={restaurant} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
