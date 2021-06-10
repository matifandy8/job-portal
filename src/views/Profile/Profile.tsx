import React from "react";
import "./Profile.css";

const Profile: React.FC = () => {
  return (
    <div className="profile">
      <div className="profile_top">
        <div className="profile_sections">
          <p>My CV</p>
          <p>Applied jobs</p>
          <p>Saved jobs</p>
          <p>Following companies</p>
        </div>
      </div>
      <div className="section_info"></div>
    </div>
  );
};

export default Profile;
