// import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon/Pokemon/Pokemon";
import SearchBar from "./components/Pokemon/SearchBar/SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }

  handlePokemonsUpdate = (pokemons) => {
    // console.log("Pokemon Data:", pokemons);
    this.setState({
      pokemons: pokemons,
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar handlePokemonsUpdate={this.handlePokemonsUpdate} />
        {this.state.pokemons.map((pokemon, index) => {
          return  <Pokemon key={`${pokemon}-${index}`} url={pokemon.pokemon.url} />;
        })}
      </div>
    );
  }
}

export default App;
