import React from 'react'
import DigimonCard from './DigimonCard.jsx'
export default function DigimonList(props) {

    let listOfDigimon = props.digimons.map((digimon) => {
        return <DigimonCard
                    key ={digimon.id}
                    digimon={digimon}
                    deleteOneDigimon={props.deleteOneDigimon}
                    />
    })

    return (
        <div className="ui grid container">
            {listOfDigimon}
        </div>
    )
}
