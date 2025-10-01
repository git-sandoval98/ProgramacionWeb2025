import React from 'react'
import './Main.css'
import CardCharacter from '../CardCharacter/CardCharacter'
import { useEffect, useState } from 'react'




const Main = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
      fetch('https://dattebayo-api.onrender.com/characters')
        .then(response => response.json())
        .then(data => setCharacters(data.characters));
    }, [])

  return (
    <main>
      {
        characters.length>0?
        characters.map(item=>(
            <CardCharacter key={item.id} character={item}/>
        )):
        <p>No hay personajes para mostrar</p>
      }
      
    </main>
  )
}

export default Main
