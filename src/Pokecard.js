import React, {Component} from 'react';
import './Pokecard.css';
// const pokeAPI = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const pokeAPI = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number)

class Pokecard extends Component{
    render(){
        let imgSrc = `${pokeAPI}${padToThree(this.props.id)}.png`;

        return (
        <div className="Pokecard">
            <h1 className="Pokecard-name">{this.props.name}</h1>
            <div className="Pokecard-img">
                <img src={imgSrc} alt={this.props.name} />
            </div>
            <p className="Pokecard-data">TYPE: {this.props.type}</p>
            <p className="Pokecard-data">EXP: {this.props.exp}</p>
        </div>
        )
    }
}

export default Pokecard;