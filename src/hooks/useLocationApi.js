
import axios from 'axios';
import { useState, useEffect } from 'react';

const useLocationApi = locationSearch => {

    const [location, setLocation] = useState()
    let numberRandom
    useEffect(() => {
      if(locationSearch){
        numberRandom = locationSearch
      } else{
        numberRandom = Math.ceil(Math.random()*126)

      }
        const URL = `https://rickandmortyapi.com/api/location/${numberRandom}`
        axios.get(URL)
          .then(res => setLocation(res.data))
          .catch(err => console.log(err))
      
    }, [locationSearch])
    


  return {location}
}

export default useLocationApi