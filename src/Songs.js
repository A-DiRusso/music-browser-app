import React from 'react'

export default class Songs extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          kida: ['How to Disappear Completely', 'Motion Picture Soundtrack'],
          theBends: ['Black Star', 'Fake Plastic Trees'],
          okComputer: ['Exit Music(For a Film', 'Lucky'],
          yrn: ['Versace', 'Hannah Montana'],
          youngrichnation: ['Highway 85', 'Cocaina'],
          culture: ['Bad and Boojee', 'Deadz'],
          santogold: ['Shove It', 'Creator'],
          master: ['Disparate Youth', 'Go'],
          ninetynine: ['Can\'t Get Enough of Myself', 'Before the Fire'],
          manonmoon: ['Pursuit of Happiness', 'Day \'n\' Nite'],
          indicud: ['Just What I Am', 'Solo Dolo, Part II'],
          passion: ['Frequency', 'By Design'],
          southernplaya: ['Hootie Hoo', 'Player\'s Ball'],
          atliens: ['Elevators', 'Decatur Psalm'],
          aquemini: ['Rosa Parks', 'West Savannah']

      }
  }
  render() {
      console.log(this.state)
    return (
        <div>
          <h2>How to Disappear Completely</h2>
        </div>
      )
    
  }
}
