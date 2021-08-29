import React, { useState } from 'react';
import './search-bar.css';

export interface SearchBarProps {
  onSearchEvent: (input: string) => void;
  isSearching: boolean
}

export default function SearchBar(simpleSearchBarProps: SearchBarProps): JSX.Element {
  const [search, setSearch] = useState<string>('');

  const onSubmitHandler = (): void => {
    simpleSearchBarProps.onSearchEvent(search);
    setSearch('');
  };

  return <div className="simple-search-bar">
    <input value={search} className="simple-search-bar__input" onChange={(e: React.ChangeEvent): void => {
      const input = (e.target as HTMLInputElement).value;
      setSearch(input);
    }} type="text" placeholder="input yor question.."></input>
    <button className="simple-search-bar__button" onClick={onSubmitHandler} >
      {!simpleSearchBarProps.isSearching ? <div>Search</div>
        : <div>Searching</div>
      }
    </button>
  </div>;
}
