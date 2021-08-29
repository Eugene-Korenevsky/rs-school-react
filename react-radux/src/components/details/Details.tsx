import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/Hooks';
import '../../style.css';
import CurrentNews from './CurrentNews';
import './details.css';

export interface IUserPublicProfileRouteParams {
  id: string;
}

export default function Details(): JSX.Element {
  const news = useAppSelector((state) => state.news);

  const { id } = useParams<IUserPublicProfileRouteParams>();

  return <div className="detail">
    {
      !news || news.newsSearchResult.articles.length < Number.parseInt(id, 10) ? <div>Resource not found</div> :
        <CurrentNews news={news.newsSearchResult.articles[Number.parseInt(id, 10) - 1]}></CurrentNews>
    }
  </div>;
}
