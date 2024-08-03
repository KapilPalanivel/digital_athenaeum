import React, { useState, useRef } from "react";
import "./ChangePassword.css";

export const OTPComponent = ({ onBack }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP submitted for verification:", otp.join(""));
  };

  return (
    <div className="forgot-password">
      <h2 className="title">OTP Code Verification</h2>
      <p className="otp-message">OTP sent to your registered email ID</p>
      <form onSubmit={handleSubmit}>
        <div className="otp-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              className="otp-input"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </div>
        <button type="submit" className="verify-button">
          Verify OTP Code
        </button>
      </form>
      <button onClick={onBack} className="back-button">
        Back to Reset Password
      </button>
    </div>
  );
};
