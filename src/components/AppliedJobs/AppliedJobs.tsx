import React from "react";
import "./AppliedJobs.css";

const AppliedJobs: React.FC = () => {
  return (
    <div className="appliedjobs">
      <h2 className="appliedjobs__title"> You Applied 3 jobs</h2>
      <table id="jobs">
        <tr>
          <th>Nro</th>
          <th>Job</th>
          <th>Applied date</th>
          <th>Company</th>
          <th>Expired date</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Reactjs Developer</td>
          <td>10/7/2021</td>
          <td>Amazon</td>
          <td>10/8/2021</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Vuejs Developer</td>
          <td>20/7/2021</td>
          <td>Facebook</td>
          <td>20/8/2021</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Angularjs Developer</td>
          <td>28/7/2021</td>
          <td>Google</td>
          <td>28/8/2021</td>
        </tr>
      </table>
    </div>
  );
};

export default AppliedJobs;
