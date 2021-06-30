import React from "react";
import "./JobInfo.css";
import { AiOutlineHeart } from "react-icons/ai";

function JobInfo() {
  return (
    <div>
      <h1>I am the new view Job info</h1>
      <div className="jobInfo">
        <div>
          <img className="job__img" alt="" src="" />
        </div>
        <div className="jobInfo__body">
          <div className="job__title">Reactjs</div>
          <div className="job__company">amazon</div>
          <div className="job__subtitle">Montevideo</div>
          <div className="job__badge">Full time</div>
          <button className="jobInfo__btn">boton</button>
        </div>
        <div className="job__save">
          <AiOutlineHeart />
          Save
        </div>
      </div>
    </div>
  );
}

export default JobInfo;
