import * as actionTypes from "../constants/theJobsConstants";
import axios from "axios";

export const addToTeam = (id: string) => async (dispatch, getState) => {
  const data = await axios.get(
    `http://localhost:5000/jobs/${id}`
  );

  dispatch({
    type: actionTypes.ADD_TO_THEJOBS,
    payload: {
      id: data.job_id,
      description: data.job_description,
      location: data.job_location,
      fulltime: data.job_full_time,
    },
  });
  localStorage.setItem("theJobs", JSON.stringify(getState().team.teamItems));
};

export const removeFromTeam = (id: string) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_THEJOBS,
    payload: id,
  });

  localStorage.setItem("theJobs", JSON.stringify(getState().team.teamItems));