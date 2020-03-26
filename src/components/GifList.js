import React from 'react'

import GifItem from './GifItem'

import PropTypes from 'prop-types'

const Gifs = ({gifList, showGif}) => {

    const gifListComponent = gifList.map(gif => <GifItem gifItem={gif} key={gif.id} showGif={showGif}/>)
    
    return(
        
        <div className="row">

            {gifListComponent}

        </div>
    )
}

Gifs.propTypes = {

    gifs : PropTypes.array.isRequired,

    showGif : PropTypes.func.isRequired

}

export default Gifs