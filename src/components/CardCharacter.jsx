import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useCharacterApi from '../hooks/useCharacterApi'

const CardCharacter = ({resident}) => {

const {character} = useCharacterApi(resident)


    
  return (
    <article className='card'>
        <img className='img' src={character?.image} ></img>
        <ul className='ul_card'>
            <li className='li_card'><b>name :</b>{character?.name}</li>
            <li className='li_card'><b>status :</b>{character?.status}</li>
            <li className='li_card'><b>origin name :</b>{character?.origin.name}</li>
            <li className='li_card'><b>episode :</b>{character?.episode.length}</li>
        </ul>
    </article>
  )
}

export default CardCharacter