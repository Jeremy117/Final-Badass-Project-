import { Link } from "react-router-dom";
import React from "react";
import logoImage from "../images/huddle-logo-white.png";

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul class="right">
        {/* <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li> */}
        <li className="white-text">
          <Link to="/ArticleView" className="white-text">
            Articles
          </Link>
        </li>
        <li className="white-text">
          <Link to="/Login" className="white-text">
            Sign in
          </Link>
        </li>

        <li className="white-text">
          <Link to="/register" className="white-text">
            Sign up
          </Link>
        </li>
      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul class="right">
        <li className="white-text">
          <Link to="/Dashboard" className="white-text">
            Dashboard
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li> */}
        <li className="white-text">
          <Link to="/ArticleView" className="white-text">
            Articles
          </Link>
        </li>
        <li className="white-text">
          <Link to="/editor" className="white-text">
            <i className="" />&nbsp;New Post
          </Link>
        </li>

        <li className="white-text">
          <Link to="/settings" className="white-text">
            <i className="" />&nbsp;Profile Settings
          </Link>
        </li>

        {/* <li className="nav-item">
          <Link to={`/@${props.currentUser.username}`} className="nav-link">
            <img
              src={props.currentUser.image}
              className="user-pic"
              alt={props.currentUser.username}
            />
            {props.currentUser.username}
          </Link>
        </li> */}
      </ul>
    );
  }

  return null;
};

var menucolor = {
  backgroundColor: "#00233f"
};

class Header extends React.Component {
  render() {
    return (
      <nav style={menucolor}>
        <div class="container">
          <Link to="/" class="">
            <img src={logoImage} width={100} />
          </Link>
          <LoggedOutView currentUser={this.props.currentUser} />
          <LoggedInView currentUser={this.props.currentUser} />
        </div>
        {/* <div data-target="mobile-demo" class="sidenav-trigger">
          <i class="small material-icons">menu</i>
        </div> */}
      </nav>
    );
  }
}

export default Header;
