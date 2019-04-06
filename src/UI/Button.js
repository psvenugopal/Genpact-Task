import React from 'react';

const Button = (props) => (
    <button className="btn-primary" onClick={props.handleClick}>
        {props.value}
    </button>
);
export default Button;