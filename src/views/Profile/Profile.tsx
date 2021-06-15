import React, { useState } from "react";
import AppliedJobs from "../../components/AppliedJobs/AppliedJobs";
import FollowingCompanies from "../../components/FollowingCompanies/FollowingCompanies";
import ImgPreview from "../../components/ImgPreview/ImgPreview";
import MyCv from "../../components/MyCv/MyCv";
import SavedJobs from "../../components/SavedJobs/SavedJobs";
import "./Profile.css";

const Profile: React.FC = () => {
  const { active, setActive } = useState<String[]>("MyCv");

  return (
    <div className="profile">
      <div className="profile_top">
        <div className="profile_image">
          <ImgPreview />
        </div>
        <div className="profile_sections">
          {/* function in every p */}
          <button onClick={() => setActive("MyCv")}>My CV</button>
          <button onClick={() => setActive("AppliedJobs")}>Applied jobs</button>
          <button onClick={() => setActive("SavedJobs")}>Saved jobs</button>
          <button onClick={() => setActive("FollowingCompanies")}>
            Following companies
          </button>
        </div>
      </div>
      <div className="section_info">
        {/* This section change with a fuction */}
        {active === "MyCv" && <MyCv />}
        {active === "AppliedJobs" && <AppliedJobs />}
        {active === "SavedJobs" && <SavedJobs />}
        {active === "FollowingCompanies" && <FollowingCompanies />}
      </div>
    </div>
  );
};

export default Profile;
