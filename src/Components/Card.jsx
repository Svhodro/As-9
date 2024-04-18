import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";


function Card({index}) {
  const [data,setdata]=useState([])
  useEffect(()=>{
    axios.get('./Data.json').then(e=>setdata(e.data[index]))
  },[])
  const navigate = useNavigate();
const{setId}=useContext(UserContext)
  const handleclick=()=>{
    setId(index)
    navigate('/protected/details')
  }
  
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={data.img}
          />
        </figure>
        <div className="card-body">
         
            <p>{data.estate_title}</p>
            <p>{data.Area}</p>
            <p>{data.Status}</p>
            <div className="flex">
            <button className="btn" onClick={handleclick}>
            View Property
            </button>
          </div>
          </div>
          
        </div>
    
    </>
  );
}

export default Card;
