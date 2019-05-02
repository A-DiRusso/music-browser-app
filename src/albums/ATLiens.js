import React, { Component } from 'react'

export default class ATLiens extends Component {
  constructor(props) {
      super(props);
      this.state = {
        songs: ['Elevators', 'Decatur Psalm'],

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
