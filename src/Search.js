import React from 'react'
import './Search.css'

function Search({search,setSearch,handleClick}) {
    return (
        <div className='out'>
            <div className='container'>
                <input value={search} className='search' type='text' placeholder='Enter City Name..' onChange={(e)=>{setSearch(e.target.value)}}></input>
                <button onClick={handleClick}>Search</button>
            </div>
        </div>
    )
}

export default Search