import { LOGO_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react'

import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';


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
        <div className="flex justify-between bg-gray-500 shadow-xl m-2 mb-2 px sm:bg-yellow-500 lg:bg-gray-800 text-white ">
            <div className="Logo-container m-0 p-0 flex">
                <img
                    className="w-48" src={LOGO_URL} />
                 <div className="font-bold text-white text-5xl mt-4 m-1">
                    <span className=" block">Nightbites</span>
                    {/* <span className=" block">DroP</span> */}
                </div>
                {user && (<div className=" mx-6 mt-24 font-semibold text-xl  ">
                    📍Delhi,India
                </div>)}
                
            </div>
           
            <div className="flex items-center">
                {user && (
                    <ul className="flex mt-2 text-xl font-semibold">
                    <li className="px-4 font-bold hover:bg-orange-500">
                      <Link to="/Body">Home</Link>
                    </li>
                    <li className="px-4 font-bold hover:bg-orange-500">
                      <Link to="/about">About</Link>
                    </li>
                    <li className="px-4 font-bold hover:bg-orange-500">
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4 font-bold hover:bg-orange-500">
                      <Link to="/cart">Cart</Link>
                    </li>
                    <button className="px-4 font-bold hover:bg-orange-500" onClick={handleSignOutButton}>
                      Sign Out
                    </button>
                  </ul>
                  )}
            </div>
        </div>
    );
};

export default Header;