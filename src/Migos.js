import React from 'react';
import { Link } from 'react-router-dom';

class Migos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        albums: {
            name: 'Culture',
            songs: ['Bad and Boojee', 'Deadz'],
        }

    }
  }
  render () {
      return (
        <div>
          <h3>Migos</h3>
          <ul>
              {this.state.albums.songs.map((song, i) => (<li key={i}>{this.state.albums.name} : {song}</li>))}
          </ul>
          <Link to="/bands">Back to Bands</Link>
        </div>
      )

  }
}

export default Migos;
