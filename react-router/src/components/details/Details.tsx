import React from 'react';
import { useParams } from 'react-router-dom';
import '../../style.css';
import { storageUtil } from '../../utils/StorageUtil';
import CurrentNews from './CurrentNews';
import './details.css';

export interface IUserPublicProfileRouteParams {
  id: string;
}





export default function Details(): JSX.Element {

  const { id } = useParams<IUserPublicProfileRouteParams>();

  const news = storageUtil.getNewsFromLocalStorage();
  
  return <div className="detail">
    {
      !news || news.length < Number.parseInt(id, 10) ? <div>Resource not found</div> : 
        <CurrentNews news={news[Number.parseInt(id, 10) - 1]}></CurrentNews>
    }
  </div>
    
}