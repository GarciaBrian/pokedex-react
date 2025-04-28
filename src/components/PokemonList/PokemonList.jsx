import React from 'react'
import Pokeball from '../../assets/icons/pokeball.svg'
import './PokemonList.css'
import { Link } from 'react-router-dom'

const PokemonList = ({ pokemons }) => {
    return (
        <div className='container-pokemon-list'>
            <div className='container-pokemon-card'>
                {pokemons.map((pokemon) => (
                    <Link
                        to={`/pokemon/${pokemon.name}`}
                        key={pokemon.id}
                        className='pokemon-card'
                    >
                        <span>{pokemon.id}</span>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <p>{pokemon.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default PokemonList