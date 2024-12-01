import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a> 
        import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Consumir el API
    axios.get('http://localhost:3000/characters')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return (
    <div>
      <h1>Personajes de The Nanny</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <h2>{character.name}</h2>
            <p>{character.occupation}</p>
            <p>{character.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

          
        </a>
      </header>
    </div>
  );
}

export default App;
