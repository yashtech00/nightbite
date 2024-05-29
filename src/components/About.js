import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const About = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return loading ? (
    <div className="container mx-auto my-8 p-8 mt-36 bg-white rounded-lg shadow-md flex">
      <>
        {/* Image on the left */}
        <div className="image tag w-1/3 rounded-md">
        <Skeleton height={300} width={490} />
          </div>

        {/* Content on the right */}
        <div className=" content flex-1 ml-8">
          <h1 className="AboutHeadind text-3xl font-bold mb-4">
            <Skeleton count={1} width={100} height={30}/>
          </h1>
          <p className=" Content1 text-gray-700">
            <Skeleton count={1} width={900} height={30} />
            <Skeleton count={1} width={800} height={30} />
            
          </p>
          <p className=" Content2 text-gray-700 mt-4">
            <Skeleton count={1} width={900} height={30} />
            <Skeleton count={1} width={800} height={30} />
          </p>
        </div>
      </>
    </div>
  ) : (
    <div className="container mx-auto my-8 p-8 mt-36 bg-white rounded-lg shadow-md flex">
      <>
        {/* Image on the left */}
        <img
          className="w-1/3 rounded-md"
          src="https://c0.wallpaperflare.com/preview/5/307/817/pizza-courier-online-cheese.jpg"
          alt="First Image"
        />

        {/* Content on the right */}
        <div className="flex-1 ml-8">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-gray-700">
            Welcome to Food Drop, where our passion for great food meets the
            convenience of doorstep delivery. We strive to bring a diverse range
            of culinary delights from local favorites to international cuisines,
            all curated to satisfy your taste buds.
          </p>
          <p className="text-gray-700 mt-4">
            Our mission is to make your dining experience seamless and
            enjoyable. With a user-friendly platform and a wide array of
            restaurant choices, you can explore new flavors or indulge in your
            go-to comfort meals with just a few clicks.
          </p>
        </div>
      </>
    </div>
  );
};

export default About;
