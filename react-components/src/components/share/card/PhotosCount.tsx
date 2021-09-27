import React from 'react';
import Camera from '../../../../assets/camera.svg';
import './card.css';

export interface IPhotosCountDiv {
  count: number
  className: string
}

export default function PhotosCountDiv(photosCountDivProps: IPhotosCountDiv): JSX.Element {
  return <div className={photosCountDivProps.className}>
    <div className="photos-count"> {photosCountDivProps.count} </div> 
    <img src={Camera} alt="camera" />
  </div>;

}