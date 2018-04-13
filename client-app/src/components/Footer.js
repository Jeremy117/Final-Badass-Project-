import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            <div class="col s4">
              <img src={mainImage}
                width={200} />



            </div>
            <div class="col l6 offset-l2 s12">
              <h5 class="black-text">Links</h5>
              <ul>
                <li>
                  <a class="black-text text-lighten-3" href="/">
                    Huddle Home
                 </a>
                </li>
                <li>
                  <a class="black-text text-lighten-3" href="#!">
                    About
                 </a>
                </li>
                <li>
                  <a class="black-text text-lighten-3" href="#!">
                    Careers
                 </a>
                </li>
                <li>
                  <a class="black-text text-lighten-3" href="#!">
                    Gallery
                 </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2018 Copyright Team Huddle
           <a class="right">
              <a href="https://facebook.com"><i class="fab fa-facebook-square fa-2x white"></i></a>
              <a href="https://github.com/Jeremy117/Huddle-App"><i class="fab fa-github fa-2x white"></i></a>
              <a href="https://www.linkedin.com"><i class="fab fa-linkedin fa-2x white"></i></a>
              <a href="https://www.google.com/"><i class="fab fa-google fa-2x white"></i></a>
            </a>
          </div>
        </div>
      </footer>

    );
  }
}
