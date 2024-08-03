import React, { useState, useRef } from 'react';
import './ChangePassword.css';
import { OTPComponent } from './OTPComponent';
const ResetPasswordPage = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset submitted');
  };

  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        {!showForgotPassword ? (
          <>
            <h2 className="title">Reset Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="oldPassword">Old Password</label>
                <input
                  type="password"
                  id="oldPassword"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="reset-button">Reset Password</button>
            </form>
            <p className="forgot-password-link">
              <a href="#" onClick={toggleForgotPassword}>Forgot Password?</a>
            </p>
          </>
        ) : (
          <OTPComponent onBack={toggleForgotPassword} />
        )}
      </div>
    </div>
  );
};

export default ResetPasswordPage;