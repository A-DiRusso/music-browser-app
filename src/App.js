import React from 'react';
import './App.css';
import Bands from './Bands';
import Albums from './Albums';
import Songs from './Songs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Bands />
      <Albums />
      <Songs />
      </header>
    </div>
  );
}

export default App;
