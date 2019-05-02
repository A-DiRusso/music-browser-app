import React from 'react'
import { Link, Route } from 'react-router-dom';
import KidA from './albums/KidA';
import Culture from './albums/Culture';
import ManOn from './albums/ManOn';
import ATLiens from './albums/ATLiens';
import MasterOf from './albums/MasterOf';

export default class Bands extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bands: [
                'Radiohead',
                'Migos',
                'Santigold',
                'Kid Cudi',
                'OutKast'
            ]
        }
    }
    render () {
        return (
           <div> 
               <br />
               <Link to="/radiohead/kida">Radiohead</Link>
               <Route path="/radiohead/kida" Component={KidA} />
               <br />
               <Link to="/migos/culture">Migos</Link>
               <Route path="/migos/culture" Component={Culture} />
               <br />
               <Link to="/santigold/masterof">Santigold</Link>
               <Route path="/santigold/masterof" Component={MasterOf} />
               <br />
               <Link to="/kidcudi/manon">Kid Cudi</Link>
               <Route path="/kidcudi/manon" Component={ManOn} />
               <br />
               <Link to="/outkast/atliens">OutKast</Link>
               <Route path="/outkast/atliens" Component={ATLiens} />
           </div>
           )
           
    }
    _buttonClick = (band) => {
        return console.log(band)
    }
}
    
    
    
    // {this.state.bands.map((band, i) => (<button onClick={console.log(band)} key={i}>{band}</button>))}