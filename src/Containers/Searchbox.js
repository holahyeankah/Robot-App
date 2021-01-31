import React from 'react'

const Searchbox=({search})=>{
    return(
        <div className="pa2">
            <input className="pa3 tc ba mt2 bg-lightest-blue" type="text" placeholder="search robots" onChange={search}/>
        </div>
    )
}

export default Searchbox