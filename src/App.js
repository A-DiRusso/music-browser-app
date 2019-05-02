import React from 'react';
import './App.css';
import Bands from './Bands';
import Albums from './Albums';
import Songs from './Songs';
import KidA from './KidA';
import Culture from './Culture';
import MasterOf from './MasterOf';
import ManOn from './ManOn';
import ATLiens from './ATLiens';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Bands />
      <Albums />
      <Songs />
      <KidA />
      <Culture />
      <MasterOf />
      <ManOn />
      <ATLiens />
      </header>
    </div>
  );
}

export default App;
