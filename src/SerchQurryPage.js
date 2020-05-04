import React, { Component } from 'react'
import request from 'superagent';


export default class SerchPage extends Component {
    state = {
        dataType: [],
    };

    async componentDidMount() {
    const fetchedDatabar = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/types`);
    this.setState({ dataType: fetchedDatabar.body });
    }

    render() {
        return (
            <div>
                 <div className="searchList">
            <span className="nameSerch">
              <h3>name</h3>
              <input value={this.props.serch} onChange={this.props.handleChange} />
          </span>
          <div>
              <h3>Select Type</h3>
              <select className="Type" onChange={this.props.tyepofPokemon}>
              {this.state.dataType.map(item => <option value= {item.type} > {item.type} </option>)}
              </select>
            </div>
            <span className="sortby">
              <h3>Order by</h3>
              <select className="selctionStyle" onChange={this.props.sortBy}>
                <option value="attack">attack</option>
                <option value="defense">defense</option>
              </select>
              <select className="selctionStyle" onChange={this.props.asendingDesending}>
                <option value="asc">Week</option>
                <option value="desc">Strong</option>
              </select>
          </span>
          </div>
            <span className="search">
          < button onClick={this.props.pagePlacePrevus}>Prevus</button>
          < button onClick={this.props.handleClick}>Search</button>
          < button onClick={this.props.pagePlaceNext}>Next</button>
          </span>
        </div>
        )
    }
}
