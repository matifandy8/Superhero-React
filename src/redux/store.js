import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { teamReducer } from "./reducers/teamReducers";
import { getHeroDetailsReducer } from "./reducers/heroReducers";

const reducer = combineReducers({
  team: teamReducer,
  getHeroDetails: getHeroDetailsReducer,
});

const middleware = [thunk];

const teamItemsInLocalStorage = localStorage.getItem("team")
  ? JSON.parse(localStorage.getItem("team"))
  : [];

const INITIAL_STATE = {
  team: {
    teamItems: teamItemsInLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
