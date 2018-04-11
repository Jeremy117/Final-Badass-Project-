import React, { Component } from "react";
import { connect } from "react-redux";

import services from "../../services";

import SettingsForm from "./SettingsForm";
import ListErrors from "../ListErrors";
import RaisedButton from 'material-ui/RaisedButton';


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

class Settings extends Component {
  render() {
    return (
      <div className="settings-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Settings</h1>

              <ListErrors errors={this.props.errors} />

              <SettingsForm
                currentUser={this.props.currentUser}
                onSubmitForm={this.props.onSubmitForm}
              />
              <br />

              <RaisedButton label="Log Out" primary={true}
                style={{
                  width: "700px"
                }}

                onClick={this.props.onClickLogout}
              />
              <br />
              <br />
              <br />
              <br />




            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

// import React, { Component } from "react";
// import { connect } from "react-redux";

// const mapStateToProps = state => ({
//   appName: state.appName
// });

// class Settings extends Component {
//   render() {
//     return <div>Settings</div>;
//   }
// }

// export default connect(mapStateToProps)(Settings);
