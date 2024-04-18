import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import "animate.css";

function Protected() {
  const { user } = useContext(UserContext);

  if (user === true) {
    return <Outlet />;
  } else {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-2xl ">
        
          <span className="text-orange-400">You are not login!!!</span> Go to
          the login page
          <Link to="/Login" className="link">
            Login
          </Link>
        </h1>
      </div>
    );
  }
}

export default Protected;
