import React, { Component } from 'react';
import request from 'superagent';
import RenderPokemon from './RenderPokemon';
import SerchQurryPage from './SerchQurryPage';
import './App.css';


export default class SearchPage extends Component {
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
    const searchParams = new URLSearchParams(window.location.search);
    const pageQuery = searchParams.get('page');
    const pokemonQuery = searchParams.get('pokemon')
    console.log(pokemonQuery);
    if (pokemonQuery){
      this.setState({ searchQuery: pokemonQuery })
    }
    if (pageQuery) {
      let startPage = 1;
      if (searchParams.get('page')) {
        startPage = searchParams.get('page');
      }
      await this.serchMethod(startPage)
    
    } else {
      const page = this.state.page;
      await this.serchMethod(page);
    }
    await this.serchMethod();
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
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&perPage=20&type_1=${this.state.typePram}&sort=${this.state.attacDefenc}&direction=${this.state.ascDesc}&page=${this.state.page}`);
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
    await this.serchMethod(Newpage);
  }

  tyepofPokemon = (e) => {
    const value = e.target.value;
    this.setState({ typePram: value });
  };
  
  pagePlaceNext = async () => {
    let curentPage = this.state.page;
    let Newpage = curentPage + 1;
    this.setState({ page: Newpage });
    await this.serchMethod(Newpage);

}

  async serchMethod(page) {
    const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?&pokemon=${this.state.searchQuery}&sort=${this.state.attacDefenc}&direction=${this.state.attacDefenc}&page=${page}`);
    this.setState({ data: fetchedData.body.results });
  }

  render() {
    return (
      <>
       
        <SerchQurryPage
          handleChange={this.handleChange}
          levelChange={this.levelChange}
          sortBy={this.sortBy}
          handleClick={this.handleClick}
          asendingDesending={this.asendingDesending}
          tyepofPokemon={this.tyepofPokemon}
          pagePlacePrevus={this.pagePlacePrevus}
          pagePlaceNext={this.pagePlaceNext}
        />
      <span>  
        <ul>
          {this.state.data.map(item => <RenderPokemon pokemon={item} />)}
        </ul>
        </span>
      </>
    )
  }
}
