import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import PokemonAbout from '../../components/PokemonDetail/components/PokemonAbout/PokemonAbout';
import BaseStats from '../../components/PokemonDetail/components/BaseStats/BaseStats';

const PokemonDetail = () => {
  const { name } = useParams()
  const [pokemonDetail, setPokemonDetail] = useState(null)

  const baseURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      const res = await fetch(`${baseURL}/${name}`)
      const data = await res.json()
      setPokemonDetail({
        id:data.id,
        name: data.name,
        image: data.sprites.other.home.front_default,
        height: data.height,
        weight: data.weight,
        types: data.types.map(type => type.type.name),
        abilities: data.abilities.map(a => a.ability.name),
        stats: data.stats.map(stat => ({
          name: stat.stat.name,
          value: stat.base_stat
        })),
      })
    }

    fetchPokemonDetail()
  }, [name])

  if(!pokemonDetail){
    return <p>Cargando!!!</p>
  }

  return (
    <div>
      <div>
        <IoMdArrowBack />
        <h2>{name}</h2>
        <span>{pokemonDetail.id}</span>
      </div>
      <div>
        <IoIosArrowBack />
        <div>
          <img src={pokemonDetail.image} alt={name} />
          {pokemonDetail.types.map((type, index) => {
            return <span key={index}>{type}</span>
          })}
        </div>
        <IoIosArrowForward />
      </div>
      <PokemonAbout weight={pokemonDetail.weight} height={pokemonDetail.height} abilities={pokemonDetail.abilities}/>
      <BaseStats stats={pokemonDetail.stats}/>
    </div>
  )
}

export default PokemonDetail