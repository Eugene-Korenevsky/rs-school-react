import React from 'react';
import { useAppSelector } from '../../app/Hooks';
import { SortType } from '../../model/SortType';

export interface SortBlockProps {
  onChooseHandler: (choosenSort: SortType) => void
}

export default function SortBlock(sortBlockProps: SortBlockProps): JSX.Element {
  const sortBy = useAppSelector((state) => state.searchParams.sortType);

  return <div className="sort-block-wrapper">
    <span>Sort by: </span>
    <button onClick={(): void => sortBlockProps.onChooseHandler(SortType.POPULARITY)}
      className={`sort-block__button ${sortBy === SortType.POPULARITY ? 'sort-block__button-active' : ''}`} >
      {SortType.POPULARITY}
    </button>
    <button onClick={(): void => sortBlockProps.onChooseHandler(SortType.PUBLISHED_AT)}
      className={`sort-block__button ${sortBy === SortType.PUBLISHED_AT ? 'sort-block__button-active' : ''}`}>
      {SortType.PUBLISHED_AT}
    </button>
    <button onClick={(): void => sortBlockProps.onChooseHandler(SortType.RELEVANCY)}
      className={`sort-block__button ${sortBy === SortType.RELEVANCY ? 'sort-block__button-active' : ''}`}>
      {SortType.RELEVANCY}
    </button>
  </div>;
}
