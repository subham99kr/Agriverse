import React from 'react'
import { formatToLocalTime } from './weatherservice'

function Timeandlocation({weather:{dt,timezone,name,country}}) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
          <p className="text-white text-0.3xl font-extralight">
             {formatToLocalTime(dt,timezone)}
          </p>
      </div>
      <div className="flex items-center  justify-center my-6">
          <p className="text-white pl-5 text-3xl font-extralight">
             {`${name},${country}`}
          </p>
      </div>
     
    </div>
  )
}
export default Timeandlocation
