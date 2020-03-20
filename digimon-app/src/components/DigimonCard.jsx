import React, { Component } from 'react'

export default class DigimonCard extends Component {


    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    handleDelete = () => {
        this.props.deleteOneDigimon(this.props.digimon.id)
    }

    render() {
        let {name, img, level} = this.props.digimon
        return (
            <div>
                
                <div className="four wide column rendered-example views-card-types-card-example-card"></div>
                <div className="ui card" style ={{background: (76, 175, 80, 0.9)}}>
                <div className="image"><img src={img} alt={name}/></div>
                <div className="meta"  ><span>{name}</span></div>
                <div className="meta" ><span>Level: {level}</span></div>
                <div className="meta" ><button  className="ui black basic button" onClick={this.handleClick}>Show DigiDeets</button>
                    {this.state.clicked ?
                    <div className="meta"><span>{name} in details</span></div>
                    
                    :

                    null
                    
                     }
                
                </div>
                    <div><button className="ui black basic button" onClick={() => {console.log("thisWorked")}}>Add to Team</button></div>
                <div><button className="ui black basic button" onClick={this.handleDelete}>Delete Digimon</button></div>
                </div>
            </div>
        )
    }
}
