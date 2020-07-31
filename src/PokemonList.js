import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ChangeTitle from "./ChangeTitle";
import Pagination from './Pagination'

export default function PokemonList() {
  const header = "Pokemons"
  const [pokemon, setPokemon] = useState([]);
  const [currentURL, setCurrentURL] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageURL, setNextPageURL] = useState([])
  const [prevPageURL, setPrevPageURL] = useState([])
  document.title = ChangeTitle(header);
  const nextBtn = document.createElement('button')
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentURL, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(response => {
      setLoading(false)
      setNextPageURL(response.data.next)
      setPrevPageURL(response.data.previous)
      setPokemon(response.data.results.map(p => p.name))
    })

    return () => cancel()
  }, [currentURL])


  function switchNextPage() {
    setCurrentURL(nextPageURL)
  }

  function switchPrevPage() {
    setCurrentURL(prevPageURL)
  }

  if (loading) return "Loading..."
  

  return (
    <>
      
      <h1>{header}</h1>
      <div id="pkmnGridContainer">
        {pokemon.map(p => (
          <div key={p}>{p}</div>
        ))}
      </div>
      <Pagination
        switchNextPage={switchNextPage}
        switchPrevPage={switchPrevPage}
      />
    </>
  );
}
