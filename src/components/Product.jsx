import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import './Product.scss'; // Import the SCSS file for styling
import phone from '../images/mobile.png'
import shoes from '../images/shoes.png'
import tshirt from '../images/t-shirt.png'

const Product = () => {
  return (
    <div className="product-container">
      <div className="product-header">
        <ul className="product-menu">
          <li>Collection</li>
          <li>Phones</li>
          <li>Shirts</li>
          <li>Shoes</li>
          <li>Glasses</li>
        </ul>
        <div className="product-buttons">
          <button>
            <BsArrowLeft size={18} />
          </button>
          <button className="next-button">
            <BsArrowRight size={18} />
          </button>
        </div>
      </div>
      <div className="product-grid">
        <div className="product">
          <img className="product-image" src={shoes} alt="" />
          <p className="product-title">Lorem ipsum dolor.</p>
          <h1 className="product-price">$700</h1>
        </div>
        <div className="product">
          <img className="product-image" src={tshirt} alt="" />
          <p className="product-title">Lorem ipsum dolor.</p>
          <h1 className="product-price">$700</h1>
        </div>
        <div className="product">
          <img className="product-image" src={phone} alt="" />
          <p className="product-title">Lorem ipsum dolor.</p>
          <h1 className="product-price">$700</h1>
        </div>
        <div className="product">
          <img className="product-image" src={shoes} alt="" />
          <p className="product-title">Lorem ipsum dolor.</p>
          <h1 className="product-price">$700</h1>
        </div>
        <div className="product">
          <img className="product-image" src={tshirt} alt="" />
          <p className="product-title">Lorem ipsum dolor.</p>
          <h1 className="product-price">$700</h1>
        </div>
        <div className="product">
          <img className="product-image" src={phone} alt="" />
          <p className="product-title">Lorem ipsum dolor.</p>
          <h1 className="product-price">$700</h1>
        </div>
        <div className="product">
          <img className="product-image" src={shoes} alt="" />
          <p className="product-title">Lorem ipsum dolor.</p>
          <h1 className="product-price">$700</h1>
        </div>
        <div className="product">
          <img className="product-image" src={phone} alt="" />
          <p className="product-title">Lorem ipsum dolor.</p>
          <h1 className="product-price">$700</h1>
        </div>
    
      </div>
      <div className="highlight-product">
        <img className="highlight-image" src="https://img.freepik.com/premium-vector/online-shopping-digital-technology-with-icon-blue-background-ecommerce-online-store-marketing_252172-219.jpg" alt="" />
        <div className="highlight-content">
          <h1 className="highlight-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit magni unde dicta optio consequatur enim?</p>
          <button className="highlight-button">See More</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
