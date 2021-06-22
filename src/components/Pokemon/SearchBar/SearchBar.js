import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }


  getInitialState = () => ({
  value: "",
})

  resetState = () => {
  this.setState(this.getInitialState())
}
  //EVENT HANDLERS
 

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }


  onSubmitHandler = (event) => {
    event.preventDefault();
  //  const {value} = this.state;
    fetch(`https://pokeapi.co/api/v2/type/${this.state.value}/`)
      .then((response) => response.json())
      .then(
        (data) => {
          this.props.handlePokemonsUpdate(data.pokemon);
        }
        // .catch(console.log)
      );

  };


  //RENDER
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
              onChange={this.handleChange}
              value={this.state.value}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
