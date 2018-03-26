import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";



export default class Footer extends Component {
    render() {
        return (
            <Navbar fixedBottom>
                <Navbar.Header>



                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>


                        {/* <!--Footer--> */}
                        <footer className="page-footer font-small indigo pt-0">

                            {/* <!--Footer Links--> */}
                            <div className="container">

                                {/* <!--First row--> */}
                                <div className="row">

                                    {/* <!--First column--> */}
                                    <div className="col-md-12 py-5">

                                        <div className="mb-5 flex-center">

                                            {/* <!--Facebook--> */}
                                            <a className="fb-ic">
                                                <i class="fa fa-facebook fa-lg black-text mr-md-5 mr-3 fa-2x"> </i>
                                            </a>
                                            {/* <!--Twitter--> */}
                                            <a className="tw-ic">
                                                <i class="fa fa-twitter fa-lg black-text mr-md-5 mr-3 fa-2x"> </i>
                                            </a>
                                            {/* <!--Google +--> */}
                                            <a className="gplus-ic">
                                                <i class="fa fa-google-plus fa-lg black-text mr-md-5 mr-3 fa-2x"> </i>
                                            </a>
                                            {/* <!--Linkedin--> */}
                                            <a className="li-ic">
                                                <i class="fa fa-linkedin fa-lg black-text mr-md-5 mr-3 fa-2x"> </i>
                                            </a>
                                            {/* <!--Instagram--> */}
                                            <a className="ins-ic">
                                                <i className="fa fa-instagram fa-lg black-text mr-md-5 mr-3 fa-2x"> </i>
                                            </a>
                                            {/* <!--Pinterest--> */}
                                            <a className="pin-ic">
                                                <i className="fa fa-pinterest fa-lg black-text fa-2x"> </i>
                                            </a>
                                        </div>
                                    </div>
                                    {/* <!--/First column--> */}
                                </div>
                                {/* <!--/First row--> */}
                            </div>
                            {/* <!--/Footer Links--> */}

                            {/* <!--Copyright--> */}
                            <div class="footer-copyright py-3 text-center">
                                © 2018 Copyright:
        <a href="https://mdbootstrap.com/material-design-for-bootstrap/"> Team Huddle </a>
                            </div>
                            {/* <!--/Copyright--> */}

                        </footer>
                        {/* <!--/Footer--> */}


                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        );
    }
}