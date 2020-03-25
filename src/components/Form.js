import React from 'react'

import styles from './Form.module.css'
import M from "materialize-css";

const Form = ({setName}) => {

    const handleChange = (e) => {

        const  elems = document.querySelectorAll('.autocomplete');
        
        M.Autocomplete.init(elems);
        
        const {target : {value}} = e
        
        setName(value)

    }

    return (

        <section className={`${styles.search} row`}>

            <div className="col s12 m8 offset-m2">

                <form>

                    <div className="input-field col-s12">

                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            className={`${styles.btn_block} autocomplete`}
                            id="autocomplete-input"
                        />

                        <label for="autocomplete-input">Please search a gif...</label>

                    </div>

                </form>

            </div>

        </section>

    )

}

export default Form