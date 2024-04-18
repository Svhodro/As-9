import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Home() {
  useEffect(()=>{
    Aos.init()
  },[])

  const [data,setdata]=useState([])
  useEffect(()=>{
    axios.get('./Data.json').then(e=>setdata(e.data))
  })
 
    
  return (
    <>
    <Nav/>
   <Banner/>
   <div className="flex flex-wrap justify-center gap-4 p-4" data-aos='fade-up'>
      {data.map((data, index) => {
                        return <Card index={index}  />
                    })
     }
    
   </div>
   <Footer/>

    </>
   
  )
}
