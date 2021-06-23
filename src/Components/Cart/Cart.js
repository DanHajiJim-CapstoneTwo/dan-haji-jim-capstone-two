import React, { Component } from "react";
import "./Cart.css";

export default class Cart extends Component {
  state = {
    cartItems: 0,
    product: "",
    price: "",
  };

  render() {
    return (
      <div className="container">
        <h4>
          Cart
          <span style={{ float: "right" }}>
            <b>4</b>
          </span>
        </h4>
        <p>
          Product 1
          <span style={{ float: "right" }}>
            <b>$15</b>
          </span>
        </p>
        <p>
          Product 2
          <span style={{ float: "right" }}>
            <b>$25</b>
          </span>
        </p>
        <p>
          Product 3
          <span style={{ float: "right" }}>
            <b>$40</b>
          </span>
        </p>
        <p>
          Product 4
          <span style={{ float: "right" }}>
            <b>$45</b>
          </span>
        </p>
        <hr></hr>
        <p>
          Subtotal
          <span style={{ float: "right" }}>
            <b>$125</b>
          </span>
        </p>
        <p>
          Tax (10%)
          <span style={{ float: "right" }}>
            <b>$12.50</b>
          </span>
        </p>
        <p>
          Total
          <span style={{ float: "right" }}>
            <b>$137.50</b>
          </span>
        </p>
      </div>
    );
  }
}
