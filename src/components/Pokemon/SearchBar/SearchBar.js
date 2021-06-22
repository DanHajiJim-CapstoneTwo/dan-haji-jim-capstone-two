import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }


 
  //EVENT HANDLERS
 

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }


  onSubmitHandler = (event) => {
    event.preventDefault();
  //  const {value} = this.state;
  // console.log(this.state.value)
    fetch(`https://pokeapi.co/api/v2/type/${this.state.value}/`)
      .then((response) => response.json())
      .then(
        (data) => {
          // console.log(data.pokemon);
          this.props.handlePokemonsUpdate(data.pokemon);
          
        }
        // .catch(console.log)
      )
      .catch((err) => {
        (console.log(err.message))
      })};


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
              name="value"
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
