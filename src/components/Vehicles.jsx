import React from 'react'
import Vehicle from './Vehicle'

const Vehicles = ({data, openModal}) => {

    const mapVehicles = data.map((one, i)=> <Vehicle index={i}
                                                     name={one.name} 
                                                     type={one.vehicle_class} 
                                                     price={one.cost_in_credits} 
                                                     passengers={one.passengers}
                                                     openModal={openModal}/>)

    return(
        <div className='Vehicles'>
            {mapVehicles}
        </div>
    )
}

export default Vehicles