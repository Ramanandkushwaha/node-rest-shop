
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    products: []
  }

  componentDidMount(){
    this.getProducts();
  }

  getProducts = _ => {
    fetch('http://13.232.217.86:8000/products')
    .then(response => response.json())
    .then(response => this.setState({products: response.data})) 
    .catch(err => console.error(err))
  }

  addProduct = _ => {
  }


  renderProduct = ({ _id, name, price}) => <div key={_id}> {name}> {name}</div>


  render() {
    const {products} = this.state;
    return (
      <div className="App">
      {products.map(this.renderProduct)}
      </div>
    );
  }
}

export default App;
