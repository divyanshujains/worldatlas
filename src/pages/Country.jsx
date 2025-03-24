import React, { useEffect, useState, useTransition } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios" 
import Loader from './Loader'

const Country = () => {
  const [countries, setcountries] = useState([])

 const callapi = async ()=>{
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,%20population,%20region,%20capital,%20flags") 
    setcountries(response.data)
    
       
  } catch (error) {
    console.log(error);
    
  }

 }

 useEffect(() => {
 
  callapi();

   
 }, [])


if(countries.length == "") return <Loader />

 return (
    <div>
       <Navbar />
     <div className='w-full  bg-red-400 flex flex-wrap  gap-6 px-8 py-2'>
      {countries.map(function(elem , idx){
       return <div key={idx} className='border-2 p-4 '>
       <h1> {elem.name.common}</h1>
       <h2>{}</h2>
       
       
       
       </div>

      })}

     </div>



    </div>
  )
}

export default Country
