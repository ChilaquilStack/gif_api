import React, {useState} from 'react'

const useSelect = (state, options) => {

    const [state, setState] = useState('')

    const SelectGifs = () => (

        <select
            className="browser-default"
        >

            <option value = "">Select</option> 

        </select>

    )

    return [state, SelectGifs]

}

export default useSelect