import React, { Component } from "react";
import "./Pokemon.css";

class Pokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      type: "",
      species: "",
      url: "",
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.name,
          type: data.types[0].type.name,
          species: data.species.name,
          url: data.sprites.front_default,
        });
      });
  }

  render() {
    return (
      <section>
        <div className="container">
          <div>Pokemon Info</div>
          <img className="fixed-width" src={this.state.url} alt="Bulbasaur" />
          <div>
            <h2>{this.state.name}</h2>
            <p>{this.state.type}</p>
            <p>{this.state.species}</p>
            <button>$30</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Pokemon;
