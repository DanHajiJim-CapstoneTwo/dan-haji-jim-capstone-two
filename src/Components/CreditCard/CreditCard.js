import React, { Component } from "react";
// STYLING
import "./CreditCard.css";

export default class CreditCard extends Component {
  jokeList = () => {
    console.log("hello world");
    const jokes = [
      "Why do cows have hooves instead of feet? A: They lactose.",
      "What do you call a cow with no legs? Ground beef.",
      "What do you call a cow with two legs? Lean beef.",
      "What do you call a cow with all of its legs? High steaks.",
    ];
    let userInput = prompt("Who was the first DI/AMEX Bootcamp instructor?");
    if (userInput === "Dana" || userInput === "DANA" || userInput === "dana") {
      return alert(jokes[Math.floor(Math.random() * jokes.length)]);
    }
  };
  render() {
    return (
      <div>
        <form>
          <h3>Card Information</h3>
          <div>
            <label className="placeholder" htmlFor="count">
              Credit Card:{" "}
            </label>
            <select name="selectList" id="selectLIst" required>
              <option value="option 1">Select One...</option>
              <option value="option 2">VISA</option>
              <option value="option 3">Mastercard</option>
              <option value="option 4">American Express</option>
            </select>
          </div>
          <div>
            <label className="placeholder" htmlFor="count">
              Card Holder Name:{" "}
            </label>
            <input
              id="count"
              type="text"
              name="count"
              placeholder="John Doe..."
              required
            />
          </div>
          <div>
            <label className="placeholder" htmlFor="count">
              Card #:{" "}
            </label>
            <input
              id="count"
              type="text"
              name="count"
              maxLength="19"
              placeholder="1111-2222-3333-4444"
              required
            />
          </div>
          <div>
            <label className="placeholder" htmlFor="count">
              Expiration Date:{" "}
            </label>
            <input id="count" type="month" name="count" required />
          </div>
          <div>
            <label className="placeholder" htmlFor="count">
              CC #:{" "}
            </label>
            <input
              id="count"
              type="text"
              name="count"
              maxLength="3"
              placeholder="123"
              required
            />
          </div>
          <div>
            <label htmlFor="count">Discount Code: </label>
            <button onClick={this.jokeList} type="button">
              Apply Code!
            </button>
            {/* <button
              onClick={this.jokeList}
              input
              type="submit"
              value="Apply Code!"
            /> */}
          </div>
        </form>
      </div>
    );
  }
}
