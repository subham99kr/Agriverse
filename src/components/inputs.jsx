import React from 'react'
import {UilSearch, UilLocationPoint} from "@iconscout/react-unicons";
import { toast } from 'react-toastify';
import { useEffect,useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

function Inputs({setQuery,units,setUnits}) {
    const[city,setCity] = useState("");
const handleUnitsChange = (e)=>
{
    const selectedUnit = e.currentTarget.name;
    if(units!== selectedUnit)
      setUnits(selectedUnit);
};
const handleSearchClick =()=>{
    if(city!==" ") setQuery({q:city})
}
const handlelocationClick =()=>{
  if(navigator.geolocation)
  {
    toast.info('fetching users location.')
    navigator.geolocation.getCurrentPosition((position)=>{
        toast.success("location fetched!");
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        setQuery({
            lat,lon
        });
    });
  }
};
  return (
    <div className="flex flex-row justify-center my-6" >
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4 p-2">
        <input
        value={city} onChange={(e) =>setCity(e.currentTarget.value)} type="text"
        placeholder="search for city...."
         className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"/>
      <UilSearch
       size={50}
        className="text-white cursor-pointer transition ease-out hover:scale-125 px-2 "
        onClick={handleSearchClick} />
      <UilLocationPoint size={35} className="text-white cursor-pointer transition ease-out
       hover:scale-125"
       onClick={handlelocationClick}
       />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
      <button name="metric" className="text-xl text-white font-light transition ease-out hover:scale-125"onClick={handleUnitsChange}>°C</button>
        <p className="text-xl text-white mx-2"></p>
        <button name="imperial" className="text-xl text-white font-light transition ease-out hover:scale-125"onClick={handleUnitsChange}>|°F</button>
      </div>
    </div>
  )
}

export default Inputs
