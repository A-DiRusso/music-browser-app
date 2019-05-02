import React, { Component } from 'react'

export default class ManOn extends Component {
  constructor(props) {
      super(props);
      this.state = {
        songs: ['Pursuit of Happiness', 'Day \'n\' Nite'],

      }
  }  
  render() {
    return (
      <ul>
          {this.state.songs.map((song, i) => (<li key={i}>{song}</li>))}
      </ul>
    )
  }
}
