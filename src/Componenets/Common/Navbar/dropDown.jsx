import PropTypes from 'prop-types';
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

DropdownMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default DropdownMenu;
