import React from 'react'
import Vehicle from './Vehicle'

const Vehicles = ({data}) => {
    return(
        data.map((one)=> <Vehicle name={one.name} type={one.vehicle_class} price={one.cost_in_credits}/>)
    )
}

export default Vehicles