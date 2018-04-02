import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import services from "../services";
import ListErrors from "./ListErrors";

//any of the properties on store auth will be spread out to props of the
//login component
const mapStateToProps = state => ({ ...state.auth });

//Here we dispatch an action object with a property 'payload' that's value
//is a promise returned from calling services.Auth.register, remmber this will be
//picked up by our middleware reducer and the resolve/reject will be handled there and passed
//on to the redux store
const mapDispatchToProps = dispatch => ({
  onSubmit: (username, email, password) => {
    dispatch({
      type: "REGISTER",
      payload: services.Auth.register(username, email, password)
    });
  }
});

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };
  handleInputChange = event => {
    const targetName = event.target.name;

    this.setState({
      [targetName]: event.target.value
    });
  };

  submitForm = event => {
    event.preventDefault();
    const { username, email, password } = this.state;
    this.props.onSubmit(username, email, password);
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="text-xs-center">
                <Link to="login">Have an account?</Link>
              </p>

              <ListErrors errors={this.props.errors} />

              <form onSubmit={e => this.submitForm(e)}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={this.handleInputChange}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.handleInputChange}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.handleInputChange}
                    />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}
                  >
                    Join Huddle
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import "./Register.css";

// const mapStateToProps = state => ({
//   appName: state.appName
// });

// class Register extends Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="row centered-form">
//           <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
//             <div className="panel panel-default">
//               <div className="panel-heading">
//                 <h3 className="panel-title">
//                   Sign up for Huddle <small>It's free!</small>
//                 </h3>
//               </div>
//               <div className="panel-body">
//                 <form role="form">
//                   <div class="row">
//                     <div className="col-xs-6 col-sm-6 col-md-6">
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           name="first_name"
//                           id="first_name"
//                           className="form-control input-sm"
//                           placeholder="First Name"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-xs-6 col-sm-6 col-md-6">
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           name="last_name"
//                           id="last_name"
//                           className="form-control input-sm"
//                           placeholder="Last Name"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="form-group">
//                     <input
//                       type="email"
//                       name="email"
//                       id="email"
//                       className="form-control input-sm"
//                       placeholder="Email Address"
//                     />
//                   </div>

//                   <div className="row">
//                     <div className="col-xs-6 col-sm-6 col-md-6">
//                       <div className="form-group">
//                         <input
//                           type="password"
//                           name="password"
//                           id="password"
//                           className="form-control input-sm"
//                           placeholder="Password"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-xs-6 col-sm-6 col-md-6">
//                       <div className="form-group">
//                         <input
//                           type="password"
//                           name="password_confirmation"
//                           id="password_confirmation"
//                           className="form-control input-sm"
//                           placeholder="Confirm Password"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <input
//                     type="submit"
//                     value="Register"
//                     className="btn btn-info btn-block"
//                   />
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Register;
