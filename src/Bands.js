import React from 'react'

export default class Bands extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bands: [
                'Radiohead',
                'Migos',
                'Santigold',
                'Kid Cudi',
                'OutKast'
            ]
        }
    }
    render () {
        return (
           <ul> 
               {
                   this.state.bands.map((band, i) => (<li key={i}>{band}</li>))
                }
            </ul>
           )
         
     }
 }

