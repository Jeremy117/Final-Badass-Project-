import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "material-ui/Avatar";
import mainImage from "../images/huddle-logo-white.png";
import Image from 'react-image-resizer';
import './Footer.css'



export default class Footer extends Component {
  render() {
    return (
      <footer class="page-footer blue">
        <div class="container">
          <div class="wrapper" />
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Huddle</h5>
              <Avatar src="./huddle-logo-white.png" />
            </div>
            <div class="col l6 offset-l2 s12">
              <h5 class="black-text">Links</h5>
              <ul>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    <i class="material-icons">home</i>Huddle Home
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    <i class="material-icons">high_quality</i>About
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    <i class="material-icons">weekend</i>Careers
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    <i class="material-icons">camera_enhance</i>Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2018 Copyright Team Huddle<i class="material-icons">copyright</i>
            <a class="grey-text text-lighten-4 right" href="#!">
              More Links<i class="fab fa-facebook-square fa-2x" />
              <i class="fab fa-twitter-square fa-2x" />
              <i class="fab fa-github fa-2x" />
              <i class="fab fa-linkedin fa-2x" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
