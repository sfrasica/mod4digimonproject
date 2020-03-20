import React, { Component } from 'react'
import DigimonList from './DigimonList.jsx'
import Search from './Search.jsx'
import AddDigimonForm from './AddDigimonForm.jsx'

export default class DigimonContainer extends Component {

    state={
        digimons: [],
        searchTerm: ""
    }

    componentDidMount() {

        fetch("http://localhost:3000/digimon")
        .then(resp => resp.json())
        .then(digimonsArray => {
            
            this.setState({
                digimons: digimonsArray
            })
        })
    }

    changeSearchTerm = (term) => {
        
        this.setState({
            searchTerm: term
        })
    }

    returnFilteredDigimon = () => {
        let filteredDigimon = this.state.digimons.filter(digimon => {
            return digimon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || digimon.level.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        })
        return filteredDigimon
    }

    deleteOneDigimon = (id) => {
        
        fetch(`http://localhost:3000/digimon/${id}`, {
            method: "DELETE"})
            .then(resp => resp.json())
            .then(() => {
                let updatedArray = this.state.digimons.filter(digimon => {
                    return digimon.id !== id
                })
                this.setState({
                    digimons: updatedArray
                })
            })
        
    }

    addDigimon = (digimonObj) => {
        
        fetch(`http://localhost:3000/digimon`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(digimonObj)
        })
         .then(resp => resp.json())
         .then(newDigimon => {
             let newArray = [newDigimon, ...this.state.digimons]

             this.setState({
                 digimons: newArray
             })
         })
    }

    render() {
        return (
            <div className="Digimon-Container">
                <AddDigimonForm addDigimon={this.addDigimon} />
                <br/>
                <Search searchTerm={this.state.searchTerm} changeSearchTerm={this.changeSearchTerm}/> 
                <br/>
                <DigimonList digimons={this.returnFilteredDigimon()} deleteOneDigimon={this.deleteOneDigimon}/>
            </div>
        )
    }
}
