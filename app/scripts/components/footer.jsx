import React from 'react';
import { Link } from 'react-router';

const Footer = (props) => {
  return (
    <footer>
      <nav className="clearfix">
        <div className="nav-item">
          <Link to="home">Home</Link>
        </div>
        <div className="nav-item">
          <Link to="info">Info</Link>
        </div>
      </nav>
    </footer>
  )
};

export default Footer;
