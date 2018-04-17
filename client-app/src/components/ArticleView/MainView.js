import React from "react";

//shared component
import ArticleList from "../ArticleList";
const MainView = props => {
  return (
    <div className="col md 9">
      <div className="feed-toggle">
        <ul className=" nav wrapper outline-active">
          <li className="nav-item" />
        </ul>
      </div>
      <ArticleList articles={props.articles} />
    </div>
  );
};

export default MainView;
