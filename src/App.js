import React, { useEffect, useState } from "react";
import {Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appstore from "./utils/appstore";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Footer from "./components/Footer";

const AppLayout = () => {
  // const [username, setusername] = useState();

  // //authentication
  // useEffect(() => {
  //   //make an API call and send username and password
  //   const data = {
  //     name: "yash gupta",
  //   };
  //   setusername(data.name);
  // }, []);

  return (
    <Provider store={appstore}>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/body" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
      </BrowserRouter>
  );
};

export default AppRouter;