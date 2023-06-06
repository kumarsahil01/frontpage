import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import './Hero.scss'; // Import the SCSS file for styling

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-heading">find the perfect gift for everyone on your list.</h1>
          <div className="search-bar">
            <AiOutlineSearch size={18} />
            <input className="search-input" type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="hero-image">
          <img className="hero-img" src="https://cdn.pixabay.com/photo/2016/05/26/13/18/shark-1417151_640.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
