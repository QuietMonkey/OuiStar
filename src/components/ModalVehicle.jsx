import React from 'react'

const ModalVehicle = ({ name, model, type, length, manufacturer, passenger, crew, speed, autonomy, price, handleClick }) => {
    const handleClickRent = () => {
        { handleClick(name, price) }
    }
    return (
        <div className='ModalVehicle'>

            <h1>{name}</h1>

            <div className='modalHead'>
                <h2>{model}</h2>
                <h2>{manufacturer}</h2>
            </div>

            <div className='modalCards'>

                <div className='modalCard left'>
                    <span className='icon VehicleType'></span>
                    <h3>{type}</h3> <br />

                    <span className='icon Length'></span>
                    <h3>{length}</h3> <br />

                    <span className='icon Speed'></span>
                    <h3>{speed}</h3> <br />
                </div>

                <span></span>

                <div className='modalCard right'>
                    <span className='icon Passenger'></span>
                    <h3>{passenger}</h3> <br />

                    <span className='icon Crew'></span>
                    <h3>{crew}</h3> <br />

                    <span className='icon Autonomy'></span>
                    <h3>{autonomy}</h3> <br />
                </div>
                
            </div>

            <h1>{price === 'unknown' ? "Vehicle not available" : price + ' R€p'}</h1>
            {price === 'unknown' ? null : <button className='addToCart' onClick={handleClickRent}>Add to cart</button>}

        </div>
    )
}

export default ModalVehicle