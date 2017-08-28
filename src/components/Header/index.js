import React from 'react';
import title from '../../imgs/marvel_title.jpg';

import './Header.css';

const Header = () => (
  <div className="header_container">
    <div className="header_side" />
    <img alt="title" className="title" src={title} />
    <div className="header_side" />
  </div>
);

export default Header;