import React from 'react'


const BaseStats = ({stats}) => {

    return (
        <div>
            <h4>Estadisticas</h4>
            <ul>
                {stats.map((stat, index) =>(
                    <li key={index}>
                        {stat.name}: {stat.value}
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export default BaseStats