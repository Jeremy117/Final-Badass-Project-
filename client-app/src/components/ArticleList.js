import React from "react";
import ArticlePreview from "./ArticleListPreview";

/* 
3 states for our articles list:
1. we either don't have articles
2. (fetching from server) or 
3.  articles were returned from the server, sweet!!.
*/

const ArticleList = props => {
  //loading articles
  if (!props.articles) {
    return (
      <div className="article-preview">
        We Gulp Data and never share it ......
      </div>
    );
  }

  //fetching articles
  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No Data here ........sad. really just sad.
      </div>
    );
  }

  //sweet articles
  return (
    <div>
      {props.articles.map(article => (
        <div key={article.slug}>
          <ArticlePreview article={article} />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
