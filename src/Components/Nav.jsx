import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import UserContext from "../context/UserContext";

function Nav() {
  const { setuser, user, userDetails } = useContext(UserContext);
  const [loginbtn, setloginbtn] = useState("hidden");
  const [logoutbtn, setlogoutbtn] = useState("hidden");
  const [photourl, setphotourl] = useState();
  const handlesingout = () => {
    signOut(auth)
      .then(() => {
        setuser(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (user === true) {
      setloginbtn("hidden");
      setlogoutbtn("block");
      setphotourl(userDetails.url);
    } else {
      setloginbtn("block");
      setlogoutbtn("hidden");
    }
  }, [user]);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/Login">
                  <button className={"btn btn-active " + loginbtn}>
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/Map">
                  <button className={"btn btn-active "}>Map</button>
                </Link>
              </li>
              <li>
                <button
                  className={"btn btn-active " + logoutbtn}
                  onClick={handlesingout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
          <p className="text-teal-700 font-bold text-2xl">Luxury-Estate</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6">
            <li className="btn ">
              {" "}
              <Link to="/">Home</Link>
            </li>

            <li className="btn ">
              <Link to="/protected/userprofile">UserProfile</Link>
            </li>

            <li className="btn ">
              {" "}
              <Link to="/protected/updateprofile">UpdateProfile</Link>
            </li>
            <li>
              <Link to="/Map">
                <button className={"btn "}>Map</button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <Link to="/Login">
            <button className={"btn btn-active " + loginbtn}>Login</button>
          </Link>
          <button
            className={"btn btn-active " + logoutbtn}
            onClick={handlesingout}
          >
            Logout
          </button>
          
          <div class="group relative flex justify-center">
          <div className={"avatar " + logoutbtn}>
              <div className="w-14 mask mask-squircle">
                <img src={photourl} />
              </div>
            </div>
            <span class="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 z-10">
             {userDetails.username}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
