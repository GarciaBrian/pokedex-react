import React from 'react'
import Pokeball from '../../assets/icons/pokeball.svg'
import Searcher from '../../assets/icons/searcher.svg'
import PokemonList from '../../components/PokemonList/PokemonList'

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
      <PokemonList/>
    </div>
  )
}

export default Home