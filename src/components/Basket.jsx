import React, {Component} from 'react'
import BasketVehicle from './BasketVehicle'

class Basket extends Component{

    componentDidUpdate(){
        console.log(this.props.data)
    }

    render(){

    
    return(
        <div>

            <h2>{this.props.data}</h2>
        </div>
    )
}
}

export default Basket