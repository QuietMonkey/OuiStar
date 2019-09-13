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
    displayVehicles: [],
    selectedVehicle: [],
    basketOrder: []
  }

  getVehicles = async(scope) => {
    let arrayResults = []
    try {

      await axios.get('https://swapi.co/api/vehicles/')
        .then(function (response) {
          // handle success
          scope.setState({vehicles: response.data.results})
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      } catch (error) {
        console.error(error)
      }
      
      // const response = await axios.get('https://swapi.co/api/vehicles/?page=1')
      // this.createUnikArray(response.data.results, arrayResults)
      
      // const response2 = await axios.get('https://swapi.co/api/vehicles/?page=2')
      // this.createUnikArray(response2.data.results, arrayResults)
      
      // const response3 = await axios.get('https://swapi.co/api/vehicles/?page=3')
      // this.createUnikArray(response3.data.results, arrayResults)
      
      // const response4 = await axios.get('https://swapi.co/api/vehicles/?page=4')
      // this.createUnikArray(response4.data.results, arrayResults)
      // arrayResults.splice(arrayResults.length -3, 3)
      // this.setState({vehicles: arrayResults})
      
      this.displayVehicles()
  }

  displayVehicles = () => {
    this.setState({displayVehicles: this.state.vehicles})
  }

  createUnikArray = (data, array) => {
    data.map((one)=> array.push(one))
  }

  componentDidMount = () =>{
    this.getVehicles(this)
  }

  handleClickRent = async(nameVehicle, priceVehicle) => {
    const rentVehicle = { name: nameVehicle,
                          price: priceVehicle }

    const newStateToPush = this.state.basketOrder
    newStateToPush.push(rentVehicle)
    this.setState({basketOrder: newStateToPush})
    this.onCloseModal()
  }

  handleClickCancel = (index) => {
    const newStatetoSplice = this.state.basketOrder
    newStatetoSplice.splice(index, 1)
    this.setState({basketOrder: newStatetoSplice})
  }

  onOpenModal = (index) => {
    this.setState({ selectedVehicle: this.state.vehicles[index]})
    this.setState({ open: true })
  }
 
  onCloseModal = () => {
    this.setState({ open: false })
  }

  handleSearch = (e) => {
    const results = this.state.vehicles.filter(vehicle => vehicle.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({displayVehicles: results})
  }


  render() {
    console.log(this.state)
    
    return (
      <div className="App">
        <div className='header'>
          <input onChange={this.handleSearch} placeholder='Search by name..'></input>
          <div className='logo'>
            <h1>WE.STAR</h1>
            <h2>THE BEST OF THE REBELLION</h2>
          </div>
        </div>
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
                          price={this.state.selectedVehicle.cost_in_credits} 
                          handleClick={this.handleClickRent} />
          </Modal>

          <Vehicles data={this.state.displayVehicles} openModal={this.onOpenModal}/>
          <Basket data={this.state.basketOrder} handleClick={this.handleClickCancel}/>
        </div>
      </div>
    )
  }
}

export default App