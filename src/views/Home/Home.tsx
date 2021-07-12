import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to Jobox</h1>
      <div className="home__info">
        <div className="home__info-box">
          <h2>
            I'm a <strong className="job-seeker">Job Seeker</strong>
          </h2>
          <Link to="/jobs">Search for Jobs or upload Cv</Link>
        </div>
        <div className="home__info-box">
          <h2>
            I'm a <strong className="job-seeker">I'm an Employer</strong>
          </h2>
          <Link to="/jobs">Post Jobs and Find talent</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
