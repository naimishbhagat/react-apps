import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import { createStore, combineReducers, applyMiddleware } from "redux";

// import logger from "redux-logger";
// import cakeReducer from "./components/cakeReducer";
// import iceCreamReducer from "./components/icecreamReducer";
// const rootReducer = combineReducers({
//   cake: cakeReducer,
//   iceCream: iceCreamReducer,
// });
// const store = createStore(rootReducer, applyMiddleware(logger));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
