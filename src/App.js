import React, { Component } from 'react';
//import request from 'superagent';
import RenderPokemon from './RenderPokemon';

export default class App extends Component {

  state = {
    searchQuery: null,
    searchLevle: 0,
    getData: null,
    attacDefenc: 'attack',
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ searchQuery: value });
    console.log(this.state)
  }
  levelChange = (e) => {
    let value = e.target.value;
    if (value <= 0|| value - (Math.floor(value)) !== 0) {
      value = 0;
    }
    this.setState({ searchLevle: value });
    console.log(this.state)
  }
  sortBy = (e) => {
    const value = e.target.value;
    this.setState({ attacDefenc: value })
    console.log(value);

  }

  handleClick = () => {
    const getData = 'I am clicked';
    console.log(getData);
}

  render() {
    return (
      <div>
        i am here
        <input onChange={this.handleChange} />
        <input type="number" pattern="[0-9]" onChange={this.levelChange} />
        <select className="selctionStyle" onChange={this.sortBy}>
          <option value="attack">attack</option>
          <option value="defend">defend</option>
        </select>
        < button onClick={this.handleClick}>serch</button>
        < RenderPokemon />
      </div>
    )
  }
}
