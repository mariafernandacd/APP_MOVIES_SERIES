import React, { useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { useHistory     } from 'react-router-dom';

const Search = () => {

    const[value, setValue] = useState ("");

    const history = useHistory();

    const handleChange = (event) => setValue(event.target.value)

    const handleKeyDown = (event) => {
       
        if (event.keyCode === 13 && value) {
            history.push(`/multi/${value}/page/1`)
        }
    };

    return ( 
        
        <div className="input-group-prepend ">
            <span className="input-group-text input-grey">
                <RiSearchLine
                style={{marginLeft: 15}} 
                color={'#fafafa'}size={27} 
                className="icons-input" />
            </span>
            <input 
                type="search"  
                value={value}
                className="form-control input-grey" 
                placeholder="Busqueda..."
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                />
        </div>
    )
}

export default Search
