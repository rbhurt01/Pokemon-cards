import React, { Component } from "react";

import "./Pokecard.css";
const API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

class Pokecard extends Component {
  render() {
    let padToThree = (number) =>
      number < 999 ? `00${number}`.slice(-3) : number;

    let imageSRC = `${API}${padToThree(this.props.id)}.png`;
    return (
      <div className="pokecard">
        <h1 className="pokecard-title">{this.props.name}</h1>
        <div className="pokecard-image">
          <img src={imageSRC} alt={this.props.name}></img>
        </div>
        <div className="pokecard-data">Type: {this.props.type}</div>
        <div className="pokecard-data">Experience: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
