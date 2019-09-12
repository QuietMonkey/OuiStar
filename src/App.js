import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-responsive-modal';

import './App.css'
import Vehicles from './components/Vehicles'

import Basket from './components/Basket'
import ModalVehicle from './components/ModalVehicle';

class App extends Component {
  state = {
    open: false,
    vehicles : [],
    selectedVehicle: [],
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

  onOpenModal = (index) => {
    this.setState({ selectedVehicle: this.state.vehicles[index]})
    this.setState({ open: true })
  }
 
  onCloseModal = () => {
    this.setState({ open: false })
  }


  render() {
    console.log(this.state)
    
    return (
      <div className="App">
        <div className='content'>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <ModalVehicle name={this.state.selectedVehicle.name}
                        model={this.state.selectedVehicle.model}
                        type={this.state.selectedVehicle.vehicle_class}
                        length={this.state.selectedVehicle.length}
                        manufacturer={this.state.selectedVehicle.manufacturer}
                        passenger={this.state.selectedVehicle.passengers}
                        crew={this.state.selectedVehicle.crew}
                        speed={this.state.selectedVehicle.max_atmosphering_speed}
                        autonomy={this.state.selectedVehicle.consumables}
                        price={this.state.selectedVehicle.cost_in_credits} />
        </Modal>
        <Vehicles data={this.state.vehicles} handleClick={this.handleClickRent} openModal={this.onOpenModal}/>
        <Basket data={this.state.basketOrder}/>
        </div>
      </div>
    )
  }
}

export default App