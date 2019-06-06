import React from 'react'
import Hog from './hog.js'

export default class HogCard extends React.Component{

    render(){
        return(
            <div>
                {this.props.hog.map(hog =>{
                    return <Hog
                    key={hog.id}
                    hog={hog}
                     />
                })}
            </div>
        )
    }
}