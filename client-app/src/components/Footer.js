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
              <img src={mainImage} width={200} alt="" />
            </div>
            <div className="col l6 offset-l2 s12">
              <h5 className="black-text">Links</h5>
              <ul>
                <li>
                  <a class="black-text text-lighten-3" href="/">
                    <i class="fas fa-home" />Huddle Home
                  </a>
                </li>
                <li>
                  <a class="black-text text-lighten-3" href="#!">
                    <i class="fas fa-coffee" />About
                  </a>
                </li>
                <li>
                  <a class="black-text text-lighten-3" href="#!">
                    <i class="fas fa-pencil-alt" />Careers
                  </a>
                </li>
                <li>
                  <a class="black-text text-lighten-3" href="#!">
                    <i class="fas fa-camera-retro" />Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2018 Copyright Team Huddle
            <a class="right">
              <a href="https://facebook.com">
                <i class="fab fa-facebook-square fa-2x white" />
              </a>
              <a href="https://github.com/Jeremy117/Huddle-App">
                <i class="fab fa-github fa-2x white" />
              </a>
              <a href="https://www.linkedin.com">
                <i class="fab fa-linkedin fa-2x white" />
              </a>
              <a href="https://www.google.com/">
                <i class="fab fa-google fa-2x white" />
              </a>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
