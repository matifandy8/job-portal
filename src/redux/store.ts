import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { theJobsReducer } from "./reducers/theJobsReducers";
import { getJobDetailsReducer } from "./reducers/jobReducers";

const reducer = combineReducers({
  theJobs: theJobsReducer,
  getJobDetails: getJobDetailsReducer,
});

const middleware = [thunk];

const theJobsItemsInLocalStorage = localStorage.getItem("theJobs")
  ? JSON.parse(localStorage.getItem("theJobs"))
  : [];

const INITIAL_STATE = {
  theJobs: {
    theJobsItems: theJobsItemsInLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;