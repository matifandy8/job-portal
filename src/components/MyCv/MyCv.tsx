import React from "react";
import "./MyCv.css";

const MyCv: React.FC = () => {
  return (
    <div className="mycv">
      <div className="mycv__title">
        <h2>Basic Information</h2>
      </div>
      <div className="mycv__form">
        <label>
          Full Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="name" />
        </label>
        <label>
          Adress:
          <input type="text" name="name" />
        </label>
        <label>
          Phone Number:
          <input type="text" name="name" />
        </label>
        <label>
          From:
          <input type="text" name="name" />
        </label>
        <label>
          Current job:
          <input type="text" name="name" />
        </label>
        <label>
          Job type:
          <input type="text" name="name" />
        </label>
        <label>
          Job title:
          <input type="text" name="name" />
        </label>
        <label>
          Work experience:
          <input type="text" name="name" />
        </label>
        <label>
          Attached CV:
          <input type="file" name="name" />
        </label>
      </div>
    </div>
  );
};

export default MyCv;
