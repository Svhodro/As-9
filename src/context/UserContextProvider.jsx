import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const [id,setId]=useState()
    const [user,setuser]=useState(false)
    const [userDetails,setuserDetails]=useState({username:'',url:'',email:''})
   
    return(
        <UserContext.Provider value={{id,setId,user,setuser,userDetails,setuserDetails}}>
           {children}
        </UserContext.Provider>
    )

}
export default UserContextProvider