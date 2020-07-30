import React, { useState, useEffect, useContext } from "react";
import axios from "axios";


export default function GetPokemonPicture(pokemons) {
  
  const [pokemonPicture, setPokemonPicture] = useState([]);
  const PokemonFormURL = "https://pokeapi.co/api/v2/pokemon-form"
  useEffect(() => {
    axios.get(PokemonFormURL).then(response => {
      
    });
    return () => {
      cleanup
    }
  }, [input])




  return (
    <div>
      
    </div>
  )
}
