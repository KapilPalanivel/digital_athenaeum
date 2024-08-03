import React, { useContext, useState } from 'react';
import './GeneralSettings.css';
import { isLoggedin } from "../../LoginContext";
import { Link } from "react-router-dom";

const GeneralSettings = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(isLoggedin);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    setShowLogoutPopup(false);
  };

  return (
    <div className="tab-pane fade active show" id="account-general">
      <div className="card-body media align-items-center">
        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" className="d-block ui-w-80" />
        <div className="media-body ml-4">
          <label className="btn btn-outline-primary">
            Upload new photo
            <input type="file" className="account-settings-fileinput" />
          </label> &nbsp;
          <button type="button" className="btn btn-default md-btn-flat">Reset</button>
          <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
        </div>
      </div>
      <hr className="border-light m-0" />
      <div className="card-body">
        <div className="form-group">
          <label className="form-label">Username</label>
          <input type="text" className="form-control mb-1" value="nmaxwell" />
        </div>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value="Nelle Maxwell" />
        </div>
        <div className="form-group">
          <label className="form-label">E-mail</label>
          <input type="text" className="form-control mb-1" value="nmaxwell@mail.com" />
          <div className="alert alert-warning mt-3">
            Your email is not confirmed. Please check your inbox.<br />
            <a href="javascript:void(0)">Resend confirmation</a>
          </div>
        </div>
        <button className="btn btn-danger logout-button" onClick={() => setShowLogoutPopup(true)}>
          Logout
        </button>
      </div>

      {showLogoutPopup && (
        <div className="logout-popup">
          <div className="logout-popup-content">
            <p>Are you sure?</p>
            <div className="logout-popup-actions">
              <Link to="/" className="btn btn-danger" onClick={handleLogout}>Logout</Link>
              <button className="btn btn-secondary" onClick={() => setShowLogoutPopup(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneralSettings;
