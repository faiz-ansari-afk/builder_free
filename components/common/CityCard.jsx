import React from 'react'
import Image from 'next/image';

export default function CityCard({icon,cityName}) {
  return (
    <div className='cc_wrap'>
        <div className="cc__icon">
            <Image src={icon} alt={icon} />
        </div>
        <div className="city__name">
            <p className="cityname">{cityName}</p>
        </div>
    </div>
  )
}
