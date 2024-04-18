import React, { useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import 'animate.css'
import UserContext from "../context/UserContext";


function Singup() {
  const navigate = useNavigate();
  //context call
  const {setuserDetails}=useContext(UserContext)
  
  const handlesubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photourl = e.target.photourl.value;
    const username = e.target.username.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;     
       
        navigate("/Login");
        // store data
        set(ref(database, 'users/' +user.uid), {
          username:username ,
          email:email ,
          photourl :photourl,

        });
          
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <>
      <div className="flex justify-center w-full p-6 animate__animated animate__fadeInDown">
        <form
          className=" w-1/2"
          onSubmit={(e) => {
            handlesubmit(e);
          }}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              className="input input-bordered"
              required
              name="username"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo-url</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              className="input input-bordered"
              required
              name="photourl"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover"></a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">SignUp</button>
          </div>
          <div className="flex justify-start ">
            <p>
              go to singup page
              <a className="link link-error">
                <Link to="/Login"> Login page</Link>
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Singup;
