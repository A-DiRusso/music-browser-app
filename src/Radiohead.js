import React from 'react'
import { Link } from 'react-router-dom';

class Radiohead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [{
                name: 'Kid A',
                songs: ['How to Disappear Completely', 'Motion Picture Soundtrack'],

            },
            {
                name: 'The Bends',
                songs: [],
            },
            {
                name: 'Ok Computer',
                songs: [],
            },
            ]
        }
    }
    render() {
        let albumsArray = Object.values(this.state.albums[0]);
        let songsArray = albumsArray.splice(1);
        let albumArray = albumsArray.pop();
        const radioheadSongs = songsArray[0].map((song, i) => <li key={i}>{song}</li>)

        
        //Do the Mapping up here keep the JSX clean 
      return (
        <div>
            <h3>Radiohead</h3>
            <h4>{albumArray}</h4>
            <ul>{radioheadSongs}</ul>
            <Link to="/bands">Back to Bands</Link>
        </div>
      )
    }
}


export default Radiohead;


