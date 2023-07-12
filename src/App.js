import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from "./pages/userloginpage";
import RegisterPage from "./pages/userregisterpage";


const App = () => (
  <Router>
    <nav>
      <ul>  
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>

    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
  </Router>
);

export default App;
