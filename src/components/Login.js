import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { checkvalidate } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errormessage, seterrormessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();
  const handleLoginButton = () => {
    const message = checkvalidate(email.current.value, password.current.value);

    seterrormessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              seterrormessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleIsSignForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div className="pb-[49%] bg-gray-300 relative mt-[5%]">
      <form
        onClick={(e) => e.preventDefault()}
        className="w-[60%] absolute p-12 my-8 mx-auto right-0 left-0 bg-white bg-opacity-80 text-white rounded-lg drop-shadow-2xl"
      >
        <div className=" w-[37%]">
          <div>
            <div className=" ">
              <div className=" font-bold py-1 text-3xl text-black">
                {isSignInForm ? "Sign In " : "Sign Up"}
              </div>
              <div className="text-black mb-6 font-light">
                {isSignInForm
                  ? "Welcome back! please enter your details"
                  : "Create your account"}
              </div>
            </div>

            <div className="">
              {!isSignInForm && (
                <div>
                  <div className="text-xl text-black">Full Name</div>
                  <input
                    ref={name}
                    className="p-4 my-4 w-full bg-gray-300 rounded-lg text-black"
                    type="text"
                    placeholder="Full name"
                  />
                </div>
              )}
              <div className=" text-xl text-black">Email</div>
              <input
                ref={email}
                className="p-4 my-4 w-full bg-gray-300 rounded-lg text-black"
                type="text"
                placeholder="Email"
              />

              <div className=" text-xl text-black">Password</div>
              <input
                ref={password}
                className="p-4 my-4 w-full bg-gray-300 rounded-lg text-black"
                type="Password"
                placeholder="Password"
              />
            </div>
            <div>
              <input type="checkbox" id="scales" name="scales" checked />
              <label for="scales" className="text-black px-2 ">
                Remmber me
              </label>
            </div>
            <p className="text-gray-600 py-2 text-lg font-bold">
              {errormessage}
            </p>
            <button
              className="bg-orange-500 p-4 my-2 w-full rounded-3xl text-xl text-white font-semibold "
              onClick={handleLoginButton}
            >
              {toggleIsSignForm ? "Sign In" : "Sign Up"}
            </button>

            <p className="cursor-pointer">
              <div
                className="font-semibold my-2 text-black "
                onClick={toggleIsSignForm}
              >
                {isSignInForm
                  ? "New User? Sign Up Now"
                  : "Already Registered? Sign In now"}
              </div>
            </p>
          </div>

          <div className="">
            <img
              className="w-[52%] h-[80%] object-center absolute top-0 right-0 mt-14 mr-10 rounded-2xl "
              src="https://framerusercontent.com/images/iP0BsyYh0IYgAchUCKTAQqclxyI.webp"
              alt="Background"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
