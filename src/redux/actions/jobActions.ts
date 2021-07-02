import * as actionTypes from "../constants/jobConstants";
import axios from "axios";

export const getHeroDetails = (id:string) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_JOB_DETAILS_REQUEST });

    const data = await axios.get(
      `http://localhost:5000/jobs/${id}`
    );

    dispatch({
      type: actionTypes.GET_JOB_DETAILS_SUCCESS,
      payload: {
        id: data.job_id,
        description: data.job_description,
        location: data.job_location,
        fulltime: data.job_full_time,
      },
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_JOB_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeHeroDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_JOB_DETAILS_RESET });
};