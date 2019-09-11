import React, { Component } from 'react'
import axios from 'axios'

import './App.css'
import Vehicles from './components/Vehicles'

import Basket from './components/Basket'

class App extends Component {
  state = {
    vehicles : [],
    basketOrder: []
  }

  getVehicles = async() => {
    try {
      let arrayResults = []

      const response = await axios.get('https://swapi.co/api/vehicles/?page=1')
      this.createUnikArray(response.data.results, arrayResults)

      const response2 = await axios.get('https://swapi.co/api/vehicles/?page=2')
      this.createUnikArray(response2.data.results, arrayResults)

      const response3 = await axios.get('https://swapi.co/api/vehicles/?page=3')
      this.createUnikArray(response3.data.results, arrayResults)

      const response4 = await axios.get('https://swapi.co/api/vehicles/?page=4')
      this.createUnikArray(response4.data.results, arrayResults)

      this.setState({vehicles: arrayResults})

    } catch (error) {
      console.error(error)
    }
  }

  createUnikArray = (data, array) => {
    data.map((one)=> array.push(one))
  }

  componentDidMount(){
    this.getVehicles()
  }

  handleClickRent = async(nameVehicle, priceVehicle) => {
    const rentVehicle = { name: nameVehicle,
                          price: priceVehicle }

    const newStateToPush = this.state.basketOrder
    newStateToPush.push(rentVehicle)
    this.setState({basketOrder: newStateToPush})
  }


 

  render() {
    console.log(this.state)
    
    return (
      <div className="App">
        <div className='content'>
        <Vehicles data={this.state.vehicles} handleClick={this.handleClickRent}/>
        <Basket data={this.state.basketOrder}/>
        </div>
      </div>
    )
  }
}

export default App