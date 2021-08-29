import React from 'react';
import HeaderNav from './components/HeaderNav';
import './header.css';

export default function Header(): JSX.Element {
  return <div className="header-wrapper">
    <HeaderNav></HeaderNav>
  </div>;
}
