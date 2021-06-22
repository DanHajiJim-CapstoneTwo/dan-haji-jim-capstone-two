import React, { Component } from "react";

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <h1>Check Out Page</h1>
        <form>
          <h3>Customer Information</h3>
          <div>
            <label htmlFor="count">Name: </label>
            <input id="count" type="text" name="count" />
          </div>
        </form>
        <form>
          <div>
            <label htmlFor="count">Address: </label>
            <input id="count" type="text" name="count" />
          </div>
        </form>
        <form>
          <div>
            <label htmlFor="count">Phone Number: </label>
            <input id="count" type="text" name="count" />
          </div>
        </form>
      </div>
    );
  }
}
