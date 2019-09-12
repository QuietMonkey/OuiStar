import React from 'react'
import Vehicle from './Vehicle'

const Vehicles = ({data, handleClick, openModal}) => {

    const mapVehicles = data.map((one, i)=> <Vehicle    index={i}
                                                            name={one.name} 
                                                            type={one.vehicle_class} 
                                                            price={one.cost_in_credits} 
                                                            handleClick={handleClick}
                                                            openModal={openModal}/>)

    return(
        <div className='Vehicles'>
            {mapVehicles}
        </div>
    )
}

export default Vehicles