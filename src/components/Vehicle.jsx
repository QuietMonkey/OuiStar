import React from 'react'

const Vehicle = ({name, type, price, handleClick}) => {

    const handleClickRent = () => {
        {handleClick(name, price)}
    }

    return(
        <div className='Vehicle'>
            <h2>{name}</h2>
            <h4>{type}</h4>
            <div className='prices'>
                <h3>{price === 'unknown' ? "Vehicle not available" : price + '$'}</h3>
                {price === 'unknown' ? null : <button onClick={handleClickRent}>Rent</button>}
            </div>
        </div>
    )
}

export default Vehicle