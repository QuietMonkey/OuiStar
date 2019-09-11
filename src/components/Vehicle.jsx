import React from 'react'

const Vehicle = ({name, type, price}) => {

    return(
        <div className='Vehicle'>
            <h2>{name}</h2>
            <h4>{type}</h4>
            <div className='prices'>
                <h3>{price === 'unknown' ? "Véhicle not disponible" : price + '$'}</h3>
                <button>Rent</button>
            </div>
        </div>
    )
}

export default Vehicle