import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function HeaderNav(): JSX.Element {

  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(location.pathname)

  const onClickHandler = (path: string): void => {
    setCurrentLocation(path)
  }
  return <nav className="header-nav">
    
    <ul className="header-ul">
      <Link className={`header-link ${currentLocation === '/' ? 'active':''}`} to="/" onClick={():void =>{
        onClickHandler('/')}}>Home</Link>
      <Link className={`header-link ${currentLocation === '/about' ? 'active':''}`} to="/about" onClick={(): void => {
        onClickHandler('/about')}}>About</Link>
    </ul>
  </nav>
}
