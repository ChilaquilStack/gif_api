import React from 'react'
import Gif from './Gif'

const Gifs = ({gifs, setGif}) => {

    const gifsComponents = gifs.map(gif =>  <Gif gif={gif} key={gif.id} setGif={setGif}/>)
    
    return(
        
        <div className="row">

            {gifsComponents}

        </div>
    )
}

export default Gifs