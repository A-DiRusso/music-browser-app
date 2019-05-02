import React from 'react'
import { Link } from 'react-router-dom';

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
               <Link to="/radiohead">Radiohead</Link>
               <br />
               <Link to="/masterof">Santigold</Link>
               <br />
               <Link to="/culture">Migos</Link>
               <br />
               <Link to="/manon">Kid Cudi</Link>
               <br />
               <Link to="/atliens">OutKast</Link>
               <br />
               <Link to="/">Home</Link>
              
               
               
               
           </div>
           )
           
    }
   
}
    
    
    
    // {this.state.bands.map((band, i) => (<button onClick={console.log(band)} key={i}>{band}</button>))}