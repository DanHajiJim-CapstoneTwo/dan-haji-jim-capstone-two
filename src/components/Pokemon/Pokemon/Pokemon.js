import React, { Component } from "react";
import "./Pokemon.css";

class Pokemon extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div>Pokemon Info</div>
          <img
            className="fixed-width"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
            alt="Bulbasaur"
          />
          <div>
            <h2>Bulbasaur</h2>
            <p>Grass/Poison Type</p>
            <p>The Seed Pokemon</p>
            <button>$30</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Pokemon;
