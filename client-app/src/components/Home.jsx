import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Huddle A Team Management Site</h2>
          <p>
            Organize your team and follow your favorite teams!
          </p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More!</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">

          </Col>
        </Row>
      </Grid>
    );
  }
}
