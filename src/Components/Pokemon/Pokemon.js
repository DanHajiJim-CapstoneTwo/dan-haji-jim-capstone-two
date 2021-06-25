// DEPENDENCIES
import React, { Component } from "react";
import axios from "axios";

// STYLING
import "./Pokemon.css";

// CLASS COMPONENT
export default class Pokemon extends Component {
  constructor() {
    super();
    // STATE
    this.state = {
      caught: false,
      level: 1,
      weight: "",
      ability: "",
      imgSrc: "",
      imgBck: "",
      price: 30,
    };
  }
  componentDidMount() {
    // GET POKEMON
    // https://pokeapi.co/api/v2/pokemon/
    // https://pokeapi.co/api/v2/pokemon/?offset=50&limit=50
    axios
      .get(this.props.url)
      .then((response) => {
        console.log("PokeAPI response: ", response);
        this.setState({
          weight: response.data.weight,
          ability: response.data.abilities[0].ability.name,
          imgSrc: response.data.sprites.front_default,
          imgBck: response.data.sprites.back_default,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // ADD TO CART
  // add "quantity: 0," to state
  // quantity: this.state.quantity + 1
  addToCart() {
    this.setState({
      name: this.props.name,
      weight: this.props.weight,
      imgSrc: this.props.imgSrc,
      ability: this.props.ability,
    });
  }

  // CATCH POKEMON
  catch() {
    this.setState({ caught: true });
  }
  // RELEASE POKEMON
  release() {
    this.setState({ caught: false, level: 1 });
  }
  // LEVEL UP POKEMON
  evolve() {
    const { level: currentLevel } = this.state;
    this.setState({ level: currentLevel + 1 });
  }

  // RENDER POKEMON
  render() {
    //state needs to render
    const { name } = this.props;
    const { level, caught, weight, ability, imgSrc, imgBck, price } =
      this.state;
    return (
      <div className="pokemon">
        <h3 className="name">Name: {name}</h3>
        <div className="imgContainer">
          <img src={imgSrc} alt="name on front" />
          <img src={imgBck} alt="name on back" />
        </div>
        <p className="weight">Weight: {weight}</p>
        <p className="ability">Ability: {ability}</p>
        <div className="info">
          <h5>Level {level}</h5>
          {caught ? (
            <button onClick={(event) => this.evolve()}>Level up!</button>
          ) : null}
        </div>
        <br />
        <div className="controls">
          {caught ? (
            <button onClick={(event) => this.release()}>Release</button>
          ) : (
            <button onClick={(event) => this.catch()}>Catch</button>
          )}
        </div>
        <br />
        <div className="cart">
          <button
            onClick={(event) =>
              this.props.handleCartUpdate({ name, imgSrc, price })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}
