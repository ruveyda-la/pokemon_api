import React,{useState} from 'react'

const Pokemon = () => {
    const [pokemons,setPokemons] = useState([]);
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
          .then(response => {
            // not the actual JSON response body but the entire HTTP response
            return response.json();
        }).then(response => {
            // we now run another promise to parse the HTTP response into usable JSON
            setPokemons(response.results);
        }).catch(err=>{
            console.log(err);
        });
  return (
    <div>
        <ul>{
            pokemons.map((item,index) => {return (<li key={index}> {item.name}</li>)})
            }
        </ul>
    </div>
  )
}

export default Pokemon