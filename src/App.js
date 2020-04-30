import React, { Component } from 'react';
import request from 'superagent';
import RenderPokemon from './RenderPokemon';
import './App.css';

export default class App extends Component {

  state = {
    searchQuery: '',
    searchLevle: 0,
    data: [{}],
    attacDefenc: 'attack',
    ascDesc: 'asc',
    page: 1,
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ searchQuery: value });
  };

  levelChange = (e) => {
    let value = e.target.value;
    if (value <= 0 || value - (Math.floor(value)) !== 0) {
      value = 0;
    }
    this.setState({ searchLevle: value });
  };

  sortBy = (e) => {
    const value = e.target.value;
    this.setState({ attacDefenc: value })
  }

  asendingDesending = (e) => {
    const value = e.target.value;
    this.setState({ ascDesc: value })
  }

  handleClick = async () => {
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&perPage=24&sort=${this.state.attacDefenc}&direction=${this.state.ascDesc}`);
    this.setState({ data: fetchedData.body.results });
  }

  pagePlacePrevus = async () => {
    let curentPage = this.state.page;
    let Newpage
    if (curentPage === 1) {
      Newpage = curentPage;
    } else {
      Newpage = curentPage - 1;
    }
    this.setState({ page: Newpage });
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&perPage=24&sort=${this.state.attacDefenc}&direction=${this.state.ascDesc}&page=${this.state.page}`);
    this.setState({ data: fetchedData.body.results });
  }
  
  pagePlaceNext = async () => {
    let curentPage = this.state.page;
    let Newpage = curentPage + 1;
    this.setState({ page: Newpage });
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&perPage=24&sort=${this.state.attacDefenc}&direction=${this.state.ascDesc}&page=${this.state.page}`);
    this.setState({ data: fetchedData.body.results });

}



  render() {
    return (
      <>
        <div className="searchList">
            <span className="nameSerch">
              <h3>name</h3>
              <input onChange={this.handleChange} />
          </span>
          <div>
              <h3>Defence</h3>
            <input type="number" pattern="[0-9]" onChange={this.levelChange} />
            </div>
            <span className="sortby">
              <h3>Order by</h3>
              <select className="selctionStyle" onChange={this.sortBy}>
                <option value="attack">attack</option>
                <option value="defense">defense</option>
              </select>
              <select className="selctionStyle" onChange={this.asendingDesending}>
                <option value="asc">Week</option>
                <option value="desc">Strong</option>
              </select>
          </span>
          </div>
            <span className="search">
          < button onClick={this.pagePlacePrevus}>Prevus</button>
          < button onClick={this.handleClick}>Search</button>
          < button onClick={this.pagePlaceNext}>Next</button>
          </span>
          
          <span className="renderList">  
        <ul>
          {this.state.data.map(item => <RenderPokemon pokemon={item} />)}
        </ul>
        </span>
      </>
    )
  }
}
