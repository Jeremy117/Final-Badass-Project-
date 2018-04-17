import React, { Component } from "react";
import mainImage from "../images/huddle-logo-white.png";





export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer blue">
        <div className="container">
          <div className="wrapper" />
          <div className="row">
            <div className="col s4">
              <img src={mainImage}
                width={200} alt="" />



            </div>
            <div className="col l6 offset-l2 s12">
              <h5 className="black-text">Links</h5>
              <ul>
                <li>
                  <a className="black-text text-lighten-3" href="/">
                    Huddle Home
                 </a>
                </li>
                <li>
                  <a className="black-text text-lighten-3" href="#!">
                    About
                 </a>
                </li>
                <li>
                  <a className="black-text text-lighten-3" href="#!">
                    Careers
                 </a>
                </li>
                <li>
                  <a className="black-text text-lighten-3" href="#!">
                    Gallery
                 </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2018 Copyright Team Huddle
           <div className="right">
              <a href="https://facebook.com"><i className="fab fa-facebook-square fa-2x white"></i></a>
              <a href="https://github.com/Jeremy117/Huddle-App"><i className="fab fa-github fa-2x white"></i></a>
              <a href="https://www.linkedin.com"><i className="fab fa-linkedin fa-2x white"></i></a>
              <a href="https://www.google.com/"><i className="fab fa-google fa-2x white"></i></a>
            </div>
          </div>
        </div>
      </footer>

    );
  }
}