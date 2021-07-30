import React from 'react';
import './app.css';

export interface Props {
    className: string;
    id: string;
    onClick: () => void;
}

export default function App(props: Props)
{
    return <h1 onClick={props.onClick} className={props.className} id={props.id}>{props.className}: {props.id}</h1>;
}