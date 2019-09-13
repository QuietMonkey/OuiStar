import React from 'react'

const Vehicle = ({index, name, type, price, passengers, openModal}) => {

    const handleOpenModal = () => {
        openModal(index)
    }

    return(
        <div className='Vehicle' onClick={handleOpenModal}>
            <h2>{name}</h2>
            <h4>{type}</h4>
            <div className='passengers'>
            <span className='icon Passenger'></span>
            <h2>{passengers}</h2>
            </div>
                <h3>{price === 'unknown' ? "Vehicle not available" : price + ' R€p'}</h3>
        </div>
    )
}

export default Vehicle