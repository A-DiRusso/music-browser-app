import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class OutKast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: {
                name: "ATLiens",
                songs: ['Elevators', 'Decatur Psalm'],
            }
  
        }
    }
    render() {
     return (
          <div>
                <h3>OutKast</h3>
                <ul>
                {this.state.albums.songs.map((song, i) => (<li key={i}>{this.state.albums.name} : {song}</li>))}
            </ul>
            <Link to="/bands">Back to Bands</Link>
        </div>
        
      )
     }
}



