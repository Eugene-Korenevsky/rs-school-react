import React from 'react';
import Button, { ButtonProps } from '../Button';
import './card.css';
import PhotosCountDiv from './PhotosCount';

import CardImage from './CardImage';
import CardPrice from './CardPrice';
import CardInfo from './CardInfo';
import CardFooter from './CardFooter';

export interface CardProps {
    img: string,
    companyLogo: string,
    photoCount: number,
    price: string,
    className: string,
    addedDate: string,
    linkText: string,
    adress: string,
    buildingInfo: string,
    explonatoryText?: string,
    explonatoryTextClass?: string,
}

export default function Card(cardProps: CardProps): JSX.Element {

    const messageButtonEventHandler = (): void => {
            console.log('send message');
    }
    

    const likeButtonEventHandler = (): void => {
        console.log('send like');
    }


    return <div className={cardProps.className}>
        <CardImage img={cardProps.img} photoCount={cardProps.photoCount}></CardImage>
        <CardPrice price={cardProps.price} explonatoryText={cardProps.explonatoryText}></CardPrice>
        <CardInfo info={cardProps.buildingInfo} companyIcon={cardProps.companyLogo} adress={cardProps.adress}></CardInfo>
        <CardFooter added={cardProps.addedDate}
            onLikeClick={likeButtonEventHandler}
            onMessageClick={messageButtonEventHandler}></CardFooter>
    </div>;
}