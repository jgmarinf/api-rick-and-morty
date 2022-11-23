import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardCharacter from './components/CardCharacter'
import InputSearch from './components/InputSearch'
import LocationInfo from './components/LocationInfo'
import Pagination from './components/Pagination'
import useLocationApi from './hooks/useLocationApi';

function App() {
  const [locationSearch, setLocationSearch] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const {location} = useLocationApi(locationSearch)
  
  let arrayResidents = []
  const residentsPerPage = 6
  if (location?.residents.length < residentsPerPage){
    arrayResidents = [...location?.residents]
  } else {
    const lastResident = currentPage * residentsPerPage
    arrayResidents = location?.residents.slice(lastResident - residentsPerPage , lastResident)
  }

  let arrayPages =  []
  let quantityPages = Math.ceil(location?.residents.length / residentsPerPage)
  const pagesPerBlock = 5
  let currentBlock = Math.ceil(currentPage / pagesPerBlock)
  if(currentBlock * pagesPerBlock >= quantityPages){
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= quantityPages ; i++) {
      arrayPages.push(i)
    }
  } else {
    for (let i = currentBlock * pagesPerBlock - pagesPerBlock + 1; i <= currentBlock * pagesPerBlock; i++) {
      arrayPages.push(i)
    }
  }
  
 
  return (
    <div className="App">
      <img className='imagen' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png' ></img>
      <InputSearch setLocationSearch={setLocationSearch} />      
      <LocationInfo location ={location} />
      <Pagination arrayPages = {arrayPages} currentPage= {currentPage} setCurrentPage= {setCurrentPage} quantityPages= {quantityPages}/>
      <div className='content_cards'>
        {
          arrayResidents?.map(resident=> (
            <CardCharacter key={resident} resident={resident} />
          ))
        }
      </div>
      <Pagination arrayPages = {arrayPages} currentPage= {currentPage} setCurrentPage= {setCurrentPage} quantityPages= {quantityPages}/>
    </div>
  )
}

export default App
