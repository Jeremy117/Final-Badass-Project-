import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <div class="row">
          <div class="container">
            <div class="jumbotron text-center col-lg-6">
              <h1>Login</h1>
            </div>

            <div class="jumbotron text-center col-lg-6">
              <h1>Register</h1>
            </div>
          </div>
        </div>
      </Grid>
    );
  }
}
