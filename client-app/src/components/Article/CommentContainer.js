import React from "react";
import { Link } from "react-router-dom";
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";

const CommentContainer = props => {
  if (props.currentUser) {
    return (
      <div>
        <div>
          <list-errors errors={props.errors} />
        </div>
        <CommentInput slug={props.slug} currentUser={props.currentUser} />
        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser}
        />
      </div>
    );
  } else {
    return (
      <div>
        <p>
          <Link to="/login">Sign in</Link>
          &nbsp;or&nbsp;
          <Link to="/register">sign up</Link>
          &nbsp;to add comments on this article.
        </p>

        <CommentList
          comments={props.comments}
          slug={props.slug}
          currentUser={props.currentUser}
        />
      </div>
    );
  }
};

export default CommentContainer;
