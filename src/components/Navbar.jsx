import React from 'react';
import { AiFillHeart, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import './Navbar.scss'; // Import the SCSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">E-<span className="logo-highlight">Commerce</span></h1>
      <div className="navbar-links">
        <ul className="links-list">
          <li>Home</li>
          <li>Products</li>
          <li>Services</li>
          <li>About</li>
        </ul>
      </div>
      <div className="navbar-icons">
        <AiOutlineSearch size={24} />
        <AiFillHeart size={24} />
        <AiOutlineShoppingCart size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
