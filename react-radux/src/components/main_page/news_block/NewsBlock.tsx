import React from 'react';
import { useAppSelector } from '../../../app/Hooks';
import { NewsIns } from '../../../model/News';
import ErrorComponent from './ErrorComponent';
import News from './News';

export default function NewsBlock(): JSX.Element {
  const news = useAppSelector((state) => state.news);

  return <div className="news-block-wrapper">
    {
      news.error.error ? <ErrorComponent error={news.error}></ErrorComponent> :
        news.newsSearchResult.articles.map((newsIns: NewsIns, index: number): JSX.Element =>
          <News id={index + 1} key={index} newsIns={newsIns}></News>)
    }

  </div>;
}
