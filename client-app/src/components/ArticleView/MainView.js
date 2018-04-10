import React from "react";

//shared component
import ArticleList from "../ArticleList";
const MainView = props => {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <a href="" className="nav-link active">
              Huddle Articles
              <i class="material-icons">sentiment_very_satisfied</i>
            </a>
          </li>
        </ul>
      </div>
      <ArticleList articles={props.articles} />
    </div>
  );
};

export default MainView;
