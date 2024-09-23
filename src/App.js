// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PokemonList from './components/PokemonList';
// import PokemonDetails from './components/PokemonDetails';



// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<PokemonList />} />
//         <Route path="/pokemon/:id" element={<PokemonDetails />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
        setPokemon(response.data.results);
      } catch (err) {
        setError('Unable to fetch Pokémon. Please check your internet connection.');
      }
    };
    fetchPokemon();
  }, []);

  const filteredPokemon = pokemon.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Main Page Route */}
          <Route
            path="/"
            element={
              <PokemonList
                pokemon={filteredPokemon}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                error={error}
              />
            }
          />
          {/* Details Page Route */}
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
