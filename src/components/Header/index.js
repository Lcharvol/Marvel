import React from 'react';
import title from '../../imgs/marvel_title.jpg';

import './Header.css';

const Header = () => (
  <div className="header_container">
    <img alt="title" className="title" src={title} />
  </div>
);

export default Header;