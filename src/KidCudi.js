import React, { Component } from 'react'

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
      return (
          <div>
              <h3>Kid Cudi</h3>
              <ul>
                  {this.state.albums.songs.map((song, i) => (<li key={i}>{this.state.albums.name} : {song}</li>))}
              </ul>
          </div>
      )
    }
}
