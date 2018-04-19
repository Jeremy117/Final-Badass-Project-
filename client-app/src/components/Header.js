import { Link } from "react-router-dom";
import React from "react";
import mainImage from "../images/huddle-logo-white.png";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import DontGo from "./Settings/DontGo";

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

        {props.currentUser.username}
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

  handleClick = event => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <nav className="nav-wrapper blue">
        <div className="container">
          <a
            data-activates="slide-out"
            className="medium button-collapse left"
            label="Toggle Drawer"
            onClick={this.handleToggle}
          >
            {/* <i className="material-icons">menu</i> */}
          </a>
          {/* <Drawer open={this.state.open}>
            <MenuItem>
              <RaisedButton backgroundColor="blue" fullWidth={true}>
                <Link to="/">Home</Link>
              </RaisedButton>
            </MenuItem>
            <MenuItem>
              <RaisedButton backgroundColor="blue" fullWidth={true}>
                <Link to="/Dashboard">Dashboard</Link>
              </RaisedButton>
            </MenuItem>
            <MenuItem>
              <RaisedButton backgroundColor="blue" fullWidth={true}>
                <Link to="/Editor">New Post</Link>
              </RaisedButton>
            </MenuItem>
            <MenuItem>
              <RaisedButton backgroundColor="blue" fullWidth={true}>
                <Link to="/Settings">Profile Settings</Link>
              </RaisedButton>
            </MenuItem>
          </Drawer> */}
          <Link to="/" className="brand-logo">
            <img src={mainImage} width={100} alt="" />
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
        <div>
          <i onClick={this.handleClick} className="material-icons">
            menu
          </i>

          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            targetOrigin={{ horizontal: "left", vertical: "top" }}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              <MenuItem>
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/Dashboard">Dashboard</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/Editor">New Post</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/Settings">Profile Settings</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/DontGo">Log Out</Link>
              </MenuItem>
            </Menu>
          </Popover>
        </div>
      </nav>
    );
  }
}

export default Header;
