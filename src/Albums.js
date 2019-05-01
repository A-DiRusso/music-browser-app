import React from 'react'

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
          Migos: {
              albums: ['Y.R.N(mixtape)',
                        'Young Rich Nation',
                        'Culture'
                      ]
                    },
                    Santigold: {
                        albums: ['Santogold',
                                 'Master of My Make-Believe',
                                 '99¢',
                                ]
                              },
                              KidCudi: {
                                  albums: ['Man on the Moon: The End of the Day',
                                           'Indicud',
                                           'Passion, Pain & Demon Slayin\''
                                          ] 
                                        },
                                        OutCast: {
                                            albums: ['Southernplayalisticadillacmuzik',
                                                     'ATLiens',
                                                     'Aquemini'
                                                  ]
                                    
                                              }
                                    
                                          }
                                      }
    render() {
    return (
        <div>
            <h2>Kid A</h2>
        </div>
        )
    
    }  
}
                    
                              

          
