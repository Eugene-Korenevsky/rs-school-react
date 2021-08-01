import React from 'react';
import Card, { CardProps } from '../share/card/Card';
import RusSims from '../../../assets/rus-sim.png';
import Savills from '../../../assets/savills-logo.png';
import Building from '../../../assets/building.jpg';
import Building1 from '../../../assets/building1.jpg';
import Building2 from '../../../assets/building2.jpg';
import Building3 from '../../../assets/building3.jpg';
import Building4 from '../../../assets/building4.jpg';
import Building5 from '../../../assets/building5.jpg';

const cards: CardProps[] = [
    {
        id: 1,
        img: Building,
        companyLogo: RusSims,
        photoCount: 13,
        price: `$${21000000}`,
        className: 'card',
        addedDate: '22/02/2021',
        adress: 'London',
        linkText: 'Apartaments',
        buildingInfo: '5 bedroom apartoments for sale'
    },
    {
        id: 2,
        img: Building1,
        companyLogo: Savills,
        photoCount: 23,
        price: `$${2120000}`,
        className: 'card',
        addedDate: '22/02/2021',
        adress: 'London',
        linkText: 'Apartaments',
        explonatoryText: 'Guide Price',
        buildingInfo: '5 bedroom apartoments for sale in the center of London'
    },
    { 
        id: 3,
        img: Building2,
        companyLogo: RusSims,
        photoCount: 33,
        price: `$${2110000}`,
        className: 'card',
        addedDate: '22/02/2021',
        adress: 'London',
        linkText: 'Apartaments',
        explonatoryText: 'Guide Price',
        buildingInfo: '5 bedroom apartoments for sale in the center of London'
    },
    {
        id: 4,
        img: Building3,
        companyLogo: Savills,
        photoCount: 18,
        price: `$${2106000}`,
        className: 'card',
        addedDate: '01/02/2021',
        adress: 'London',
        linkText: 'Apartaments',
        explonatoryText: 'Guide Price',
        buildingInfo: '5 bedroom apartoments for sale in the center of London'
    },
    {
        id: 5,
        img: Building4,
        companyLogo: RusSims,
        photoCount: 21,
        price: `$${2105000}`,
        className: 'card',
        addedDate: '22/01/2021',
        adress: 'London',
        linkText: 'Apartaments',
        explonatoryText: 'Guide Price',
        buildingInfo: '5 bedroom apartoments for sale in the center of London'
    },
    {
        id: 6,
        img: Building5,
        companyLogo: Savills,
        photoCount: 5,
        price: `$${216000}`,
        className: 'card',
        addedDate: '12/02/2021',
        adress: 'London',
        linkText: 'Apartaments',
        explonatoryText: 'Guide Price',
        buildingInfo: '5 bedroom apartoments for sale in the center of London'
    }

];

export default function MainPage(): JSX.Element {
    const cardElements:JSX.Element[] = cards.map((item): JSX.Element => {
        return <Card key={item.id} {...item}></Card>;
    })
    return <div className='cards-wrapper'>
        {cardElements}
    </div>
}