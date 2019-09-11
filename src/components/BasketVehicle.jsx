import React from 'react'

const BasketVehicle = ({name, price}) => {
    return(
        <div className='BasketVehicle'>
            <h2>{name}</h2>
            <div className='deleteRent'>
                <h3>{price + '$'}</h3>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default BasketVehicle