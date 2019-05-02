import React from 'react'
import { Link } from 'react-router-dom';

class Radiohead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: {
                name: 'Kid A',
                songs: ['How to Disappear Completely', 'Motion Picture Soundtrack'],

            }
        }
    }
    render() {
      return (
        <div>
            <h3>Radiohead</h3>
            <ul>
                
                    {this.state.albums.songs.map((song, i ) => (<li key={i}>{this.state.albums.name} : {song}</li>))}
                
            </ul>
            <Link to="/bands">Back to Bands</Link>
        </div>
      )
    }
}


export default Radiohead;