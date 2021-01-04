import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import axios from "axios";
import Forgot from "./components/Forgot";

function App() {
  const [user, setUser] = useState(null);
  const fetchUser = () => {
    axios
      .get("user")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={() => <Home user={user} />} />
              <Route
                path="/login"
                component={() => <Login setUser={setUser} />}
              />
              <Route path="/sign-up" component={Register} />
              <Route path="/forgot" component={Forgot} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
