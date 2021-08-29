import React from 'react';
import { NewsIns } from '../../model/News';

export interface CurrentNewsProps {
  news: NewsIns
}


export default function CurrentNews(currentNewsProps: CurrentNewsProps): JSX.Element {
  return <div className="news-block__news">
    <h2 className="news-block__h2">{currentNewsProps.news.title}</h2>
    <span className="news-block__span">Pyblished:  {currentNewsProps.news.publishedAt}</span>
    <div className="news-block__news__content-wrapper">
      <img className="news-block__news__img" src={currentNewsProps.news.urlToImage} alt="news img" />
      <div className="news-block__news__main-content">
        <div className="news-block__news__description">{currentNewsProps.news.description}</div>
        <div className="news-block__news__content">{currentNewsProps.news.content}</div>
        <div className="news-block__news__source-name">Source: {currentNewsProps.news.source.name}</div>
        <a href={currentNewsProps.news.url} target="_blank" rel="noreferrer">link: {currentNewsProps.news.url}</a>
      </div>
    </div>
  </div>
}


