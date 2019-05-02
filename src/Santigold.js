import React, { Component } from 'react'

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
      return (
          <div>
                <h3>Santigold</h3>
                <ul>
                    {this.state.albums.songs.map((song, i) => (<li key={i}>{this.state.albums.name} : {song}</li>))}
                </ul>
          </div>
      )
    } 
}









