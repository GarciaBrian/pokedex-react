import React from 'react'
import Pokeball from '../../assets/icons/pokeball.svg'
import './PokemonList.css'

const PokemonList = ({pokemons}) => {
    return (
        <div className='container-pokemon-list'>
            <div className='container-pokemon-card'>
                {pokemons.map((pokemon) =>(
                    <div key={pokemon.id} className='pokemon-card'>
                    <span>{pokemon.id}</span>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <p>{pokemon.name}</p>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default PokemonList