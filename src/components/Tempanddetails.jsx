import React from 'react'
import sun from "../assets/sun2-removebg-preview.png"
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";
function Tempanddetails() {
  return (
    <div>
    <div className="flex items-center justify-center m-7 py-14 text-xl text-cyan-300">
      <p>Cloudy or whatever</p>
    </div>
    <div className="flex flex-row items-center justify-between text-white py-3">
        <img
            src={sun}
            alt=""
            className="w-20"
        />
   <p className="text-5x">34°</p>
   <div className="flex flex-col space-y-2">
      <div className="flex font-light text-sm items-center justify-center">
        <UilTemperature size={18} class="mr-1"/>
            Real fell:
            <span className="font-medium ml-1">32°</span>
      </div>
      <div className="flex font-light text-sm items-center justify-center">
        <UilWind size={18} class="mr-1"/>
           Wind Speed:
            <span className="font-medium ml-1">85%</span>
      </div>
      <div className="flex font-light text-sm items-center justify-center">
        <UilTear size={18} class="mr-1"/>
            Humidity:
            <span className="font-medium ml-1">11 km/h</span>
      </div>
   </div>
    </div>

    <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
            Rise : <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light"> | </p>
        <UilSunset />
        <p className="font-light">
            Set: <span className="font-medium ml-1">07:45 AM</span>
        </p>
        <p className="font-light"> | </p>
       
        <UilSun />
        <p className="font-light">
            High : <span className="font-medium ml-1">45°</span>
        </p>
        <p className="font-light"> | </p>
        <UilSun />
        <p className="font-light">
            Rise : <span className="font-medium ml-1">40°</span>
        </p>
    </div>
    </div>
  )
}

export default Tempanddetails
