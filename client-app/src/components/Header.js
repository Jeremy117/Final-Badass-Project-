import { Link } from "react-router-dom";
import React from "react";
import mainImage from "../images/huddle-logo-white.png";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";


const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="right hide-on-med-and-down sidenav" id="mobile-demo">

        <li className="nav-item">
          <Link to="/Login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
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
      <ul className="right hide-on-med-and-down sidenav" id="mobile-demo">
        <li className="nav-item">
          <Link to="/Dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Team" className="nav-link">
            <i className="ion-compose" />&nbsp;Create New Team
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose" />&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a" />&nbsp;Profile Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link to={`/@${props.currentUser.username}`} className="nav-link">

            {props.currentUser.username}
          </Link>
        </li>
      </ul>
    );
  }

  return null;
};







class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <nav className="nav-wrapper blue">
        <div className="container">
          <a
            data-activates="slide-out"
            className="button-collapse right"
            label="Toggle Drawer"
            onClick={this.handleToggle}
          >
            <i className="material-icons">menu</i>
          </a>
          <Drawer open={this.state.open}>
            <MenuItem>
              <RaisedButton primary={true} fullWidth={true}>
                <Link to="/">Home</Link>
              </RaisedButton>
            </MenuItem>
            <MenuItem>
              <RaisedButton primary={true} fullWidth={true}>
                <Link to="/Dashboard">Dashboard</Link>
              </RaisedButton>
            </MenuItem>
          </Drawer>
          <Link to="/" className="brand-logo">
            <img src={mainImage} width={100} alt="" />
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
