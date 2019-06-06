import React from 'react'
import HogCard from './hogCard.js'

export default class HogContainer extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.hogs.map(hog =>{
                    return <HogCard
                    hog={hog}
                     />
                })}
            </div>
        )
    }
}