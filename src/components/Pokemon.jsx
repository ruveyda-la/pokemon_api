import React,{useState, useEffect} from 'react'
import axios from 'axios'


const Pokemon = () => {
    const [pokemons,setPokemons] = useState([]);
    useEffect (() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            
            .then((response) => {
        
        
                setPokemons(response.data.results);
        })
            .catch(err=>{
                console.log(err);
        })
    },[]);
  return (
    <div>
        <ul>{
            pokemons.map((item,index) => {return (<li key={index}> {item.name}</li>)})
            }
        </ul>
    </div>
  )
}

export default Pokemon;