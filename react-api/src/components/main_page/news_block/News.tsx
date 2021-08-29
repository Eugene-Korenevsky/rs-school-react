import React from 'react';
import { NewsIns } from '../../../model/News';
import './news.css';

export interface NewsProps {
    newsIns: NewsIns
}

export default function News(newsProps: NewsProps): JSX.Element {
    return <div className="news-block__news">
        <h2 className="news-block__h2">{newsProps.newsIns.title}</h2>
        <span className="news-block__span">Pyblished:  {newsProps.newsIns.publishedAt}</span>
        <div className="news-block__news__content-wrapper">
            <img className="news-block__news__img" src={newsProps.newsIns.urlToImage} alt="news img" />
            <div className="news-block__news__main-content">
                <div className="news-block__news__description">{newsProps.newsIns.description}</div>
                <div className="news-block__news__content">{newsProps.newsIns.content}</div>
                <div className="news-block__news__source-name">Source: {newsProps.newsIns.source.name}</div>
                <a href={newsProps.newsIns.url} target="_blank">link: {newsProps.newsIns.url}</a>
            </div>
        </div>
    </div>
}