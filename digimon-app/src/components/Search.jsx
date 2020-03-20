import React from 'react'

export default function Search(props) {


    const handleChange = (e) => {
        props.changeSearchTerm(e.target.value)
    }
    
    return (
        <div>
            {/* <button className="ui basic blue inverted button">Click the blue inverted button</button> */}
            <input type="text" placeholder="search name or level" value={props.searchTerm} onChange={handleChange}></input>
        </div>
    )
}
