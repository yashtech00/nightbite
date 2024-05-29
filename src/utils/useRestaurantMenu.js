import { useState,useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu =(resId)=>{
    
    
    const [resinfo,setresinfo]=useState(null);
    
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            MENU_API+resId
        );
        const json = await data.json();
        console.log(json, "restuarant yash");
        setresinfo(json.data);
        
    };
    return resinfo;
};

export default useRestaurantMenu;