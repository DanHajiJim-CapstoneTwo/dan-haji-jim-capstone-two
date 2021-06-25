// DEPENDENCIES
import React, { Component } from "react";
import axios from "axios";
// CHILD COMPONENTS
import Pokemon from "../Pokemon/Pokemon";
// import Card from "../Card/Card";
// STYLING
import "./PokeProducts.css";

// CLASS COMPONENT
export default class Pokedex extends Component {
  constructor() {
    super();
    // STATE
    this.state = {
      searchInput: "",
      pokemon: [],
    };
  }
  // SEARCH INPUT CHANGE
  handleSearch(value) {
    this.setState({ searchInput: value });
  }
  // fetch without axios
  // componentDidMount() {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
  //     .then((data) => data.json())
  //     .then((data) => {
  //       this.setState({
  //         // console.log("PokeAPI response: ", data);
  //         pokemon: data.results,
  //       })
  //         .catch(console.log());
  //     })
  // }
  componentDidMount() {
    // GET POKEMON
    // https://pokeapi.co/api/v2/pokemon/
    // https://pokeapi.co/api/v2/pokemon/?offset=50&limit=50
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10").then((response) => {
      console.log("PokeAPI response: ", response);
      this.setState({
        pokemon: response.data.results,
      });
    });
  }
  // RENDER POKEDEX
  render() {
    // console.log(this.state);
    // const { pokemon, searchInput } = this.state;
    const pokemon = this.state.pokemon;
    const searchInput = this.state.searchInput;

    // Search filter and pokemon components
    const pokeList = pokemon
      .filter((pocketMonster) => pocketMonster.name.includes(searchInput))
      .map((pocketMonster) => {
        console.log(pocketMonster);
        return (
          <Pokemon
            key={pocketMonster.url}
            name={pocketMonster.name}
            url={pocketMonster.url}
            cartItems={this.props.cartItems}
            handleCartUpdate={this.props.handleCartUpdate}
          />
        );
      });
    return (
      <div className="pokedex">
        <input
          className="search"
          type="text"
          placeholder="Search Pokemon Names"
          onChange={(event) => this.handleSearch(event.target.value)}
        />
        <div className="list">{pokeList}</div>
      </div>
    );
  }
}
