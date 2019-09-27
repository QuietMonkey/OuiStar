import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-responsive-modal'
import { I18n, translate } from 'react-polyglot'

import './App.css'
import LocaleContext from './context/locale'

import Vehicles from './components/Vehicles'
import Basket from './components/Basket'
import ModalVehicle from './components/ModalVehicle'


class App extends Component {
  state = {
    open: false,
    vehicles: [],
    displayVehicles: [],
    selectedVehicle: [],
    basketOrder: [],
    locale: 'en',
    text: {}
  }

  

  getVehicles = async (scope) => {
    let arrayResults = []
    // try {

    //   await axios.get('https://swapi.co/api/vehicles/')
    //     .then(function (response) {
    //       // handle success
    //       scope.setState({vehicles: response.data.results})
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     })
    //   } catch (error) {
    //     console.error(error)
    //   }

    const response = await axios.get('https://swapi.co/api/vehicles/?page=1')
    this.createUnikArray(response.data.results, arrayResults)

    const response2 = await axios.get('https://swapi.co/api/vehicles/?page=2')
    this.createUnikArray(response2.data.results, arrayResults)

    const response3 = await axios.get('https://swapi.co/api/vehicles/?page=3')
    this.createUnikArray(response3.data.results, arrayResults)

    const response4 = await axios.get('https://swapi.co/api/vehicles/?page=4')
    this.createUnikArray(response4.data.results, arrayResults)
    arrayResults.splice(arrayResults.length - 3, 3)
    this.setState({ vehicles: arrayResults })

    this.displayVehicles()
  }

  displayVehicles = () => {
    this.setState({ displayVehicles: this.state.vehicles })
  }

  createUnikArray = (data, array) => {
    data.map((one) => array.push(one))
  }

  componentDidMount = () => {
    this.getVehicles()
    this.getLocale()
  }

  componentDidUpdate = () => {
    this.getLocale()
  }

  handleClickRent = async (nameVehicle, priceVehicle) => {
    const rentVehicle = {
      name: nameVehicle,
      price: priceVehicle
    }

    const newStateToPush = this.state.basketOrder
    newStateToPush.push(rentVehicle)
    this.setState({ basketOrder: newStateToPush })
    this.onCloseModal()
  }

  handleClickCancel = (index) => {
    const newStatetoSplice = this.state.basketOrder
    newStatetoSplice.splice(index, 1)
    this.setState({ basketOrder: newStatetoSplice })
  }

  onOpenModal = (index) => {
    this.setState({ selectedVehicle: this.state.vehicles[index] })
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  handleSearch = (e) => {
    const results = this.state.vehicles.filter(vehicle => vehicle.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({ displayVehicles: results })
  }

  handleChangeLocale = (e) => {
    this.setState({ locale: e.target.value })
  }

  getLocale = async() => {
      const result = await axios.get(`/translations/${this.state.locale}.json`)
      // In a real app, you should consider caching the results in an object.
      // To prevent requests for same locale again.
      this.setState({ text: result.data })
  }


  render() {

    return (
      <LocaleContext.Provider value={this.state.locale}>
        <I18n locale={this.state.locale} text={this.state.text}>

          <div className="App">
            <div className='header'>
              <input className='inputSearch' onChange={this.handleSearch} placeholder='Search by name..'></input>
              <img src={`/flags/${this.state.locale}.svg`} alt={`Flag of ${this.state.locale}`} width="15px" />
              <select onChange={this.handleChangeLocale}>
                <option value="en">English</option>
                <option value="fr">French</option>
              </select>

              <span className='spaceShips'></span>

              <div className='logo'>
                <h1>{this.state.text.logo}</h1>
                <h2>{this.state.text.textLogo}</h2>
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
                  handleClick={this.handleClickRent}
                />

              </Modal>

              <Vehicles data={this.state.displayVehicles} openModal={this.onOpenModal} />
              <Basket data={this.state.basketOrder} handleClick={this.handleClickCancel} />
            </div>
          </div>

        </I18n>
      </LocaleContext.Provider>
    )
  }
}

export default App