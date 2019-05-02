import React from 'react'
import KidA from './albums/KidA';
import Culture from './albums/Culture';
import MasterOf from './albums/MasterOf';
import ManOn from './albums/ManOn';
import ATLiens from './albums/ATLiens';

export default class Albums extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          radiohead: {
              albums: ['Kid A',
                       'The Bends',
                       'Ok Comupter'
                      ]
          },
          migos: {
              albums: ['Y.R.N(mixtape)',
                        'Young Rich Nation',
                        'Culture'
                      ]
          },
          santigold: {
              albums: ['Santogold',
                        'Master of My Make-Believe',
                        '99¢',
                      ]
          },
          kidcudi: {
              albums: ['Man on the Moon: The End of the Day',
                      'Indicud',
                      'Passion, Pain & Demon Slayin\''
                      ] 
          },
          outkast: {
            albums: ['Southernplayalisticadillacmuzik',
                        'ATLiens',
                        'Aquemini'
                    ]

          },

      }
    }
  render() {
        
    return (
       
           <ul>
                { this.state.radiohead.albums.map((album, i) => (<li key={i}>{album}</li>)) } 
                { this.state.migos.albums.map((album, i) => (<li key={i}>{album}</li>)) }
                { this.state.santigold.albums.map((album, i) => (<li key={i}>{album}</li>)) }
                { this.state.kidcudi.albums.map((album, i) => (<li key={i}>{album}</li>)) }
                { this.state.outkast.albums.map((album, i) => (<li key={i}>{album}</li>)) }

           <div>
              <KidA />
              <Culture />
              <MasterOf />
              <ManOn />
              <ATLiens />
           </div> 
           </ul>
      )       
    
  }  

}
      
      
      
      

                 
             
             
                 