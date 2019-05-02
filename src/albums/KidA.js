import React from 'react';

class KidA extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        songs: ['How to Disappear Completely', 'Motion Picture Soundtrack']
      }
  }
  render() {
    return (
      <ul>
          
              {this.state.songs.map((song, i ) => (<li key={i}>{song}</li>))}
          
      </ul>
    )
  }
}

export default KidA;