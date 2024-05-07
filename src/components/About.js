import React, { useState, useEffect } from "react";

const About = () => {
  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 200; // Adjust the threshold as needed

      // Swap positions when scrolling down past the threshold
      if (scrollY > threshold) {
        setIsSwapped(true);
      } else {
        setIsSwapped(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded-lg shadow-md flex">
      {isSwapped ? (
        <>
          {/* Content on the right */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">Additional Content</h1>
            <p className="text-gray-700">
              This is some more information about our food delivery service.
              Customize this content based on your needs.
            </p>
            {/* Add more content as needed */}
          </div>

          {/* Image on the left */}
          <img
            className="w-1/3 ml-8 rounded-md"
            src="https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg"
            alt="Second Image"
          />
        </>
      ) : (
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
              Welcome to Food Drop, where our passion
              for great food meets the convenience of doorstep delivery. We
              strive to bring a diverse range of culinary delights from local
              favorites to international cuisines, all curated to satisfy your
              taste buds.
            </p>
            <p className="text-gray-700 mt-4">
              Our mission is to make your dining experience seamless and
              enjoyable. With a user-friendly platform and a wide array of
              restaurant choices, you can explore new flavors or indulge in
              your go-to comfort meals with just a few clicks.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
