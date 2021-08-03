import React from 'react';
import Button from './Button';
import Search from '../../../assets/search.png';

export interface SimpleSearchBarProps {
    onSearchEvent: () => void;
}

export default function SimpleSearchBar(simpleSearchBarProps: SimpleSearchBarProps): JSX.Element {
    return <div className="simple-search-bar">
        <Button className="simple-search-bar__button"
            onClickEvent={simpleSearchBarProps.onSearchEvent}
            image={Search}
            imageClassName="simple-search-bar__button__image"
            alt="search"></Button>
        <input className="simple-search-bar__input" type="text" placeholder="Search.."></input>
    </div>

}