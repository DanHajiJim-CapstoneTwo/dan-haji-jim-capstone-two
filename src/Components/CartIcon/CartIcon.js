import React, { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartIcon.css";

class CartIcon extends Component {
  render() {
    return (
      <div>
        <p style={{ float: "right" }}>
          <FaShoppingCart size={24} /> {this.props.cartCount}
        </p>
      </div>
    );
  }
}

export default CartIcon;
