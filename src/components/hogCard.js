import React from 'react'
import Hog from './hog.js'

export default class HogCard extends React.Component{

    render(){
        return(
            <div>
                  <Hog
                  key={this.props.hog.id}
                  hog={this.props.hog}
                     />
            </div>
        )
    }
}
