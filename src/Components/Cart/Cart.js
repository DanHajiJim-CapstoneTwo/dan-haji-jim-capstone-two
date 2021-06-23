import React, { Component } from "react";
import { FaKey } from "react-icons/fa";
import "./Cart.css";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: this.props.pokemons,
    };
  }

  render() {
    let sum = 0;
    for (let i = 0; i < this.state.cartItems.length; i++) {
      sum = sum + this.state.cartItems[i].price;
    }

    let tax = sum * 0.1;

    let total = sum + tax;

    return (
      <div className="container">
        <h4>
          Cart
          <span style={{ float: "right" }}>
            <b>4</b>
          </span>
        </h4>
        <div>
          <ol>
            {this.props.pokemons.map((name) => {
              return (
                <div>
                  <li>{name.name}</li>
                  <span style={{ float: "right" }}>
                    ${name.price.toFixed(2)}
                  </span>
                </div>
              );
            })}
            ,
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
      </div>
    );
  }
}
