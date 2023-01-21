import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/login-user" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
