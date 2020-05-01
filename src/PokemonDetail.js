import React, { Component } from 'react'
import request from 'superagent';
import RenderPokemon from './RenderPokemon';

export default class PokemonDetail extends Component {
    state = {
        name: null,
        loading: true
    }

    async componentDidMount() {

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.props.match.params.name}`)
        this.setState({ name: data.body})
        console.log(this.state.name);
    }


    render() {
        return (

            <>
                You have selected a Pokemon
                {
                    this.state.name 
                        ?  <RenderPokemon pokemon={this.state.name} />
                        : <div>Loading</div>
                }
               
         </>

    
        )
    }
}
