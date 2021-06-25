import React from "react";
import "./FollowingCompanies.css";

const FollowingCompanies: React.FC = () => {
  return (
    <div className="followingCompanies">
      <h2 className="followingCompanies__title">
        You´re Following 3 Companies
      </h2>
      <div className="job">
        <div>
          <img
            className="job__img"
            alt=""
            src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c518.png"
          />
        </div>
        <div className="job__body">
          <div className="job__title">React Developer</div>
          <div className="job__company">Amazon</div>
          <div className="job__subtitle">Montevideo</div>
          <div className="job__badge">Full time</div>
        </div>
      </div>
    </div>
  );
};

export default FollowingCompanies;
