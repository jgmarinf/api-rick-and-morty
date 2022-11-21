import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardCharacter from './components/CardCharacter'
import InputSearch from './components/InputSearch'
import LocationInfo from './components/LocationInfo'
import useLocationApi from './hooks/useLocationApi';

function App() {
  const [locationSearch, setLocationSearch] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const {location} = useLocationApi(locationSearch)
  
  let arrayResidents = []
  const residentsPerPage = 4
  if (location?.residents.length < residentsPerPage){
    arrayResidents = [...location?.residents]
  } else {
    const lastResident = currentPage * residentsPerPage
    arrayResidents = location?.residents.slice(lastResident - residentsPerPage , lastResident)
  }

  let arrayPages =  []
  return (
    <div className="App">
      <img className='imagen' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png' ></img>
      <InputSearch setLocationSearch={setLocationSearch} />
      <LocationInfo location ={location} />
      <div className='content_cards'>
        {
          arrayResidents?.map(resident=> (
            <CardCharacter key={resident} resident={resident} />
          ))
        }
      </div>
    </div>
  )
}

export default App
