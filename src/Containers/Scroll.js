import React from 'react';


const Scroll=(props)=>{
    return(
        <div style={{overflowY:'scroll', border:'2px solid black',display:'flex',flexDirection:'row', height:'600px'}}>
            {props.children}
            </div>
    )
}


export default Scroll