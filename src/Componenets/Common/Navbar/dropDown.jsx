import React from 'react';
import { Link } from 'react-router-dom';
import './dropDown.css';

const DropdownMenu = ({ isOpen }) => {
  return (
    <div className={`dropdown-menu ${isOpen ? 'show' : 'hide'}`}>
      <Link to="/profile">Your Profile</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default DropdownMenu;
