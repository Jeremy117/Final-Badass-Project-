import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Huddle</h2>
          <p>Great place to manage your Sports Teams!</p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
      </Grid>
    );
  }
}
