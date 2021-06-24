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

    return (
      <div className="container">
        <h4>
          Cart
          <span style={{ float: "right" }}>
            <b>{cartLength}</b>
          </span>
        </h4>
        <form>
          <div>
            <ol>
              {this.props.cartItems.map((name) => {
                return (
                  <div>
                    <li>
                      {name.name}{" "}
                      <span style={{ float: "right" }}>
                        ${name.price.toFixed(2)}
                      </span>
                    </li>
                  </div>
                );
              })}
            </ol>
          </div>
          <hr></hr>
          <p>
            Subtotal: <span style={{ float: "right" }}>${sum.toFixed(2)}</span>
          </p>
          <p>
            Tax (10%)
            <span style={{ float: "right" }}>
              <b>${tax.toFixed(2)}</b>
            </span>
          </p>
          <p>
            Total
            <span style={{ float: "right" }}>
              <b>${total.toFixed(2)}</b>
            </span>
          </p>
          <input type="submit" value="Checkout!" style={{ float: "right" }} />
        </form>
      </div>
    );
  }
}
