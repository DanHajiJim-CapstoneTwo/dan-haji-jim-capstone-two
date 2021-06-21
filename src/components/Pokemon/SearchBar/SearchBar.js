import React, { Component } from "react";

class SearchBar extends Component {
  onSubmitHandler = (event) => {
    event.preventDefault();
    // const { pokemonType } = this.state;
    fetch(`https://pokeapi.co/api/v2/type/water/`)
      .then((response) => response.json())
      .then(
        (data) => {
          this.props.handlePokemonsUpdate(data.pokemon);
        }
        // .catch(console.log)
      );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <label htmlFor="pokemonType">
            Enter Pokemon Type:
            <input
              type="text"
              id="pokemonType"
              name="pokemonType"
              // value={pokemonType}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
