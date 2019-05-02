import React from 'react';
import './App.css';
import Bands from './Bands';
import Albums from './Albums';
import Home from './Home'
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Culture from './albums/Culture';
import ManOn from './albums/ManOn';
import ATLiens from './albums/ATLiens';
import MasterOf from './albums/MasterOf';
import Radiohead from './Radiohead';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Link to="/">Home</Link>
      <Link to="/bands">Bands</Link>
      <Link to="albums">Albums</Link>
      

     <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/bands" component={Bands} />
      <Route path="/albums" component={Albums} />
      <Route path="/radiohead" component={Radiohead} />
      <Route path="/culture" component={Culture} />
      <Route path="/masterof" component={MasterOf} />
      <Route path="/manon" component={ManOn} />
      <Route path="/atliens" component={ATLiens} />
      <Route component={PageNotFound} />
     </Switch>
    
      </header>
    </div>
  );
}

export default App;
