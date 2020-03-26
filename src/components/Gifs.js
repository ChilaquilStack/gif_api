import React from 'react'

import Gif from './Gif'

import PropTypes from 'prop-types'

const Gifs = ({gifs, showGif}) => {

    const gifsComponents = gifs.map(gif =>  <Gif gif={gif} key={gif.id} showGif={showGif}/>)
    
    return(
        
        <div className="row">

            {gifsComponents}

        </div>
    )
}

Gifs.propTypes = {

    gifs : PropTypes.array.isRequired,

    showGif : PropTypes.func.isRequired

}

export default Gifs