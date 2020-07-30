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
          <ul>
            <li>
              <Link to="/pokemons">Pokemons</Link>
            </li>
            <li>
              <Link to="/types">Types</Link>
            </li>
          </ul>
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
