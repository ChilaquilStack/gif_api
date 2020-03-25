import React from 'react'

import styles from './Form.module.css'

const Form = ({setName}) => {

    const handleChange = (e) => {
        
        const {target : {value}} = e
        
        setName(value)

    }

    return (

        <section className={`${styles.search} row`}>

            <div className="col s12 m8 offset-m2">

                <form>

                    <h2 className={styles.heading}>Encuentra Gifs</h2>

                    <div className="input-field col-s12">

                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            placeholder="search"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                        />

                    </div>

                </form>

            </div>

        </section>

    )

}

export default Form