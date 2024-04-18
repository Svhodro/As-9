import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import { Link } from 'react-router-dom';


function Userprofile() {
  const { userDetails} = useContext(UserContext);
  
  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={userDetails.url}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">          
          <p><span>Gamill:</span> {userDetails.gmail}</p>
          <p><span>PhotoUrl:</span> {userDetails.url}</p>
          <div className="card-actions">
            <button className="btn btn-primary"><Link to='/protected/updateprofile'>upadate profile</Link> </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userprofile
