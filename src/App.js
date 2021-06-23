// DEPENDENCIES
import React, { Component } from "react";
// CHILD COMPONENTS
import Header from "./Components/Header/Header";
import PokeProducts from "./Components/PokeProducts/PokeProducts";
import Card from "./Components/Card/Card";
// STYLING
import "./App.css";

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
      </div>
    );
  }
}
//change return from SearchBar "capstone"
//handleChange = (event) => {
//   this.setState({value: event.target.value});
// }
export default App;
