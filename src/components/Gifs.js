import React from 'react'
import Gif from './Gif'

const Gifs = ({gifs, setGif}) => (

    <div className="row">

        {gifs.map(gif => (
            
            <Gif 
                gif={gif}
                key={gif.id}
                setGif={setGif}
            />
        ))}

    </div>
)

export default Gifs