import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import pokeballImg from '../../assets/pokeball-png.webp'
import Pokeball from '../../assets/icons/pokeball.svg'
import balance from '../../assets/icons/balance.svg'
import rule from '../../assets/icons/rule.svg'
import './PokemonDetail.css'

const PokemonDetail = () => {
  const { name } = useParams()
  const [pokemonDetail, setPokemonDetail] = useState(null)
  const navigate = useNavigate()

  const baseURL = 'https://pokeapi.co/api/v2/pokemon'
  
  const statAbbreviations = {
    hp: 'HP',
    attack: 'ATK',
    defense: 'DEF',
    'special-attack': 'SATK',
    'special-defense': 'SDEF',
    speed: 'SPD'
  }

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      const res = await fetch(`${baseURL}/${name}`)
      const data = await res.json()

      const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
      const speciesData = await speciesRes.json()
      const flavorText = speciesData.flavor_text_entries.find(entry => entry.language.name === 'es')
      setTimeout(() =>{
        setPokemonDetail({
          id: data.id,
          name: data.name,
          image: data.sprites.other['official-artwork'].front_default,
          height: data.height,
          weight: data.weight,
          types: data.types.map(type => type.type.name),
          abilities: data.abilities.map(a => a.ability.name),
          stats: data.stats.map(stat => ({
            name: stat.stat.name,
            value: stat.base_stat
          })),
          description: flavorText ? flavorText.flavor_text : 'Sin descripción',
          color: speciesData.color.name,
        })
      }, 1000)
    }
    fetchPokemonDetail()
  }, [name])

  if (!pokemonDetail) {
    return (
      <div className='container-loading'>
        <img src={pokeballImg} alt='' className='loading-img' />
        <img src={pokeballImg} alt='' className='loading-img' />
        <img src={pokeballImg} alt='' className='loading-img' />
      </div>
  )}

  return (
    <div>
      <div 
      className='container-pokemon-detail'
      style={{ backgroundColor: `var(--type-${pokemonDetail.types[0]})` }}>
        <img src={Pokeball} alt="" className='img-pokeball' />
        <div className='pokemon-detail-title'>
          <IoMdArrowBack className='arrow-back-icon' onClick={() => navigate(-1)}/>
          <h2>{name}</h2>
          <p>#{String(pokemonDetail.id).padStart(3, '0')}</p>
        </div>
        <div className='pokemon-detail-img'>
          <img src={pokemonDetail.image} alt={name} />
        </div>
        <div className='white-card-information'>
          <div className='container-types'>
            {pokemonDetail.types.map((type, index) => {
              return <span key={index} style={{ backgroundColor: `var(--type-${type})` }} >{type}</span>
            })}
          </div>
          <div className='container-pokemon-about'>
            <h4 style={{ color: `var(--type-${pokemonDetail.types[0]})` }}>Información</h4>
            <div className='container-about-pokemon'>
              <div className='pokemon-about'>
                <div className='pokemon-weight'>
                  <img src={balance} alt="balance-icon" />
                  <span>{pokemonDetail.weight / 10} kg</span>
                </div>
                <p>Peso</p>
              </div>
              <div className='pokemon-about'>
                <div className='pokemon-height'>
                  <img src={rule} alt="rule-icon" />
                  <span>{pokemonDetail.height / 10} m</span>
                </div>
                <p>Altura</p>
              </div>
              <div className='pokemon-about'>
                {pokemonDetail.abilities.map((abilitie, index) => {
                  return <div className='pokemon-abilites' key={index}>
                    <span>{abilitie}</span>
                  </div>
                })}
                <p className='pokemon-abilites-p'>Habilidades</p>
              </div>
            </div>
            <p className='pokemon-about-description'>{pokemonDetail.description}</p>
          </div>
          <div className='container-base-stats'>
            <h4 style={{ color: `var(--type-${pokemonDetail.types[0]})` }}>Estadisticas</h4>
            <ul className='container-stats'>
              {pokemonDetail.stats.map((stat, index) => (
                <li key={index} className='container-stats-li'>
                  <div 
                  style={{ color: `var(--type-${pokemonDetail.types[0]})` }}
                  className='stats-name'>
                    {statAbbreviations[stat.name] || stat.name.toUpperCase()}
                    </div>
                  <div className='stats-value'>0{stat.value}</div>
                  <div className='stat-bar-container'>
                    <div
                      className='stat-bar'
                      style={{
                        width: `${(stat.value / 255) * 100}%`,
                        backgroundColor: `var(--type-${pokemonDetail.types[0]})`
                      }}
                    ></div>
                  </div>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail