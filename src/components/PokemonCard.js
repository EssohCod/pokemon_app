
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PokemonCard.css';

const colors = [
  '#FF595E', '#FFCA3A', '#8AC926', '#1982C4', '#6A4C93', '#FF6D00',
  '#8338EC', '#3A86FF', '#FB5607', '#FF006E', '#06D6A0', '#FFD166'
];

const PokemonCard = ({ pokemon, index }) => {
  const navigate = useNavigate();
  const backgroundColor = colors[index % colors.length];

  const handleClick = () => {
    navigate(`/pokemon/${pokemon.name}`);
  };

  return (
    <div className="pokemon-card" style={{ backgroundColor }} onClick={handleClick}>
      <img src={pokemon.imageUrl} alt={pokemon.name} /> 
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
