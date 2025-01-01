import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faFemale, faChild } from '@fortawesome/free-solid-svg-icons';
import './CategoryModal.css';

const CategoryModal = ({ isOpen, onClose }) => {
  return isOpen ? (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Select Category</h2>
        <div className="category-buttons">
          <Link to="/mens" className="category-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faMale} size="2x" />
            <span>Men</span>
          </Link>
          <Link to="/womens" className="category-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faFemale} size="2x" />
            <span>Women</span>
          </Link>
          <Link to="/kids" className="category-btn" onClick={onClose}>
            <FontAwesomeIcon icon={faChild} size="2x" />
            <span>Kids</span>
          </Link>
        </div>
      </div>
    </div>
  ) : null;
};

export default CategoryModal;
