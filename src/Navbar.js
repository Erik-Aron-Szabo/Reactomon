import React from 'react'

import PokemonList from './PokemonList.js';
import TypeList from './TypeList'
import PokemonDetail from './PokemonDetail'
import { BrowserRouter as Router, 
    Switch, 
    Route, 
    Link, 
    Redirect} 
    from "react-router-dom";

export default function Navbar() {
    return (
    <Router>
      <div>
        <nav>
          <div id="navbar">
            <Link to="/pokemons">Pokemons</Link>
          </div>
          <div id="navbar">
            <Link to="/types">Types</Link>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Redirect exact from="/" to="/pokemons"/>
          <Route exact path="/pokemons">
            <PokemonList />
          </Route>
          <Route exact path="/types">
            <TypeList />
          </Route>
          <Route  path="/pokemon/:id" 
          children={<PokemonDetail />}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
