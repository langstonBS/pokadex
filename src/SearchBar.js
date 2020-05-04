import React, { Component } from 'react';
import request from 'superagent';
import SerchQurryPage from './SerchQurryPage';
import SerchPage from './SearchPage'



export default class SearchBar extends Component {
    state = {
        searchQuery: '',
        searchLevle: 0,
        data: [{}],
        attacDefenc: 'attack',
        ascDesc: 'asc',
        page: 1,
        typePram: '',
        dataType: [],
        pageInfo: 0,
        state: false
      }
    
      async componentDidMount() {

          await this.serchMethod()
          this.setState({state: false})


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
        await this.serchMethod();
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
        let Newpage = 0;
        let pokecount = this.state.pageInfo.count;
        let perPageCount = this.state.pageInfo.perPage;
          let pageLeft = pokecount - (curentPage * perPageCount);
          
        
        if (pageLeft >= 1) {
          Newpage = curentPage + 1; 
        } else {
          Newpage = curentPage;
        }
        
        this.setState({ page: Newpage });
        await this.serchMethod(Newpage);
    }
    
      async serchMethod(page) {
        if (!page) {
          page = this.state.page; 
      }
        let fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&perPage=20&type_1=${this.state.typePram}&sort=${this.state.attacDefenc}&direction=${this.state.ascDesc}&page=${page}`);
        this.setState({ data: fetchedData.body.results });
        this.setState({ pageInfo: fetchedData.body });
        this.setState({state: true})  
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
                {
                        this.state.state
                        ?<span>  
                        <ul>
                                {this.state.data.map(item => <SerchPage />)}
                        
                        </ul>
                        </span> : <div>{ console.log(this.state.state) }</div>
            }
               
         </>

        )
      }
}
