import React, { useState, useEffect} from 'react'

import axios from 'axios'
import ChangeTitle from './ChangeTitle';


export default function TypeList() {
  const header = "Pokemon Types"
  const [type, setType] = useState([]);
  const typeURL = "https://pokeapi.co/api/v2/type";
  document.title = ChangeTitle(header);

  useEffect(() => {
    axios.get(typeURL).then(response => {
      setType(response.data.results.map(t => t.name))
    });
  })

  return (
    <>
      <h1>{header}</h1>
      <div>
        {type.map( t => (
          <div key={t}>{t}</div>
        ))}
      </div>
    </>
  );
}
