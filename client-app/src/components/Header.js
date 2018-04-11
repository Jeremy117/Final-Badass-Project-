import { Link } from "react-router-dom";
import React from "react";
import mainImage from "../images/huddle-logo-white.png";

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul class="right hide-on-med-and-down sidenav">
        {/* <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li> */}
        <li className="">
          <Link to="/ArticleView" className="">
            Articles
          </Link>
        </li>
        <li className="">
          <Link to="/Login" className="">
            Sign in
          </Link>
        </li>

        <li className="">
          <Link to="/register" className="">
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
      <ul class="right hide-on-med-and-down sidenav">
        <li className="">
          <Link to="/Dashboard" className="">
            Dashboard
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li> */}
        <li className="">
          <Link to="/ArticleView" className="">
            Articles
          </Link>
        </li>
        <li className="">
          <Link to="/editor" className="">
            <i className="" />&nbsp;New Post
          </Link>
        </li>

        <li className="">
          <Link to="/settings" className="">
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
            <img src={mainImage} width={100} />
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
