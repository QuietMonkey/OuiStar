import React from 'react'

const Vehicle = ({index, name, type, price, handleClick, openModal}) => {

    const handleOpenModal = () => {
        openModal(index)
    }

    return(
        <div className='Vehicle' onClick={handleOpenModal}>
            <h2>{name}</h2>
            <h4>{type}</h4>
            <div className='prices'>
                <h3>{price === 'unknown' ? "Vehicle not available" : price + ' R€p'}</h3>
            </div>
        </div>
    )
}

export default Vehicle