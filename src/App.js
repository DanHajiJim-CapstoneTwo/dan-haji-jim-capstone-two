
// DEPENDENCIES
import React, { Component } from "react";

// CHILD COMPONENTS
import Header from "./Components/Header/Header";
import PokeProducts from "./Components/PokeProducts/PokeProducts";
import Card from "./Components/Card/Card";
import Checkout from "./Components/Checkout/Checkout";
import CreditCard from "./Components/CreditCard/CreditCard";
import Cart from "./Components/Cart/Cart";
import CartIcon from "./Components/CartIcon/CartIcon";
// STYLING
import "./App.css";

const fakedata = [
  {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
    price: 30,
  },
  {
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/2/",
    price: 30,
  },
  {
    name: "venusaur",
    url: "https://pokeapi.co/api/v2/pokemon/3/",
    price: 30,
  },
  {
    name: "Charizard",
    url: "https://pokeapi.co/api/v2/pokemon/3/",
    price: 30,
  },
];

// CLASS COMPONENT
class App extends Component {
  constructor() {
    super();
    // STATE
    this.state = {
      owner: "",
    };
  }
  // RENDER APP
  render() {
    const { owner } = this.state;
    return (
      <div className="App">
        <Header name={owner} />
        <PokeProducts />
        <Card />
      <CartIcon />
      <Checkout />
      <CreditCard />
      <Cart pokemons={fakedata} />
      </div>
    );
  }
}

export default App;
