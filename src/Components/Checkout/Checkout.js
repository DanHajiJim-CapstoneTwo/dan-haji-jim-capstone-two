import React, { Component } from "react";

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <h1>Check Out Page</h1>
        <form>
          <h3>Customer Information</h3>
          <div>
            <label htmlFor="count">First Name: </label>
            <input
              id="count"
              type="text"
              name="count"
              placeholder="John..."
              required
            />
          </div>
          <div>
            <label htmlFor="count">Last Name: </label>
            <input
              id="count"
              type="text"
              name="count"
              placeholder="Doe..."
              required
            />
          </div>
          <div>
            <label htmlFor="count">Address: </label>
            <input
              id="count"
              type="text"
              name="count"
              placeholder="123 Main Street..."
              required
            />
          </div>
          <div>
            <label htmlFor="count">Phone Number: </label>
            <input
              id="count"
              type="phone"
              name="count"
              placeholder="(212)123-4567"
              required
            />
          </div>
        </form>
      </div>
    );
  }
}
