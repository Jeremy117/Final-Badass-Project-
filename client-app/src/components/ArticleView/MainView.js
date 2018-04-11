import React from "react";

//shared component
import ArticleList from "../ArticleList";
const MainView = props => {
  return (
    <div className="col l12 m12 s12">
      <div className="feed-toggle">
        <ul className="nav nav-pills ">
          <li className="nav-item">
            <a href="" className="">
              Huddle Articles
            </a>
          </li>
        </ul>
      </div>
      <ArticleList articles={props.articles} />
    </div>
  );
};

export default MainView;
