import React from 'react'

import PropTypes from 'prop-types'

const Modal = ({gif, setGif}) =>  {
    
    const {title = 'no title', url = ''} = gif
    
    const close = () => {
        
        setGif({})

    }
    
    return(

        <div id="modal" className="modal modal-fixed-footer">
        
            <div className="modal-content">
                
                <h4 className="center-align">{title.toUpperCase()}</h4>

                <div class="row">

                    <div class="col s12 m12">
                        
                        <div class="card">
                            
                            <div class="card-image">

                                <img className="materialboxed" data-caption="A picture of a way with a group of trees in a park" width="650" src={url} alt={title}/>
                            
                            </div>
                            
                            <div class="card-action center-align">

                                <a href={url} rel="noopener noreferrer" target="_blank">
                                    Link
                                </a>
                            
                            </div>
                        
                        </div>
                    
                    </div>
                
                </div>
            
            </div>
            
            <div className="modal-footer">
                
                <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={close}>
                    
                    Close
               
                </a>
            
            </div>
    
        </div>
    )

}


Modal.propTypes = {

    gif : PropTypes.object.isRequired,

    setGif : PropTypes.func.isRequired

}

export default Modal