import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PokemonDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => setPokemon(response.data))
      .catch(error => console.error('Error fetching Pokemon details:', error));
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  // Function to go to the previous page
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="pokemon-details">
      <h3>Base Stats</h3>

      {/* Display Pokémon Image immediately after the heading */}
      <div className="pokemon-image">
        <img 
          src={pokemon.sprites.front_default} 
          alt={pokemon.name} 
        />
      </div>

      {/* Base Stats */}
      <div className="pokemon-stats">
        <ul>
          {pokemon.stats.map(stat => (
            <li key={stat.stat.name}>
              <strong>{stat.stat.name}:</strong> {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>

      {/* Type information */}
      <div className="pokemon-types">
        <h3>Type</h3>
        {pokemon.types.map(type => (
          <span key={type.type.name} className="type-badge">{type.type.name}</span>
        ))}
      </div>
      
      {/* Back Button */}
      <button className="back-button" onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '8px' }} /> 
        Previous Page
      </button>
    </div>
  );
};

export default PokemonDetails;
