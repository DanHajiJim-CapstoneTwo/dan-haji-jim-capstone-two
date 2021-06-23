// DEPENDENCIES
import React, { Component } from "react";

// STYLING
import "./Pokemon.css";

// CLASS COMPONENT
export default class Pokemon extends Component {
  constructor() {
    super();
    // STATE
    this.state = {
      caught: false,
      level: 1,
    };
  }
  //ADD TO CART
  // add "quantity: 0," to state
  // addToCart() {
  //   this.setState({quantity: this.state.quantity + 1})
  // }

  // CATCH POKEMON
  catch() {
    this.setState({ caught: true });
  }
  // RELEASE POKEMON
  release() {
    this.setState({ caught: false, level: 1 });
  }
  // LEVEL UP POKEMON
  evolve() {
    const { level: currentLevel } = this.state;
    this.setState({ level: currentLevel + 1 });
  }
  // RENDER POKEMON
  render() {
    // const {name, weight, ability} = this.props
    const { name } = this.props;
    const { level, caught } = this.state;
    return (
      <div className="pokemon">
        <h4 className="name">Name: {name}</h4>
        <span className="weight">Weight: {}</span>
        <span className="ability">Ability: {}</span>
        <div className="info">
          <h5>Level {level}</h5>
          {caught ? (
            <button onClick={(event) => this.evolve()}>Level up!</button>
          ) : null}
        </div>
        <br />
        <div className="controls">
          {caught ? (
            <button onClick={(event) => this.release()}>Release</button>
          ) : (
            <button onClick={(event) => this.catch()}>Catch</button>
          )}
        </div>
        <br />
        <div className="cart">
          <button onClick={(event) => this.addToCart()}>Add to Cart</button>
        </div>
      </div>
    );
  }
}
