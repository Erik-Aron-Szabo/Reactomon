import React, { useState, useEffect} from 'react'

import axios from 'axios'


export default function PokemonDetail() {

  const [pokemonDetailURL, setPokemonDetailURL] = useState([])

  useEffect(() => {
    axios.get(pokemonDetailURL).then(response => {
      
    });
  }, [pokemonDetailURL])



  return (
    <div>
      <p>PokemonDetail</p>
    </div>
  );
}
