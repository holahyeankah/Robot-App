import React from 'react';


const Card =({id, name, email})=>{
    return( 
    <div className='pa2 f3 left dib pa3 mt5 ma5 grow shadow-5 br3 bw2 tc bg-light-green'>
         <img alt='' src ={`https://robohash.org/${id}.png?set=set1&size=150x150`}/>

         <div className='f5'>
             
    <p>{name}</p>
    <p>{email}</p>
    </div>

    </div>
    )
}

export default Card