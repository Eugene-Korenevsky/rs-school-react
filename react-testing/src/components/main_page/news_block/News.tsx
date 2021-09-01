import React from 'react';
import { useHistory } from 'react-router-dom';
import { NewsIns } from '../../../model/News';
import './news.css';

export interface NewsProps {
  newsIns: NewsIns
  id: number

}

export default function News(newsProps: NewsProps): JSX.Element {
  const history = useHistory();

  const onClickHandler = (): void => {
    history.push(`/details/${newsProps.id}`);
  };
  return <div onClick={onClickHandler} className="news-block__news">
    <h2 className="news-block__h2">{newsProps.newsIns.title}</h2>
    <span data-testid="published" className="news-block__span">Published:  {newsProps.newsIns.publishedAt}</span>
    <div className="news-block__news__content-wrapper">
      <img className="news-block__news__img" src={newsProps.newsIns.urlToImage} alt="news img" />
      <div className="news-block__news__main-content">
        <div className="news-block__news__description">{newsProps.newsIns.description}</div>
        <div className="news-block__news__content">{newsProps.newsIns.content}</div>
        <div className="news-block__news__source-name">Source: {newsProps.newsIns.source.name}</div>
        <a href={newsProps.newsIns.url} target="_blank" rel="noreferrer">link: {newsProps.newsIns.url}</a>
      </div>
    </div>
  </div>;
}
