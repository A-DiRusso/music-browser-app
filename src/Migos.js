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
    const albumsArray = Object.values(this.state.albums);
    let songsArray = albumsArray.splice(1);
    let albumArray = albumsArray.pop();
    const migosSongs = songsArray[0].map((song, i) => (<li key={i}>{song}</li>))

      return (
        <div>
          <h3>Migos</h3>
          <h4>{albumArray}</h4>
          <ul>{migosSongs}</ul>
          <Link to="/bands">Back to Bands</Link>
        </div>
      )

  }
}

export default Migos;
