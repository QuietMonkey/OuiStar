import React from 'react'

const ModalVehicle = ({name, model, type, length, manufacturer, passenger, crew, speed, autonomy, price, handleClick}) =>{
    const handleClickRent = () => {
        {handleClick(name, price)}
    }
    return(
        <div className='ModalVehicle'>
            <div className='modalTop'>
                <div className='modal Head'>
                    <h1>{name}</h1>
                    <h3>{manufacturer}</h3>
                    <h3>{model}</h3>
                    <h2>{passenger}</h2>
                </div>

                <div className='modal Spec'>
                    <h4>{type}</h4> 
                    <h4>{length}</h4>
                    <h2>{crew}</h2>
                    <h3>{speed}</h3>
                    <h3>{autonomy}</h3>
                </div>
            </div>

            <div className='modalRent'>
                <h1>{price === 'unknown' ? "Vehicle not available" : price + ' R€p'}</h1>
                {price === 'unknown' ? null : <button onClick={handleClickRent}>Rent</button>}
            </div>
        </div>
    )
}

export default ModalVehicle