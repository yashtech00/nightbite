import RestaurantCard from "./Restaurantcard";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import Mindcard from "./Mindcard";

const Body = () => {
  const [res, setres] = useState([]); //mainlist

  const [food, setfood] = useState([]);

  const [filteredRest, setfilteredRest] = useState([]); //filter list

  const [searchlist, setsearchlist] = useState(""); //search list

  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => setloading(false), 3000);
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
      console.log(json);

      //extract food image
      const food = json?.data?.cards[0]?.card?.card?.imageGridCards;
      setfood(food.info || []);
      

      // extract restuarant list
      const extractedData =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle;
      console.log(extractedData);

      setres(extractedData?.restaurants || []);
      setfilteredRest(extractedData?.restaurants || []);
      console.log(res);
      
    } catch (error) {}
  };

  return !res || res.length === 0 ? (
    <Shimmer />
  ) : (
        <div className="body min-h-full relative  mb-[96px]">
          {/* {bg - gradient - to - b from-black} */}
          <div className="filter flex ">
            <img
              src="https://png.pngtree.com/background/20210711/original/pngtree-simple-food-top-view-banner-picture-image_1068662.jpg"
              className=" w-screen"
            />
            <div className="absolute w-[60%] ml-80 mt-20 ">
              <div className="text-5xl font-semibold mb-12">
                <span className=" block italic">
                  Bringing the world to your table - where every dish is a
                  story, and every delivery is an experience.
                </span>
                {/* <span className=" block">
                any Meal
              </span> */}
              </div>

              <div className="search p-4 text-center mt-6">
                <input
                  type="text"
                  data-testid="searchInput"
                  placeholder="Search any restuarant"
                  className=" mr-3 rounded-3xl p-3 w-[70%] shadow-xl"
                  value={searchlist}
                  onChange={(e) => {
                    setsearchlist(e.target.value);
                  }}
                />

                {/* search button */}

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
              <div className=" m-6 p-6 text-center ">
                <button
                  className="filter-btn bg-white px-8 py-3 rounded-lg text-black font-semibold shadow-xl "
                  onClick={() => {
                    const filterbt = res.filter(
                      (ress) => ress.info.avgRating > 4
                    );
                    setres(filterbt);
                  }}
                >
                  Top rated Resturants
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <div className="text-3xl p-4 mx-4 font-bold">
                What's on your mind?
              </div>
              <div></div>
              <div
                className=" mb-4 ml-6 flex overflow-x-auto "
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
            <div className="text-3xl p-4 mx-4 font-bold drop-shadow-xl">
              Restaurants with online food delivery in Delhi
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
    
  );
};

export default Body;
