import React, { useState } from "react";
import "./ProfilePage.css";
import Profile from "./Profile";
import Uploads from "./Uploads";
import Favorites from "./Favorites";

const ProfilePage = () => {
  const [activeComponent, setActiveComponent] = useState("profile");

  const renderComponent = () => {
    switch (activeComponent) {
      case "profile":
        return <Profile />;
      case "uploads":
        return <Uploads />;
      case "favorites":
        return <Favorites />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="profile-page">
      <div className="sidebar">
        <ul>
          <li onClick={() => setActiveComponent("profile")}>Profile</li>
          <li onClick={() => setActiveComponent("uploads")}>Uploads</li>
          <li onClick={() => setActiveComponent("favorites")}>Favorites</li>
          <li onClick={() => setActiveComponent("archive")}>Internet Archive</li>
        </ul>
      </div>
      <div className="main-content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default ProfilePage;
