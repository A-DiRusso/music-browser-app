import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Santigold extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: {
                name: "Master of My Make Believe",
                songs: ['Disparate Youth', 'Go'],
            }
    
        }
    }
    render() {
      const albumName = this.state.albums.name;
      const santigoldSongs = this.state.albums.songs.map((song, i) => (<li key={i}>{song}</li>))

      return (
          <div>
                <h3>Santigold</h3>
                <h4>{albumName}</h4>
                <ul>
                    {santigoldSongs}
                </ul>
                <Link to="/bands">Back to Bands</Link>
          </div>
      )
    } 
}









