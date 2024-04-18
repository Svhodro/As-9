import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios";

function Details() {
  const { id } = useContext(UserContext);
  console.log(id);
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("/Data.json").then((e) => setdata(e.data[id]));
    console.log(data);
  }, []);
  return (
    <>
      <div className="flex w-full h-screen justify-start items-center flex-col">
        <h1 className="font-bold text-center text-3xl p-3">
          Details about This site
        </h1>
        <div className="felx px-4 w">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src={data.img} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.estate_title}</h2>
              <p>{data.segment_name}</p>
              <p>{data.description}</p>
              <div className=" flex justify-start gap-3 flex-wrap p-2 text-stone-800 text-2xl ">
                <p>price : {data.price}</p>
                <p>Status : {data.Status}</p>
                <p>Area : {data.Area}S/F</p>
                <p>location :{data.location}</p>
                <p className="text-sm text-slate-800 lg:text-2xl">
                  facilities : {data.facilities}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
