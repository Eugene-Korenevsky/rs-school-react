import React from 'react';
import PhotosCountDiv from './PhotosCount';

export interface CardImageWrapperProps {
   img: string
   photoCount: number
}

export default function CardImage(cardImageWrapperProps: CardImageWrapperProps): JSX.Element {
    return <div className="card-image">
    <PhotosCountDiv count={cardImageWrapperProps.photoCount} className="card-image__info-wrapper"></PhotosCountDiv>
    <img className="card-image__image" src={cardImageWrapperProps.img} alt="building image"></img>
</div>
}