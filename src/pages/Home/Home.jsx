import {React, useState, useEffect} from 'react'
import Pokeball from '../../assets/icons/pokeball.svg'
import Searcher from '../../assets/icons/searcher.svg'
import PokemonList from '../../components/PokemonList/PokemonList'
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import './Home.css'


const Home = () => {
  const [pokemons, setPokemons] = useState([])

  const baseURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await fetch(`${baseURL}?limit=12`)
      const data = await res.json()
      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon) =>{
          const res = await fetch(pokemon.url)
          const details = await res.json()

          return {
            id:details.id,
            name: details.name,
            image: details.sprites.other.home.front_default,
            height: details.height,
            weight: details.weight,
            types: details.types.map(type => type.type.name),
            abilities: details.abilities.map(a => a.ability.name),
            stats: details.stats.map(stat => ({
              name: stat.stat.name,
              value: stat.base_stat
            })),
          }
        })
      )

      setPokemons(detailedPokemons)
    }

    fetchPokemons()
  }, [])

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
            {/* <IoMdClose className='close-icon' /> */}
            <input
              type="text"
              placeholder='Buscar'
            />
          </div>
          <button type='submit' className='home-button'>
          </button>
        </div>
      </header>
      <PokemonList pokemons={pokemons}/>
    </div>
  )
}

export default Home