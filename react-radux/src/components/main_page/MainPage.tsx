import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/Hooks';
import { QuestioQueryParams } from '../../model/QuestionQueryParams';
import { SortType } from '../../model/SortType';
import { searchNews } from '../../reducers/NewsReducer';
import {
  changePage, changePageSize, changeSearchVal, changeSortType,
} from '../../reducers/SearchReducer';
import SearchBar from '../share/SearchBar';
import './main-page.css';
import NewsBlock from './news_block/NewsBlock';
import PaginationBlock from './pagination_block/PaginationBlock';
import SortBlock from './SortBlock';

export default function MainPage(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  const news = useAppSelector((state) => state.news);
  const searchParams = useAppSelector((state) => state.searchParams);
  const dispatch = useAppDispatch();

  const search = async (): Promise<void> => {
    try {
      setLoading(true);
      const params: QuestioQueryParams = {
        page: searchParams.page,
        pageSize: searchParams.pageSize,
        question: searchParams.searchVal,
        sortType: searchParams.sortType
      }
      dispatch(searchNews(params));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

  }, [loading]);

  useEffect(() => {
    if (searchParams.searchVal.length > 0) search();
  }, [searchParams]);
  

  const onSearchHandler = (input: string): void => {
    dispatch(changeSearchVal(input));
  };

  const changePageSizeHandler = (e: React.FormEvent): void => {
    const val = (e.target as HTMLInputElement).value;
    dispatch(changePageSize(Number.parseInt(val, 10)));
  };

  const changePageHandler = (page: number): void => {
    dispatch(changePage(page));
  };

  const changeSortHandler = (sortBy: SortType): void => {
    dispatch(changeSortType(sortBy));
  };

  return <div className="main-page-wrapper">
    <SearchBar onSearchEvent={onSearchHandler} isSearching={loading}></SearchBar>
    <SortBlock onChooseHandler={changeSortHandler}></SortBlock>
    {
      news ? <NewsBlock></NewsBlock>
        : <div></div>
    }
    {
      news.newsSearchResult.articles.length > 0 ? <PaginationBlock onPageClickHandler={changePageHandler}
        onPageSizeChangeHandler={changePageSizeHandler}></PaginationBlock>
        : <div></div>
    }
  </div>;
}

