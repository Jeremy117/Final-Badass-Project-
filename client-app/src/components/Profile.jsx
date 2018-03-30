import React, { Component } from "react";
import { connect } from "react-redux";
import "./Profile.css";


class Profile extends Component {
    // state = {
    //     image: "",
    //     username: "",
    //     bio: "",
    //     email: "",
    //     password: ""
    // };
    // //On Mount we want to assign all the currentUser props to the forms state,
    // //so it's filled out
    // componentDidMount() {
    //     if (this.props.currentUser) {
    //         this.setState({
    //             ...this.state,
    //             ...this.props.currentUser
    //         });
    //     }
    // }

    // //we also need the form to update after possible rehydration, or changes to currentUser
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.currentUser) {
    //         this.setState({
    //             ...this.state,
    //             image: nextProps.currentUser.image || "",
    //             username: nextProps.currentUser.username,
    //             bio: nextProps.currentUser.bio,
    //             email: nextProps.currentUser.email
    //         });
    //     }
    // }

    // submitForm = event => {
    //     event.preventDefault();

    //     const user = Object.assign({}, this.state);
    //     //we don't want to HTTP PUT a blank user
    //     if (!user.password) {
    //         delete user.password;
    //     }

    //     this.props.onSubmitForm(user);
    // };

    // updateState = field => event => {
    //     const state = this.state;
    //     const newState = Object.assign({}, state, { [field]: event.target.value });
    //     this.setState(newState);
    // };
    render() {
        return (
            <form>
                <div className="container">
                    <div className="row">



                        <div className="col-md-7 ">

                            <div className="panel panel-default">
                                <div className="panel-heading">  <h4 >User Profile</h4></div>
                                <div className="panel-body">

                                    <div className="box box-info">

                                        <div className="box-body">
                                            <div className="col-sm-5">
                                                <div align="center"> <img alt="User Pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" id="profile-image1" className="img-circle img-responsive" />

                                                    <input id="profile-image-upload" className="hidden" type="file" />
                                                    <button className="btn btn-primary" type="button" id="custom-button">Edit Photo</button>



                                                </div>

                                                <br />

                                                {/* <!-- /input-group --> */}
                                            </div>
                                            <div className="col-sm-6">
                                                <h4 styles="color:#00b1b1;">Jennifer Andrade</h4>
                                                <span><p>Catcher</p></span>
                                            </div>
                                            <div className="clearfix"></div>
                                            <hr styles="margin:5px 0 5px 0;" />


                                            <div className="col-sm-5 col-xs-6 tital " >First Name:</div><div className="col-sm-7 col-xs-6 "><input type="text" placeholder="First Name"></input></div>
                                            <div className="clearfix"></div>
                                            <div className="bot-border"></div>

                                            <div className="col-sm-5 col-xs-6 tital " >Last Name:</div><div className="col-sm-7"><input type="text" placeholder="Last Name"></input></div>
                                            <div className="clearfix"></div>
                                            <div className="bot-border"></div>

                                            <div className="col-sm-5 col-xs-6 tital " >Email Address:</div><div className="col-sm-7"><input type="text" placeholder="Email Adress"></input></div>
                                            <div className="clearfix"></div>
                                            <div className="bot-border"></div>

                                            <div className="col-sm-5 col-xs-6 tital " >Password:</div><div className="col-sm-7"><input type="text" placeholder="Password"></input></div>

                                            <div className="clearfix"></div>
                                            <div className="bot-border"></div>

                                            <div className="col-sm-5 col-xs-6 tital " >Position:</div><div className="col-sm-7"><input type="text" placeholder="Position"></input></div>

                                            <div className="clearfix"></div>
                                            <div className="bot-border"></div>

                                            <div className="col-sm-5 col-xs-6 tital " >Phone Number:</div><div className="col-sm-7"><input type="text" placeholder="Phone Number"></input></div>

                                            <div className="clearfix"></div>
                                            <div className="bot-border"></div>




                                            <button
                                                className="btn btn-primary pull-xs-right"
                                                type="submit"
                                                disabled={this.props.inProgress}
                                            >
                                                Edit Info
                  </button>

                                            <button
                                                className="btn btn-primary pull-xs-right"
                                                type="submit"
                                                disabled={this.props.inProgress}
                                            >
                                                Save
                  </button>


                                            {/* <!-- /.box-body --> */}
                                        </div>
                                        {/* <!-- /.box --> */}

                                    </div>


                                </div>
                            </div>
                        </div>
                        <script>
                            {function () {
                                ('#profile-image1').on('click', function () {
                                    ('#profile-image-upload').click();
                                });
                            }};
              </script>











                    </div>
                </div>
            </form>











        );


    }
}

export default Profile;