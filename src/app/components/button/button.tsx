import React from "react";

interface ButtonProps {
    name: string;
    type:'button' | 'submit' | 'reset';
    onclick?: React.MouseEventHandler
}

const Button = (props: ButtonProps) => {
    const { name, type, onclick } = props;

    return(
        <button className="text-[black] bg-green text-[1em] m-[5px] p-[5px] border-none hover:bg-pink font-sans" type={type} onClick={onclick}>{name}</button>
    )
}

export default Button;