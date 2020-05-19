import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  
  state = {
    pizzas: [],
    // formPizza: {
    //   topping: '',
    //   size: '',
    //   vegetarian: false
    // }

    id: null,
    size: '',
    topping: '',
    vegetarian: ''
  }
  
  componentDidMount() {
    //fetch pizzas and save them in state
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pizzas: data
      })
    })
  }
  
  //takes in pizza obj as parameter
  //originally passed in the pizza obj
  fillForm = (id) => {
    // console.log('fillForm pizza: ', pizza)
    // console.log('fillForm pizza topping:', pizza.topping)
    // console.log('fillForm pizza size:', pizza.size)
    // this.setState({formPizza: pizza})

    //chosen pizza is whichever has the same id as the id passed in
    let chosenPizza = this.state.pizzas.find(pizza => pizza.id === id)
    let {size, topping, vegetarian} = chosenPizza //pull out attributes
    this.setState({id, size, topping, vegetarian: vegetarian ? 'Vegetarian' : 'Not Vegetarian'})
  }

  editPizza = () => {
    //pizza here is just the value of what is changed in the form
    // console.log('form pizza topping: ', this.state.formPizza.size)
    // console.log('edit pizza id: ', id)
    // console.log('edit pizza: pizza:', pizza)
    // fetch(`http://localhost:3000/pizzas/${id}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     pizza
    //   })
    // })

    let {id, size, topping, vegetarian} = this.state
    fetch(`http://localhost:3000/pizzas/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        size, 
        topping,
        vegetarian: vegetarian === 'Vegetarian'
      })
    })
  }

  handleChange = (event) => {
    // console.log('handleChange event value: ', event.target.value)
    // console.log('handleChange event target: ', event.target)
    // const value = event.target
    // // const {value} = event.target.value
    // console.log('handleChange value after update: ', value)
    // this.setState({formPizza: value})
    console.log('updating...', event.target.name, ' to: ', event.target.value)
    this.setState({[event.target.name]: event.target.value})
  }
  
  render() {
    let {pizzas, id, topping, size, vegetarian} = this.state;
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          pizzas={pizzas}
          id={id}
          topping={topping}
          size={size}
          vegetarian={vegetarian}
          handleChange={this.handleChange}
          editPizza={this.editPizza}
        />
        <PizzaList pizzas={pizzas} fillForm={this.fillForm} />
      </Fragment>
    );
  }
}

export default App;
