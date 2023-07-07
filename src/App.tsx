import React from 'react';
import CharacterList from './components/CharacterList';
import './App.css';

const App = () => {
  return (
    <div>
      <h1 className='title'>App <span>Finkargo</span> Rick N morty API</h1>
      <CharacterList />
    </div>
  );
};

export default App;
