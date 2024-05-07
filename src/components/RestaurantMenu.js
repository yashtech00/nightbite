import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import ResCategory from "./ResCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const [showindex,setshowindex]=useState(null);

    const toggle =(index)=>{
        setshowindex((previndex)=>(previndex===index ? null:index));
    }

    const {resId} =useParams();
    const resinfo = useRestaurantMenu(resId);
    

   
    if (resinfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resinfo.cards[2].card.card.info;

    const { itemCards } = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories=
        resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (c)=>
                c.card?.["card"]?.["@type"] ===
               "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    return (
        <div className="Menu text-center">
            <h1 className="font-bold text-3xl my-6">{name}</h1>
            <p className=" font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {categories.map((categories,index)=>(
                
                <ResCategory 
                key={categories?.card?.card.title} 
                data={categories?.card?.card}
                
                showitems={showindex === index}
                isonClick={()=>toggle(index)}
                // setshowindex={()=>setshowindex(index)}
                />

            ))}
            </div>
    );
};

export default RestaurantMenu;