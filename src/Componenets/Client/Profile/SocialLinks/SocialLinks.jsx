import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div  id="account-social-links">
      <div className="card-body pb-2">
        <div className="form-group">
          <label className="form-label">Twitter</label>
          <input type="text" className="form-control" value="https://twitter.com/user" />
        </div>
        <div className="form-group">
          <label className="form-label">Facebook</label>
          <input type="text" className="form-control" value="https://www.facebook.com/user" />
        </div>
        <div className="form-group">
          <label className="form-label">Instagram</label>
          <input type="text" className="form-control" value="https://www.instagram.com/user" />
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
