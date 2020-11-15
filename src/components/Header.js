import React from 'react';
import logo from '../images/starwars-logo.png';

function Header() {
  return (
    <header>
      <img src={ logo } alt="Logo" width="150px" />
      <h1>Travel calculator</h1>
  </header>
  )
}

export default Header;