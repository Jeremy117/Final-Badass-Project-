import React, { Component } from "react";
import services from "../../services";
import { connect } from "react-redux";
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  marginLeft: 20,
  width: "93%"
};



const mapDispatchToProps = dispatch => ({
  onSubmit: payload => dispatch({ type: "ADD_COMMENT", payload })
});

class CommentInput extends Component {
  state = {
    body: ""
  };

  setBody = ev => {
    this.setState({ body: ev.target.value });
  };

  createComment = ev => {
    ev.preventDefault();
    const payload = services.Comments.create(this.props.slug, {
      body: this.state.body
    });
    this.setState({ body: "" }); //reset body to blank after capturing it
    this.props.onSubmit(payload);
  };

  render() {
    return (
      <form onSubmit={this.createComment}>
        <Paper>
          {/* <div className="card-block"> */}
          <TextField
            hintText="Write a comment"
            style={style}
            fullWidth={true}
            multiLine={true}
            underlineShow={false}
            rows="3"
            value={this.state.body}
            onChange={this.setBody}

          />
          {/* </div> */}
          {/* <div className="card-footer"> */}
          <img
            src={this.props.currentUser.image}
            // className="comment-author-img"
            alt={this.props.currentUser.username}
          />
          <button className="blue" type="submit">
            Post Comment
          </button>
          {/* </div> */}
        </Paper >
      </form>
    );
  }
}

export default connect(() => ({}), mapDispatchToProps)(CommentInput);
