import * as actionTypes from "../constants/theJobsConstants";

export const theJobsReducer = (state = { teamItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_THEJOBS:
      const theJobs = action.payload;

      const existItem = state.teamItems.find((x) => x.job === theJobs.job);

      if (existItem) {
        return {
          ...state,
          teamItems: state.teamItems.map((x) =>
            x.job === existItem.job ? theJobs : x
          ),
        };
      } else {
        return {
          ...state,
          teamItems: [...state.teamItems, theJobs],
        };
      }
    case actionTypes.REMOVE_FROM_THEJOBS:
      return {
        ...state,
        teamItems: state.teamItems.filter((x) => x.job !== action.payload),
      };
    default:
      return state;
  }
};