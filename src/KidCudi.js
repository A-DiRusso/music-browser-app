import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class KidCudi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: {
                name: "Man on The Moon: End of The Day",
                songs: ['Pursuit of Happiness', 'Day \'n\' Nite'],
            }
  
        }
    }  
    render() {
        // const albumName = Object.values(this.state.albums.name)
        const albumName = Object.values(this.state.albums.name);
        // const songsArray = albumsArray.splice(1);
        // console.log(songsArray);
        const kidCudiSongs = this.state.albums.songs.map((song, i) => (<li key={i}>{song}</li>))
    
      return (
          <div>
              <h3>Kid Cudi</h3>
              <h4>{albumName}</h4>
              <ul>{kidCudiSongs}</ul>
              <Link to="/bands">Back to Bands</Link>
          </div>
      )
    }
}
