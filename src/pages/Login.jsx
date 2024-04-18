import React, { useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, database } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { getDatabase, ref, child, get } from "firebase/database";
import "animate.css";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";



function Login() {
  //all variable
  const { userDetails, setuserDetails } = useContext(UserContext);
  const { setuser } = useContext(UserContext);
  const navigate = useNavigate();

  // handle on  submit

  const handlesubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // signin function firebase call

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        // setuserDetails({uid : user.uid,url:user.photourl,username:user.username})
        // console.log(user);
        setuser(true);
        navigate("/");
        //get data from realtime database
        const userid = user.uid;
        const dbRef = ref(getDatabase());
        await get(child(dbRef, `users/${userid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              const userdata = snapshot.val();

              setuserDetails({
                username: userdata.username,
                url: userdata.photourl,
                email: userdata.email,
              });
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  // google login function
  const handlegooglelogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        setuserDetails({
          username: user.displayName,
          url: user.photoURL,
          email: user.email,
        });
        // IdP data available using getAdditionalUserInfo(result)
        setuser(true);
        navigate("/");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  

  return (
    <>
      <div className=" flex justify-center w-full flex-col items-center p-6 animate__animated animate__fadeInDown">
        <form
          className=" w-1/2"
          onSubmit={(e) => {
            handlesubmit(e);
          }}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text  ">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="flex justify-start ">
          <p className="text-2xl">
            go to singup page
            <a className="link link-error">
              {" "}
              <Link to="/Singup"> Singup</Link>
            </a>
          </p>
        </div>
        <div className="flex justify-center gap-2 p-4 items-center">
          <p className="text-3xl">singup with </p>
          <button className="btn btn-square" onClick={handlegooglelogin}>
            <FcGoogle size={30} />
          </button>
        
        </div>
      </div>
    </>
  );
}

export default Login;
