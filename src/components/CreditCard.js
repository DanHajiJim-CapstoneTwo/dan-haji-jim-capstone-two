import React, { Component } from "react";

export default class CreditCard extends Component {
  render() {
    return (
      <div>
        <form>
          <h3>Card Information</h3>
          <div>
            <label htmlFor="count">Credit Card: </label>
            <select name="selectList" id="selectLIst" required>
              <option value="option 1">Select One...</option>
              <option value="option 2">VISA</option>
              <option value="option 3">Mastercard</option>
              <option value="option 4">American Express</option>
            </select>
          </div>
          <div>
            <label htmlFor="count">Card Holder Name: </label>
            <input id="count" type="text" name="count" required />
          </div>
          <div>
            <label htmlFor="count">Card #: </label>
            <input
              id="count"
              type="text"
              name="count"
              maxlength="19"
              required
            />
          </div>
          <div>
            <label htmlFor="count">Expiration Date: </label>
            <input id="count" type="month" name="count" required />
          </div>
          <div>
            <label htmlFor="count">CC #: </label>
            <input id="count" type="text" name="count" maxlength="3" required />
          </div>
          <input type="submit" value="Buy Now!" />
        </form>
      </div>
    );
  }
}
