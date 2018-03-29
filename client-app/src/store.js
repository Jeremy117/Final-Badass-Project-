import { createStore, applyMiddleware, compose } from "redux";
import { promiseMiddleware } from "./middleware";

const defaultState = {
  appName: "Huddle",
  articles: null
};

const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case "ARTICLE_HOME_PAGE_LOADED":
      return action.error
        ? state
        : {
            ...state,
            articles: action.payload.articles
          };
    default:
      return state;
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxStore = createStore(
  reducer,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);

export default reduxStore;
