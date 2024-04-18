import { StrictMode, useState } from 'react'
import Singup from './pages/Singup'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Map from './pages/Map';
import About from './pages/About';
import Details from './pages/Details';
import Updateprofile from './pages/Updateprofile';
import Userprofile from './pages/Userprofile';
import Protected from './pages/Protected';
import UserContextProvider from './context/UserContextProvider';
import Error from './pages/Error';



function App() {
  

  return (
    <StrictMode>
    <UserContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="Map" element={<Map/>}/>      
      <Route path="/Singup" element={<Singup/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/protected" element={<Protected/>}>
          <Route path="details" element={<Details/>}/>
          <Route path="updateprofile" element={<Updateprofile/>}/>
          <Route path="userprofile" element={<Userprofile/>}/>         
      </Route>
      <Route path="/*" element={<Error/>}/>
    </Routes>
  </BrowserRouter>
  </UserContextProvider>
  </StrictMode>
  )
}

export default App
