import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'; // Add this line to import the CSS file

function ErrorPage() {
  return (
    <div className="error-page">
      <i>Page Not Found ...</i>
      <Link to="/" className="return-link">Return to Home</Link>
    </div>
  );
}

export default ErrorPage;
