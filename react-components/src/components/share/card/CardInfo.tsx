import React from 'react';
import './card.css';

export interface CardInfoWrapperProps {
  info: string
  adress: string
  companyIcon: string
}

export default function CardInfo(cardInfoWrapperProps: CardInfoWrapperProps): JSX.Element {
  return <div className="card-info">
    <div className="card-info-wrapper">
      <div className="card-info__text-wrapper">
        <h3 className="card-info__info">{cardInfoWrapperProps.info}</h3>
        <h3 className="card-info__adress">{cardInfoWrapperProps.adress}</h3>
      </div>
      <img className="card-info__image" src={cardInfoWrapperProps.companyIcon} alt="company icon"></img>
    </div>
  </div>;
}