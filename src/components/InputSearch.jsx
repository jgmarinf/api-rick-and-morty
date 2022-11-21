import React, { useState } from 'react'

const InputSearch = ({setLocationSearch}) => {

    

    const searchLocation = e => {
        e.preventDefault()
        setLocationSearch(e.target.firstChild.value) 
    }

  return (
    <form className='form' onSubmit={searchLocation}>
        <input className='form_input' type="text" />
        <button className='form_button' >Buscar</button>
    </form>
  )
}

export default InputSearch