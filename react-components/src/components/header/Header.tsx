import React from 'react';
import SimpleSearchBar from '../share/SimpleSearchBar';
import './header.css';

export default function Header(): JSX.Element {
    const onSearchEventHandler = (): void => {
        console.log('search');
    }
    return <div className="header-wrapper">
           <SimpleSearchBar onSearchEvent={onSearchEventHandler}></SimpleSearchBar> 
    </div>
}