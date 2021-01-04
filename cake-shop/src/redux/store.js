import { createStore, combineReducers, applyMiddleware } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./users/userReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
