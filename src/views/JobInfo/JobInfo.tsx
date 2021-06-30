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
        </div>
        <div className="job__save">
          <AiOutlineHeart />
          Save
        </div>
      </div>
      <div className="jobInfo__about">
        <div className="about__title">
          <h2>About</h2>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, obcaecati excepturi unde ut nulla sit?
        </p>
      </div>
      <div className="jobInfo__description">
        <div className="description__title">
          <h2>Job Description and Requirements</h2>
        </div>
        <h2>Description</h2>
        <br />
        <h3>About the role</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          quisquam animi, fugiat autem nam et. Vitae nostrum tempore perferendis
          libero voluptatibus eius fugiat voluptates, qui eligendi iure cumque
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quis
            error dicta, excepturi dolore facere!
          </p>
        </p>
        <br />
        <h3>Resposibilities</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          quisquam animi, fugiat autem nam et. Vitae nostrum tempore perferendis
          libero voluptatibus eius fugiat voluptates, qui eligendi iure cumque
          suscipit corporis cupiditate hic? Ea ullam adipisci enim laboriosam
          tempora officia repudiandae ducimus, ab sed quas hic distinctio minus
          similique a labore?
        </p>
        <br />
        <br />
        <h2>Requirements</h2>
        <br />
        <ul>
          <li>
            one Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium rerum incidunt possimus tempora voluptates impedit.
          </li>
          <li>
            one Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium rerum incidunt possimus tempora voluptates impedit.
          </li>
          <li>
            one Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium rerum incidunt possimus tempora voluptates impedit.
          </li>
          <li>
            one Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium rerum incidunt possimus tempora voluptates impedit.
          </li>
        </ul>
        <br />
        <button className="applied__btn">Apply</button>
      </div>
    </div>
  );
}

export default JobInfo;
