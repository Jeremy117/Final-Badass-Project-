import { Link } from "react-router-dom";
import React from "react";
import mainImage from "../images/huddle-logo-white.png";



const LoggedOutView = props => {
  if (!props.currentUser) {
    return (

      <ul class="right hide-on-med-and-down sidenav" id="mobile-demo">
        {/* <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li> */}
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
      <ul class="right hide-on-med-and-down sidenav" id="mobile-demo">

        <li className="nav-item">
          <Link to="/Dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li> */}
        <li className="nav-item">
          <Link to="/ArticleView" className="nav-link">
            Articles
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
            {/* <img
              src={props.currentUser.image}
              className="user-pic"
              alt={props.currentUser.username}
            /> */}
            {props.currentUser.username}
          </Link>
        </li>
      </ul>
    );
  }

  return null;
};


// var menucolor = {
//   backgroundColor: "#00233f"
// };
// class Header extends React.Component {
//   render() {
//     return (
//       <nav style={menucolor}>
//         <div class="container">
//           <Link to="/" class="">
//             <img src={mainImage} width={100} />
//           </Link>
//           <LoggedOutView currentUser={this.props.currentUser} />
//           <LoggedInView currentUser={this.props.currentUser} />
//         </div>
//         <div data-target="mobile-demo" class="sidenav-trigger">
//           <i class="small material-icons">menu</i>
//         </div>
//       </nav>
//     );
//   }
// }





class Header extends React.Component {
  render() {
    return (
      <nav class="nav-wrapper blue">
        <div class="container">
          {/* <ul id="slide-out" class="side-out">
          </ul> */}
          <a href="" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>


          <Link to="/" class="brand-logo"><img src={mainImage}
            width={100} />
          </Link>



          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />

        </div>






      </nav>
    );
  }
}

export default Header;
