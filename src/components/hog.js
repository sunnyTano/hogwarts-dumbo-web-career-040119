import React from 'react'

export default class Hog extends React.Component{
    render(){
        const {name, speciality, greased, weight} = this.props.hog
        return(
            <div className="pigTile">
                <h2>{name}</h2>
                <h3>{speciality}</h3>
                <h2>{greased}</h2>
                <h2>{weight}</h2>
            </div>
        )
    }
}