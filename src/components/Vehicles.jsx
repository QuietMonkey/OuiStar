import React from 'react'
import Vehicle from './Vehicle'

const Vehicles = ({data}) => {
    const mapVehicles = data.map((one)=> <Vehicle name={one.name} type={one.vehicle_class} price={one.cost_in_credits}/>)
    return(
        <div className='Vehicles'>
            {mapVehicles}
        </div>
    )
}

export default Vehicles