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
    typePram: '',
    dataType: [ ]
  }

  async componentDidMount() {
    const sortOrder = this.state.ascDesc; 
    const  sortOder2 = this.state.attacDefenc;
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?&sort=${sortOder2}&direction=${sortOrder}&page=1`)    
    this.setState({ data: fetchedData.body.results });
    const fetchedDatabar = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/types`);
    this.setState({ dataType: fetchedDatabar.body });

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
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&perPage=24&type_1=${this.state.typePram}&sort=${this.state.attacDefenc}&direction=${this.state.ascDesc}&page=${this.state.page}`);
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
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&perPage=24&type_1=${this.state.typePram}&sort=${this.state.attacDefenc}&direction=${this.state.ascDesc}&page=${this.state.page}`);
    this.setState({ data: fetchedData.body.results });
  }
  tyepofPokemon = (e) => {
    const value = e.target.value;
    this.setState({ typePram: value });
  };
  
  pagePlaceNext = async () => {
    let curentPage = this.state.page;
    let Newpage = curentPage + 1;
    this.setState({ page: Newpage });
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&perPage=24&type_1=${this.state.typePram}&sort=${this.state.attacDefenc}&direction=${this.state.ascDesc}&page=${this.state.page}`);
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
              <h3>Select Type</h3>
              <select className="Type" onChange={this.tyepofPokemon}>
              {this.state.dataType.map(item => <option value= {item.type} > {item.type} </option>)}
              </select>
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
