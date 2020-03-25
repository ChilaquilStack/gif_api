import React from 'react'

const Gif = ({gif, setGif}) => {

    const {title, images : {original : {url}}} = gif

    const select = () => setGif(url)

    return (
        
        <div className="col s12 m7 l4">

            <div className="card">

                <div className="card-image">

                    <a href="#!">
                        
                        <img src={url} alt={title}/>
                        
                    </a>
                
                </div>

            </div>

        </div>

    )

}

export default Gif