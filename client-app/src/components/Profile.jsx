import React, { Component } from "react";
import { connect } from "react-redux";


class Profile extends Component {
    state = {
        image: "",
        username: "",
        bio: "",
        email: "",
        password: ""
    };
    //On Mount we want to assign all the currentUser props to the forms state,
    //so it's filled out
    componentDidMount() {
        if (this.props.currentUser) {
            this.setState({
                ...this.state,
                ...this.props.currentUser
            });
        }
    }

    //we also need the form to update after possible rehydration, or changes to currentUser
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser) {
            this.setState({
                ...this.state,
                image: nextProps.currentUser.image || "",
                username: nextProps.currentUser.username,
                bio: nextProps.currentUser.bio,
                email: nextProps.currentUser.email
            });
        }
    }

    submitForm = event => {
        event.preventDefault();

        const user = Object.assign({}, this.state);
        //we don't want to HTTP PUT a blank user
        if (!user.password) {
            delete user.password;
        }

        this.props.onSubmitForm(user);
    };

    updateState = field => event => {
        const state = this.state;
        const newState = Object.assign({}, state, { [field]: event.target.value });
        this.setState(newState);
    };
    render() {
        return (
            <div className="container">


                <div className="row extra-margin">

                    <div className="col-sm-10">



                        <img src="http://via.placeholder.com/400x300" />

                        <h2>Jennifer Andrade</h2>




                    </div>


                </div>



                <form onSubmit={this.submitForm}>

                    <fieldset>
                        <fieldset className="form-group">





                            <div className="col-sm-10 col-md-8 col-form-label"></div>
                            <div className="col-sm-5">


                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="URL of profile picture"
                                    value={this.state.image}
                                    onChange={this.updateState("image")}
                                />
                            </div>
                        </fieldset>

                        <fieldset className="form-group">
                            <div className="col-sm-10 col-form-label"></div>
                            <div className="col-sm-5">
                                <input
                                    className="form-control form-control-lg"
                                    type="text"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.updateState("username")}
                                />
                            </div>
                        </fieldset>

                        <fieldset className="form-group">
                            <div className="col-sm-10 col-form-label"></div>
                            <div className="col-sm-5">
                                <textarea
                                    className="form-control form-control-lg"
                                    rows="8"
                                    placeholder="Short bio about you"
                                    value={this.state.bio}
                                    onChange={this.updateState("bio")}
                                />
                            </div>
                        </fieldset>

                        <fieldset className="form-group">
                            <div className="col-sm-10 col-form-label"></div>
                            <div className="col-sm-5">
                                <input
                                    className="form-control form-control-lg"
                                    type="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.updateState("email")}
                                />
                            </div>
                        </fieldset>

                        <fieldset className="form-group">
                            <div className="col-sm-10 col-form-label"></div>
                            <div className="col-sm-5">
                                <input
                                    className="form-control form-control-lg"
                                    type="password"
                                    placeholder="New Password"
                                    value={this.state.password}
                                    onChange={this.updateState("password")}
                                />
                            </div>
                        </fieldset>

                        <button
                            className="btn btn-lg btn-primary pull-xs-right"
                            type="submit"
                            disabled={this.state.inProgress}
                        >
                            Update Settings
          </button>
                    </fieldset>
                </form>


            </div>




        );


    }
}

export default Profile;