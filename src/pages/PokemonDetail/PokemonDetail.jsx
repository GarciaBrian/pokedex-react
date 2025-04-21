import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

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
      <div>
        <h4>About</h4>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nisi, necessitatibus? Dolores dolor animi, non vitae earum 
          veritatis ex quo, temporibus reprehenderit, qui consectetur 
          ratione libero asperiores hic architecto perspiciatis aspernatur?
        </p>
        <h4>Base Stats</h4>
        <ul>
          <li>hp 999</li>
          <li>hp 999</li>
          <li>hp 999</li>
          <li>hp 999</li>
          <li>hp 999</li>
          <li>hp 999</li>
        </ul>
      </div>
    </div>
  )
}

export default PokemonDetail