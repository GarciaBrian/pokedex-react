import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import PokemonAbout from '../../components/PokemonDetail/components/PokemonAbout/PokemonAbout';
import BaseStats from '../../components/PokemonDetail/components/BaseStats/BaseStats';

const PokemonDetail = () => {
  return (
    <div>
      <div>
        <IoMdArrowBack />
        <h2>Pokémon name</h2>
        <span>9</span>
      </div>
      <div>
        <IoIosArrowBack />
        <div>
          <img src="" alt="" />
          <span>type</span>
          <span>type</span>
        </div>
        <IoIosArrowForward />
      </div>
      <PokemonAbout />
      <BaseStats />
    </div>
  )
}

export default PokemonDetail