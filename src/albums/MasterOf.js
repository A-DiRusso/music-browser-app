import React, { Component } from 'react'

export default class MasterOf extends Component {
  constructor(props) {
      super(props);
      this.state = {
        songs: ['Disparate Youth', 'Go'],

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
