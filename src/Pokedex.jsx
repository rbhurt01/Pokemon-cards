import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let result_title;
    if (this.props.isWinner) {
      result_title = <h2 className="Winning-hand"> Winning Hand</h2>;
    } else {
      result_title = <h2 className="Losing-hand"> Losing Hand</h2>;
    }
    return (
      <div className="pokedex">
        <h1>Player {this.props.player}</h1>
        {result_title}
        <div className="pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
        <h1>Total = {this.props.expr}</h1>
      </div>
    );
  }
}

export default Pokedex;
