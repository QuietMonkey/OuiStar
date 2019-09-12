import React from 'react'

const Vehicle = ({index, name, type, price, handleClick, openModal}) => {

    const handleClickRent = () => {
        {handleClick(name, price)}
    }

    const handleOpenModal = () => {
        openModal(index)
    }

    return(
        <div className='Vehicle' onClick={handleOpenModal}>
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