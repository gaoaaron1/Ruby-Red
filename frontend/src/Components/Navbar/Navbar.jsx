import React, { useContext, useState } from "react";
import "./Navbar.css"; // Updated CSS for vertical navbar and search bar
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHome, faInfo, faBriefcase, faPaperPlane, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // State to control dropdown visibility
  const navigate = useNavigate();

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleCategoryClick = (category) => {
    navigate(`/${category}`);
  };

  

  return (
    <>
      {/* Search Bar with Button */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="navbar-vertical">
        <ul className="menu">
          {/* Home */}
          <li className="menu_list">
            <span className="front">
              <FontAwesomeIcon icon={faHome} />
            </span>
            <Link to="/" className="side">Home</Link>
          </li>
          {/* About */}
          <li className="menu_list">
            <span className="front">
              <FontAwesomeIcon icon={faInfo} />
            </span>
            <Link to="/about" className="side">About</Link>
          </li>
          {/* Category (with dropdown) */}
          <li className="menu_list category" onMouseEnter={toggleCategoryDropdown} onMouseLeave={toggleCategoryDropdown}>
            <span className="front">
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
            <Link to="#" className="side">Category</Link>
            {/* Dropdown Menu */}
            <ul className={`dropdown-menu ${isCategoryOpen ? 'open' : ''}`}>
            <li className="dropdown-item" onClick={() => handleCategoryClick('mens')}>Men</li>
              <li className="dropdown-item" onClick={() => handleCategoryClick('womens')}>Women</li>
              <li className="dropdown-item" onClick={() => handleCategoryClick('kids')}>Kids</li>
            </ul>
          </li>
          {/* Contact */}
          <li className="menu_list">
            <span className="front">
              <FontAwesomeIcon icon={faPaperPlane} />
            </span>
            <Link to="/contact" className="side">Contact</Link>
          </li>
          {/* Cart */}
          <li className="menu_list">
            <span className="front">
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
            <Link to="/cart" className="side">
              Cart <span className="cart-count">{getTotalCartItems()}</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
