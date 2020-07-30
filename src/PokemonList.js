import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ChangeTitle from "./ChangeTitle";

export default function PokemonList() {
  const header = "Pokemons"
  const [pokemon, setPokemon] = useState([]);
  const URL = "https://pokeapi.co/api/v2/pokemon";
  document.title = ChangeTitle(header);
  
  useEffect(() => {
    axios.get(URL).then(response => {
      setPokemon(response.data.results.map(p => p.name))
    });
  }, [URL])

  

  return (
    <>
      <h1>{header}</h1>
      <div>
        {pokemon.map(p => (
          <div key={p}>{p}</div>
        ))}
      </div>
    </>
  );
}
