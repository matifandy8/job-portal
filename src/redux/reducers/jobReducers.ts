import * as actionTypes from "../constants/jobConstants";

export const getJobDetailsReducer = (state = { hero: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_JOB_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_JOB_DETAILS_SUCCESS:
      return {
        loading: false,
        job: action.payload,
      };
    case actionTypes.GET_JOB_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_JOB_DETAILS_RESET:
      return {
        job: {},
      };
    default:
      return state;
  }
};