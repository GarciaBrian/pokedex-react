import React from 'react'
import Pokeball from '../../assets/icons/pokeball.svg'
import Searcher from '../../assets/icons/searcher.svg'

const Home = () => {
  return (
    <div>
      <header>
        <div>
          <img src={Pokeball} alt="" />
          <h1>Pokédex</h1>
        </div>
        <div>
          <input 
          type="text"
          placeholder='Buscar'
           />
           <button type='submit'></button>
        </div>
      </header>
      <div>
        <div>
          <p>3</p>
          <img src={Pokeball} alt="" />
          <p>pokemon name</p>
        </div>
      </div>
    </div>
  )
}

export default Home