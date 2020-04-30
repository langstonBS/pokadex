import React, { Component } from 'react'
import './RenderPokemon.css';

export default class RenderPokemon extends Component {
    render() {
        return (
            <li>
                <div className="immageContainer">
                    <h2>{this.props.pokemon.pokemon}</h2>
                    <p>Pokemon type: {this.props.pokemon.type_1}</p>
                    <p>Attack levle: {this.props.pokemon.attack}</p>
                    <p>Defense levle: {this.props.pokemon.defense}</p>
                    <div className="immageContatin">
                        <img alt={this.props.pokemon.pokemon}
                        src={this.props.pokemon.url_image}></img>
                    </div>
                    
                </div>
            </li>
        )
    }
}
