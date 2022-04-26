import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Login from "./components/Login";
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";
import Logout from "./components/Logout";

function App() {
  return (
    <Router>
      <h2>Friends Database</h2>
      <Link className="link" to="/login">
        Login
      </Link>
      <Link className="link" to="/friendslist">
        Friends List
      </Link>
      <Link className="link" to="/addfriend">
        Add Friend
      </Link>
      <Link className="link" to="/logout">
        Logout
      </Link>
      <Route path="/login" component={Login} />
      <div className="App">
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/login">
          <Redirect to="/" />{" "}
        </Route>
        <Route exact path="/friends">
          <FriendsList />
        </Route>
        <Route exact path="/friends/add">
          <AddFriend />
        </Route>
      </div>
    </Router>
  );
}

export default App;
