import React from 'react'

import PropTypes from 'prop-types'

const Gif = ({gifItem, showGif}) => {

    const {title, images : {downsized : {url}}} = gifItem

    const select = () => showGif({title, url})

    return (
        
        <div className="col s12 m7 l4">

            <div className="card">

                <div className="card-image">
                            
                    <img src={url} alt={title} width="250" image/>
                         
                </div>

                <div className="card-action center-align">
                    
                    <a class="waves-effect waves-light btn modal-trigger" href="#modal" onClick={select}>

                        View

                    </a>
                
                </div>

            </div>

        </div>

    )

}

Gif.propTypes = {

    gif : PropTypes.object.isRequired,

    showGif : PropTypes.func.isRequired

}

export default Gif