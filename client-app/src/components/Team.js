import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import services from "../services";
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
    marginLeft: 20,
};


class Team extends Component {
    state = {
        email: null,
        password: null
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        alert("A email and password was submitted: " + this.state.props);
        this.props.onSubmit(this.state.email, this.state.password);
    };
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col s12">

                        <h3 class="text-xs-center">Create Your Team</h3>




                        <Paper zDepth={2}>
                            <TextField
                                hintText="Team Name"
                                style={style}
                                underlineShow={false}
                            />
                            <Divider />

                            <TextField
                                hintText="Description of Team"
                                style={style}
                                multiLine={true}
                                rows="8"

                            />
                            <Divider />

                            <TextField
                                hintText="Sport"
                                style={style}
                                underlineShow={false}
                            />
                            <Divider />



                        </Paper>

                        <br />

                        <button class="btn blue" disabled={this.state.inProgress} onClick={this.submitForm}>Submit</button>






                    </div>
                </div >
            </div >


        );
    }
}

export default Team;
