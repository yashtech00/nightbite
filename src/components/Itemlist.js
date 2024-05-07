import React from "react"
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartslice";

const Itemlist = ({ items }) => {

    const dispatch =useDispatch();

  const handleadditem = (item)=>{
    dispatch(addItems(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" p-2 m-2 border border-black border-b-2 text-left flex justify-between"
        >

          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className=" absolute">
              <button className="p-2 bg-black text-white shadow-lg mx-16 rounded-lg hover:bg-white hover:text-black"
              onClick={()=>handleadditem(item)}>
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />

          </div>

        </div>
      ))}
    </div>
  );
};

export default Itemlist
