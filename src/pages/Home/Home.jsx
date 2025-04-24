import React from 'react'
import Pokeball from '../../assets/icons/pokeball.svg'
import Searcher from '../../assets/icons/searcher.svg'
import PokemonList from '../../components/PokemonList/PokemonList'
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import './Home.css'


const Home = () => {
  return (
    <div>
      <header className='header-home'>
        <div className='container-logo'>
          <img src={Pokeball} alt="" />
          <h1>Pokédex</h1>
        </div>
        <div className='container-input'>
          <div className='container-input-div'>
            <IoIosSearch className='search-icon' />
            <IoMdClose className='close-icon' />
            <input
              type="text"
              placeholder='Buscar'
            />
          </div>
          <button type='submit' className='home-button'>
          </button>
        </div>
      </header>
      <PokemonList />
    </div>
  )
}

export default Home