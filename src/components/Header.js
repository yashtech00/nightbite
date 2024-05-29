import { LOGO_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react'

import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
// import nightbite from "./nightbite.jpg"


export const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
     
    const handleSignOutButton = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                // An error happened.
                navigate("/error");
            });
        };
        useEffect(() => {
            const Unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    const { uid, email, displayName } = user;
                    dispatch(
                        addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                        })
                    );
                    navigate("/body");
                } else {
                    dispatch(removeUser());
                    navigate("/")
                }
            });
            return () => Unsubscribe();
        }, []);

    return(
        <div className="flex fixed z-50 w-full items-center justify-between shadow-xl px  lg:bg-white text-black h-22%] ">
            <div className="Logo-container m-0 p-0 flex">
                <img
                    className=" h-20 " src='https://scontent.fbho1-3.fna.fbcdn.net/v/t39.30808-6/290858726_340034581645528_3218526451773216785_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pW6qcIeuZLYQ7kNvgHoq_Fs&_nc_ht=scontent.fbho1-3.fna&oh=00_AYCOs4hlzYPJ4CPR91gtyMXehJWfjDF5x-xKr82umPsD1A&oe=66573DE9' />
                 {/* <div className="font-bold text-white text-5xl mt-8 m-1">
                    <span className=" block">Nightbites</span>
                    
                </div> */}
                {user && (<div className="  mt-12  font-semibold text-xl underline  ">
                    📍Delhi,India
                </div>)}
                
            </div>
           
            <div className="flex items-center">
                {user && (
                    <ul className="flex mt-2 ">
                    <li className="px-4 font-bold hover:border text-lg">
                            <Link to="/Body">
                                <div className="flex ">
                                    <img src="https://cdn-icons-png.flaticon.com/256/25/25694.png" className="h-6 w-6 " />Home
                                    </div></Link>
                    </li>
                    <li className="px-4 font-bold hover:border text-lg">
                            <Link to="/about">
                                <div className="flex">
                                    <img src="https://i.pinimg.com/474x/53/fa/bf/53fabf5ac9ed557319a2a0fa5ae535d8.jpg" className="h-8 w-8"/>
                                    About
                                    </div></Link>
                    </li>
                    <li className="px-4 font-bold hover:border text-lg">
                            <Link to="/contact">
                            <div className="flex">
                                    <img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNC1udW5ueS0xMy5wbmc.png" className="h-6 w-6 mt-1 bg-white"/>
                                    Contact
                                    </div></Link>
                    </li>
                    <li className="px-4 font-bold hover:border text-lg">
                            <Link to="/cart">
                            <div className="flex">
                                    <img src="https://banner2.cleanpng.com/20180905/wph/kisspng-computer-icons-portable-network-graphics-clip-art-ic-shopping-cart-px-svg-png-icon-free-download-1-5b907479023c32.0581863815361936570092.jpg" className="h-6 w-6 mt-1"/>
                                    Cart
                                    </div>
                            </Link>
                    </li>
                        <button className="px-4 font-bold hover:border text-lg" onClick={handleSignOutButton}>
                                    <div className="flex">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYhTGSDAIP_JsHLwIQGgJPlFgyRaHHKOjim54EG6CjDA&s" className="h-6 w-6 " />
                      Sign Out</div>
                    </button>
                  </ul>
                  )}
            </div>
        </div>
    );
};

export default Header;