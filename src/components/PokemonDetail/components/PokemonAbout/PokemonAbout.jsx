import React from 'react'

const PokemonAbout = ({weight, height, abilities}) => {
    return (
        <div>
            <h4>Caracteristicas</h4>
            <div>
                <p>{weight / 10} kg</p>
                <p>{height / 10} m</p>
                <p>{abilities}</p>
            </div>
            {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nisi, necessitatibus? Dolores dolor animi, non vitae earum
                veritatis ex quo, temporibus reprehenderit, qui consectetur
                ratione libero asperiores hic architecto perspiciatis aspernatur?
            </p> */}
        </div>
    )
}

export default PokemonAbout