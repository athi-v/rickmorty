import React, {useState, useEffect} from 'react';
import {VscSearch} from 'react-icons/vsc'

import axios from 'axios'

import './Search.css'
const Search = () => {
    const [characters, setCharacters] = useState([])
    const [query, setQuery] = useState('')

    useEffect (() => {
    const fetchData = async () => {
        try {
            const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
            setCharacters(data.results)
        }
        catch (error) {
            console.error(error) }
        }
        fetchData()
    }, [query])


  return (
  <div className='search'>
<div className='container-fluid'>
    <div className='row'>
        <div className='col-lg-12'>
        
            <input type='text' placeholder='Search character' 
            className='input'
            onChange={event => setQuery(event.target.value)} 
                value={query}
            />
        </div>




<div className='results'>
    { characters.map(character =>
    (
        
        <div key={character.id}> 
        <img src={character.image} />
        {character.name}
        </div>
    )
    )}
        </div>
        </div>
</div>
  </div>

  )
};

export default Search;
