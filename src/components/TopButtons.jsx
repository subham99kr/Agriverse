import React from 'react'

function TopButtons() {

    const cities = [
        {
            id:1,
            title:'London'
        },
        {
            id:2,
            title:'Sydney'
        },
        {
            id:3,
            title:'Tokyo'
        },
        {
            id:4,
            title:'Toronto'
        },
        {
            id:5,
            title:'Paris'
        },
    ]
 return (
    <div>
    <div className="w-full flex justify-between px-2 my-6">
        {cities.map((city)=>(
            <button key={city.id} className="text-white text-lg font-medium">{city.title}</button>
        )) }
    </div>
    </div>
  )
}

export default TopButtons
