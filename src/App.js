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
import Radiohead from './Radiohead';
import Migos from './Migos';
import Santigold from './Santigold';
import KidCudi from './KidCudi';
import OutKast from './OutKast';


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
      <Route path="/migos" component={Migos} />
      <Route path="/santigold" component={Santigold} />
      <Route path="/kidcudi" component={KidCudi} />
      <Route path="/outkast" component={OutKast} />
      <Route component={PageNotFound} />
     </Switch>
    
      </header>
    </div>
  );
}

export default App;
