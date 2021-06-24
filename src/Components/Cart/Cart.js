import React, { Component } from "react";
import "./Cart.css";

export default class Cart extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cartItems: this.props.pokemons,
  //   };
  // }

  // handleCartUpdate = (pokemon) => {
  //   const pokemonR = [...this.state.cartItems];
  //   pokemonR.push(pokemon);

  //   this.setState({
  //     cartItems: pokemonR,
  //   });
  // };

  render() {
    const cartLength = this.props.cartItems.length;

    let sum = 0;
    for (let i = 0; i < cartLength; i++) {
      sum = sum + this.props.cartItems[i].price;
    }

    let tax = sum * 0.1;

    let total = sum + tax;

    const cartItems = this.props.cartItems.map((name) => {
      return (
        <li>
          {name.name.toUpperCase()}{" "}
          <span style={{ float: "right" }}>${name.price.toFixed(2)}</span>
        </li>
      );
    });

    return (
      <div className="container">
        <div className="">
          <h4>
            Cart
            <span className="price">
              <b>{cartLength}</b>
            </span>
          </h4>
        </div>
        <form>
          <ol>{cartItems}</ol>
          <p>
            Subtotal: <span className="price">${sum.toFixed(2)}</span>
          </p>
          <p>
            Tax (10%)
            <span className="price">
              <b>${tax.toFixed(2)}</b>
            </span>
          </p>
          <p>
            Total
            <span className="price">
              <b>${total.toFixed(2)}</b>
            </span>
          </p>
          <input type="submit" value="Checkout!" className="price" />
        </form>
      </div>
    );
  }
}
