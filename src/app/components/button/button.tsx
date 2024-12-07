import React from "react";

interface ButtonProps {
    name: string;
    type:'button' | 'submit' | 'reset';
    onclick?: React.MouseEventHandler
}

const Button = (props: ButtonProps) => {
    const { name, type, onclick } = props;

    return(
        <button type={type} onClick={onclick}>{name}</button>
    )
}

export default Button;