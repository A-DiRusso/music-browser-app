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
     const albumName = this.state.albums.name;
     const atliensSongs = this.state.albums.songs.map((song, i) => (<li key={i}>{song}</li>))
     
     return (
          <div>
                <h3>OutKast</h3>
                <h4>{albumName}</h4>
                <ul>
                    {atliensSongs}
            </ul>
            <Link to="/bands">Back to Bands</Link>
        </div>
        
      )
     }
}



