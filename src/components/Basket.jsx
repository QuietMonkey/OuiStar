import React, { Component } from 'react'
import BasketVehicle from './BasketVehicle'

class Basket extends Component {

    renderVehicles = () => this.props.data.map((one, i) => <BasketVehicle name={one.name} 
                                                                       price={one.price} 
                                                                       handleClick={this.props.handleClick}
                                                                       index={i}/>)

    renderTotalPrice = () => {
        let price = 0
        this.props.data.map((one) => price = price + Number(one.price))
        return(
            <div>
            <h4>Total Price:</h4>
            <h2 className='totalPrice'>{price + ' R€p'}</h2>
            </div>
        )
    }

    render() {

        return (
            <div className='Basket'>
                <div className='items'>
                    {this.renderVehicles()}
                </div>
                {this.renderTotalPrice()}
            </div>
        )
    }
}

export default Basket