import React from 'react'
import PokeballGray from '../../assets/icons/pokeball-gray.svg'
import './PokemonList.css'
import { Link } from 'react-router-dom'

const PokemonList = ({ pokemons }) => {
    return (
        <div className='container-pokemon-list'>
            <div className={`container-pokemon-card ${pokemons.length === 1? 'single' : ''}`}>
                {pokemons.map((pokemon) => (
                    <Link
                        to={`/pokemon/${pokemon.name}`}
                        key={pokemon.id}
                        className='pokemon-card'
                    >
                        <span>#{String(pokemon.id).padStart(3, '0')}</span>
                        <img src={pokemon.image} 
                        alt={pokemon.name}
                        onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = PokeballGray;
                          }} 
                        />
                        <p>{pokemon.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default PokemonList