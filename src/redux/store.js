import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//import reducers
import dataReducer from "./reducer/dataReducer";
import userReducer from "./reducer/userReducer";
import uiReducer from "./reducer/uiReducer";

const initialState = {};

const middleware = [thunk];

const rootReducers = combineReducers({
  doodles: dataReducer,
  data: userReducer,
  ui: uiReducer,
});

const store = createStore(
  rootReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
