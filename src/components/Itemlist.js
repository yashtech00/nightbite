import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartslice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Itemlist = ({ items }) => {
  const dispatch = useDispatch();

  const handleadditem = (item) => {
    dispatch(addItems(item));
  };
  console.log(handleadditem, "yash add item");

  const showtoastmessage = () => {
    toast.success("Item added to cart", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" p-2 m-2 border border-black border-b-2 text-left flex justify-between rounded-xl"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className=" absolute">
              <button
                className="p-2 bg-black text-white shadow-lg mx-16 rounded-lg hover:bg-white hover:text-black"
                onClick={(e) => { handleadditem(item); showtoastmessage(e); }}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      ))}
      <ToastContainer/>
    </div>
  );
};

export default Itemlist;
