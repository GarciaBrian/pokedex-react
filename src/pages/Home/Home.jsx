import { React, useState, useEffect } from 'react'
import Pokeball from '../../assets/icons/pokeball.svg'
import PokemonList from '../../components/PokemonList/PokemonList'
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import './Home.css'


const Home = () => {
  const [pokemons, setPokemons] = useState([])
  const [searchValue, setsearchValue] = useState('')
  const [filteredPokemons, setfilteredPokemons] = useState([])
  const [notFound, setNotFound] = useState(false)


  const baseURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {

    const fetchPokemons = async () => {
      try {
        const res = await fetch(`${baseURL}?limit=12`)
        const data = await res.json()

        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();

            return {
              id: details.id,
              name: details.name,
              image: details.sprites.other['official-artwork'].front_default,
            }
          })
        )

        setPokemons(detailedPokemons)
      } catch (error) {
        console.error('Error cargando pokemons:', error)
      }
    }

    fetchPokemons()
  }, [])

  const handleSearch = async () => {
    if (!searchValue) return;

    try {
      const res = await fetch(`${baseURL}/${searchValue.toLowerCase()}`)
      if (!res.ok) {
        setfilteredPokemons([])
        throw new Error("Pokémon no encontrado")
      }
      const details = await res.json()

      const result = {
        id: details.id,
        name: details.name,
        image: details.sprites.other['official-artwork'].front_default,
      }

      setfilteredPokemons([result])
      setNotFound(false)
    } catch (error) {
      console.error(error)
      setfilteredPokemons([])
      setNotFound(true)

      setTimeout(() => {
        setNotFound(false)
      }, 2500)
    }
  }

  const handleClear = () => {
    setsearchValue('')
    setfilteredPokemons([])
    setNotFound(false)
  }

  return (
    <>
      {notFound && (
        <div className="container-message-error" onClick={() => setNotFound(false)}>
          <div className="message-error">
            <p>No se encontro al Pokémon, por favor intente nuevamente</p>
            <IoMdClose
              className='close-icon-message'
              onClick={() => setNotFound(false)}
            />
          </div>
        </div>
      )}
      <div className='container-home'>
        <header className='header-home'>
          <div className='container-logo'>
            <img src={Pokeball} alt="" />
            <h1>Pokédex</h1>
          </div>
          <div className='container-input'>
            <div className='container-input-div'>
              <button
                className='button-search'
                onClick={handleSearch}
              >
                <IoIosSearch className='search-icon' />
              </button>
              {searchValue && (
                <IoMdClose
                  className='close-icon'
                  onClick={handleClear}
                />
              )}
              <input
                type="text"
                placeholder='Buscar'
                value={searchValue}
                onChange={(e) => setsearchValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
          </div>
        </header>
        <PokemonList pokemons={filteredPokemons.length ? filteredPokemons : pokemons} />
      </div>
    </>
  )
}

export default Home