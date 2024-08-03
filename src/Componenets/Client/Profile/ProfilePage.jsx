import React, { useState } from "react";
import "./ProfilePage.css";
import GeneralSettings from "./GeneralSettings/GeneralSettings";
import ChangePassword from "./ChangePassword/ChangePassword";
import InfoSettings from "./InfoSettings/InfoSettings";
import SocialLinks from "./SocialLinks/SocialLinks";
import Connections from "./Connections/Connections";
import Notifications from "./Notifications/Notifications";
import Uploads from "./Uploads";
import Favorites from "./Favorites/Favorites";

const ProfilePage = () => {
  const [activeComponent, setActiveComponent] = useState("general");

  const renderComponent = () => {
    switch (activeComponent) {
      case "general":
        return <GeneralSettings />;
      case "changePassword":
        return <ChangePassword />;
      case "info":
        return <InfoSettings />;
      case "socialLinks":
        return <SocialLinks />;
      case "connections":
        return <Connections />;
      case "notifications":
        return <Notifications />;
      case "uploads":
        return <Uploads />;
      case "favorites":
        return <Favorites />;
      default:
        return <GeneralSettings />;
    }
  };

  return (
    <div className="profile-page">
      <nav className="sidebar">
        <ul>
          <li onClick={() => setActiveComponent("general")}>
            General
          </li>
          <li onClick={() => setActiveComponent("changePassword")}>
            Change Password
          </li>
          <li onClick={() => setActiveComponent("socialLinks")}>
            Social Links
          </li>
          <li onClick={() => setActiveComponent("notifications")}>
            Notifications
          </li>
          <li onClick={() => setActiveComponent("uploads")}>
            Uploads
          </li>
          <li onClick={() => setActiveComponent("favorites")}>
            Favorites
          </li>
        </ul>
      </nav>
      <div className="main-content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default ProfilePage;
