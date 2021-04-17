import React from 'react';
import '../css/Header.css';
import {Link} from 'react-router-dom';
const Header = ()=> {
    return(
        <div className="header">
        <ul>
        <li><Link to='/'> Weather</Link> </li>
        <li><Link to="/Searchbar">SearchBar</Link></li>
        <li><Link to="/VideoSearch">VideoSearch</Link></li>
        <li><Link to="/Search">Search in Wikipedia</Link></li>
      </ul>
      </div>
    );
};
export default Header;