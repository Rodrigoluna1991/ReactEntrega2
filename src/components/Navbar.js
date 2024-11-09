import React from 'react';
import './Navbar.css'; 

const Navbar = ({ setSearchQuery }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Tienda</a>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar productos..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="categories">
        <ul>
          <li><a href="/">Hombres</a></li>
          <li><a href="/">Mujeres</a></li>
          <li><a href="/">Buscar</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;







