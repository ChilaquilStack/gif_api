import React from 'react'

const Paginator = ({backPage, nextPage, showBackButton, showNextButton}) => (

    <div className="row">

        <div class="input-field col s6">
        
        <div className="left-align">

            { showBackButton ? null : <a href="#!" class="waves-effect waves-light btn" onClick={backPage}> &laquo; Back </a>}

        </div>
    
        </div> 
        
        <div class="input-field col s6">

        <div className="right-align">

            { showNextButton ? null : <a href="#!" class="waves-effect waves-light btn" onClick={nextPage}>Next &raquo;</a>}

        </div>
        
        </div>
        
    </div>

)

export default Paginator