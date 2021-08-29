import React from 'react';
import './share.css';

export interface ButtonProps {
  className: string,
  onClickEvent: () => void,
  text?: string,
  image?: string
  imageClassName?: string
  textWrapperClassName?: string
  alt?: string
}

export default function Button(buttonProps: ButtonProps): JSX.Element {
  if (buttonProps.image && buttonProps.text) {
    return <button onClick={buttonProps.onClickEvent} className={buttonProps.className}>
      <div className={buttonProps.textWrapperClassName}>{buttonProps.text}</div>
      <img src={buttonProps.image} className={buttonProps.imageClassName} alt={buttonProps.alt}></img>
    </button>;
  } if (buttonProps.image && !buttonProps.text) {
    return <button onClick={buttonProps.onClickEvent} className={buttonProps.className}>
      <img src={buttonProps.image} className={buttonProps.imageClassName} alt={buttonProps.alt}></img>
    </button>;
  } 
  return <button onClick={buttonProps.onClickEvent} className={buttonProps.className}>
    <h2 className={buttonProps.textWrapperClassName}>{buttonProps.text}</h2>
  </button>;
    
}