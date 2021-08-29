import React from 'react';
import { NewsIns } from '../../../model/News';
import News from './News';

export interface NewsBlockProps {
    news: NewsIns[]
}

export default function NewsBlock(newsBlockProps: NewsBlockProps): JSX.Element {
    return <div className="news-block-wrapper">
        {newsBlockProps.news.map((newsIns: NewsIns, index: number): JSX.Element => {
            return<News key={index} newsIns={newsIns}></News>  
        })}
    </div>
}