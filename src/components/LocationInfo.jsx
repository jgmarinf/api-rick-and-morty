import React from 'react'

const LocationInfo = ({location}) => {

    
  return (
    <article className='location' >
        <h2>{location?.name}</h2>
        <ul className='ul_location' >
            <li className='li_location' ><b>type: </b>{location?.type}</li>
            <li className='li_location' ><b>dimension: </b>{location?.dimension}</li>
            <li className='li_location' ><b>Population: </b>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo