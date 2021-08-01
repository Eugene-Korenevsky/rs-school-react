import React from 'react';
import Button from '../Button';
import LikeButtonImage from '../../../../assets/like.png';
import MessageButtonImage from '../../../../assets/message.png';
import './card.css';

export interface CardFooterProps {
    added: string
    onMessageClick: () => void;
    onLikeClick: () => void;
}

export default function CardFooter(cardFooter: CardFooterProps): JSX.Element {
    return <div className="card-footer">
        <div className="card-footer-wrapper">
            <div className="card-footer-left-content-wrapper">
                <h3 className="card-footer__added">{`Added on ${cardFooter.added}`}</h3>
                <Button
                    onCkickEvent={cardFooter.onLikeClick}
                    className="card-footer__like-button"
                    image={LikeButtonImage}
                    imageClassName="card-footer__like-button__image"
                    alt="like-button"></Button>
            </div>
            <Button onCkickEvent={cardFooter.onMessageClick}
                className="card-footer__message-button"
                image={MessageButtonImage}
                imageClassName="card-footer__message-button__image"
                alt="message-button"></Button>
        </div>
    </div>
}