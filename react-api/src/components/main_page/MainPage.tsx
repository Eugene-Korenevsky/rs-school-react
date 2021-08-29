import React, { useEffect, useState } from 'react';
import { News } from '../../model/News';
import { SortType } from '../../model/SortType';
import { newsService } from '../../services/NewsSerivce';
import SearchBar from '../share/SearchBar';
import './main-page.css';
import NewsBlock from './news_block/NewsBlock';
import PaginationBlock from './pagination_block/PaginationBlock';
import SortBlock from './SortBlock';

export default function MainPage(): JSX.Element {
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [sortType, setSortType] = useState<SortType>(SortType.POPULARITY);
    const [pageNews, setPageNews] = useState<News | null>(null);
    const [searchVal, setSearchVal] = useState('');
    const [totalResults, setTotalResults] = useState<number>(0);

    useEffect(() => {

    }, [loading, totalResults]);

    useEffect(() => {
        if (searchVal.length > 0) search();
    }, [searchVal, sortType, pageSize, page]);
    const search = async (): Promise<void> => {
        try {
            setLoading(true)
            const res = await newsService.getResult(page, pageSize, searchVal, sortType);
            setTotalResults(res.totalResults);
            setPageNews(res);
            console.log(res)
        } catch (e) {
            console.log('error');
        } finally {
            setLoading(false);
        }
    }

    const onSearchHandler = (input: string): void => {
        setSearchVal(input)
    }

    const changePageSizeHandler = (e: React.FormEvent): void => {
        const val = (e.target as HTMLInputElement).value;
        setPageSize(Number.parseInt(val));
    }

    const changePageHandler = (page: number): void => {
        setPage(page)     
    }


    return <div className="main-page-wrapper">
        <SearchBar onSearchEvent={onSearchHandler} isSearching={loading}></SearchBar>
        <SortBlock sortBy={sortType} onChooseHandler={(choosenSort: SortType): void => {
            setSortType(choosenSort);
        }}></SortBlock>
        {
            pageNews ? <NewsBlock news={pageNews.articles}></NewsBlock>
                : <div></div>
        }
        {
            pageNews ? <PaginationBlock page={page} pageSize={pageSize} totalResults={totalResults}
            onPageClickHandler={changePageHandler} onPageSizeChangeHandler={changePageSizeHandler}></PaginationBlock>
                : <div></div>
        }    
    </div>

}