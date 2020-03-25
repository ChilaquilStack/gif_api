import React from 'react'
import Gif from './Gif'

const Gifs = ({gifs, setGif}) => (

    <div className="row">

        {gifs.length ? gifs.map(gif => (
            
            <Gif 
                gif={gif}
                key={gif.id}
                setGif={setGif}
            />
        
        )) : <p>No gifs</p>}

    </div>
)

export default Gifs