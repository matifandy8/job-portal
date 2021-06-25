import React from "react";
import "./SavedJobs.css";

const SavedJobs: React.FC = () => {
  return (
    <div className="savedJobs">
      <h2 className="savedJobs__title"> You Saved 3 jobs</h2>
      <table id="jobs">
        <tr>
          <th>Nro</th>
          <th>Job</th>
          <th>Company</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Reactjs Developer</td>
          <td>Amazon</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Vuejs Developer</td>
          <td>Facebook</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Angularjs Developer</td>
          <td>Google</td>
        </tr>
      </table>
    </div>
  );
};

export default SavedJobs;
