import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Find your next job faster.</h1>
      <form className="home__search">
        <input type="text" placeholder="Search Job" />
        <input type="text" placeholder="Where" />
        <button type="submit">Search Job</button>
      </form>
    </div>
  );
};

export default Home;
