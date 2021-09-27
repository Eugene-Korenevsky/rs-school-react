import React from 'react';
import './card.css';

export interface CardPriceWrapperProps {
  price: string
  explonatoryText?: string,
}

export default function CardPrice(cardPriceWrapperProps: CardPriceWrapperProps): JSX.Element {
  return <div className="card-price">
    <h2 className="card-price__price">{cardPriceWrapperProps.price}</h2>
    <h3 className="card-price__explonatory-text">{cardPriceWrapperProps.explonatoryText}</h3>
  </div>;
}