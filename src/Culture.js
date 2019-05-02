import React, { Component } from 'react'

export default class Culture extends Component {
  constructor(props) {
      super(props);
      this.state = {
        songs: ['Bad and Boojee', 'Deadz'],

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
