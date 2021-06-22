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
          weight: data.weight,
          url: data.sprites.other["official-artwork"].front_default,
        });
      });
  }

  render() {
    return (
      <section>
        <div className="container">
          <div>Pokemon Info</div>
          <img className="fixed-width" src={this.state.url} alt={this.state.name} />
          <div>
            <h2>{this.state.name.toUpperCase()}</h2>
            <p>{this.state.type.replace(/\w\S*/g, function(txt)
            {return txt.charAt(0).toUpperCase() + 
            txt.substr(1).toLowerCase()})}</p>
            <p>{this.state.weight} lbs.</p>
            <button>$30</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Pokemon;
