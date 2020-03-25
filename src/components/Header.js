import React from 'react'

const Header = ({title}) => {

    return (

        <nav className="nav-wrapert ligth-blue darken-3">

            <a href="#!" className="brand-logo center">

                {title}

            </a>

        </nav>

    )
    
}

export default Header