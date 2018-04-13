// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import services from "../services";
// import Divider from 'material-ui/Divider';
// import Paper from 'material-ui/Paper';
// import TextField from 'material-ui/TextField';


// class signIn extends Component {
//   state = {
//     email: null,
//     password: null
//   };

//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };
//   handleSubmit = event => {
//     event.preventDefault();
//     alert("A email and password was submitted: " + this.state.props);
//     this.props.onSubmit(this.state.email, this.state.password);
//   };
//   render() {
//     return (
//       // <div class="container">
//       //   <div class="row">
//       //     <div class="col s12">

//       //       <h1 class="text-xs-center">Settings</h1>




//       //       <Paper zDepth={2}>
//       //         <TextField
//       //           hintText="email"
//       //           style={style}
//       //           underlineShow={false}
//       //         />
//       //         <Divider />

//       //         <TextField
//       //           hintText="password"
//       //           style={style}
//       //           underlineShow={false}
//       //         />
//       //         <Divider />

//       //         <input
//       //           type="submit"
//       //           value="Register"
//       //           className="btn btn-info btn-block"
//       //         />

//       //       </Paper>




//       //     </div>
//       //   </div >
//       // </div >


//     );
//   }
// }

// export default signIn;
