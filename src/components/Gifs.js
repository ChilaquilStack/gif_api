import React from 'react'
import Gif from './Gif'

const Gifs = ({gifs, showGif}) => {

    const gifsComponents = gifs.map(gif =>  <Gif gif={gif} key={gif.id} showGif={showGif}/>)
    
    return(
        
        <div className="row">

            {gifsComponents}

        </div>
    )
}

export default Gifs