import React from 'react';
import './Char.css'

const Char = (props) => {
    return(
        <div className="Char">
            <p onClick={props.click}>{props.letterFromText}</p>
        </div>
    )
}

export default Char;