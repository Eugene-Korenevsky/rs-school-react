import React from 'react';
import { NewsError, NewsIns } from '../../../model/News';
import ErrorComponent from './ErrorComponent';
import News from './News';

export interface NewsBlockProps {
  news: NewsIns[]
  error: NewsError
}

export default function NewsBlock(newsBlockProps: NewsBlockProps): JSX.Element {
  return <div className="news-block-wrapper">
    {
      newsBlockProps.error ? <ErrorComponent error={newsBlockProps.error}></ErrorComponent>: 
        newsBlockProps.news.map((newsIns: NewsIns, index: number): JSX.Element => 
          <News index={index} key={index} newsIns={newsIns}></News>)
    }
    
  </div>
}