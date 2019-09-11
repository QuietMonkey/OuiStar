import React from 'react'

const Vehicle = ({name, type, price}) => {

    return(
        <div className='Vehicle'>
            <h2>{name}</h2>
            <h4>{type}</h4>
            <h3>{price === 'unknown' ? "Véhicule non disponible" : price + '$'}</h3>
        </div>
    )
}

export default Vehicle