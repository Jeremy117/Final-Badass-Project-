import React, { Component } from "react";
import { connect } from "react-redux";
import services from "../../services";
import SettingsForm from "./SettingsForm";
import ListErrors from "../ListErrors";
import "./SettingsForm.css";

const mapStateToProps = state => {
  return {
    ...state.settings,
    currentUser: state.common.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch({ type: "LOGOUT" }),
  onSubmitForm: user =>
    dispatch({ type: "SETTINGS_SAVED", payload: services.Auth.save(user) })
});

class DontGo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h2 className="text-xs-center">Don't Go! Play this instead...</h2>
            <iframe
              src="http://apps.thecodepost.org/trex/trex.html"
              width="100%"
              height="500"
              frameborder="2"
              allowfullscreen
              sandbox
            />
            <h3 className="text-xs-center">Wait, don't scroll down!</h3>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3 className="text-xs-center">No, STOP!</h3>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3 className="text-xs-center">Okay see ya next time!</h3>

            <ListErrors errors={this.props.errors} />

            <br />

            <a onClick={this.props.onClickLogout} className="btn blue">
              Log Out
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DontGo);
