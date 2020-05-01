import React, { Component } from 'react'
import SearchPage from './SearchPage'
import PokemonDetail from './PokemonDetail'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                        <Route
                            path="/PokemonDetail/:name"
                            render={(routerProps) => <PokemonDetail {...routerProps} />}
                        />
                    </Switch> 
                </Router>
            </div>        
        )
    }
}
