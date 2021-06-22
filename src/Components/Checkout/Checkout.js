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
            <input id="count" type="text" name="count" required />
          </div>
          <div>
            <label htmlFor="count">Last Name: </label>
            <input id="count" type="text" name="count" required />
          </div>
          <div>
            <label htmlFor="count">Address: </label>
            <input id="count" type="text" name="count" required />
          </div>
          <div>
            <label htmlFor="count">Phone Number: </label>
            <input id="count" type="phone" name="count" required />
          </div>
        </form>
      </div>
    );
  }
}
