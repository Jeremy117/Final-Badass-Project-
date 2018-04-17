import React from "react";
import { Link } from "react-router-dom";

const ArticlePreview = ({ article }) => {
  // const article = props.article;
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a>
          {/* <img src={article.author.image} alt="avatar" /> */}
          <i class="fas fa-bullhorn" />
          <div class="row">
            <div class="col s12 lg10">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">
                    <i class="material-icons">desktop_mac</i>
                  </span>
                  <div className="info">
                    <a className="author">{article.author.username}</a>
                    <span className="date">
                      {new Date(article.createdAt).toDateString()}
                    </span>
                  </div>
                </div>
                <div class="card-action">
                  <i class="material-icons">announcement</i>
                  <i class="material-icons">chat</i>
                  <i class="material-icons">chat_bubble</i>
                  <i class="material-icons">chat_bubble_outline</i>
                  <i class="material-icons">child_care</i>
                  <i class="material-icons">cloud</i>
                  <i class="material-icons">comment</i>
                  <i class="material-icons">delete_sweep</i>
                  <h1>{article.title}</h1>
                  <p>{article.description}</p>
                  {/* <span>Read more...</span> */}
                  <ul className="tag-last">
                    {article.tagList.map(tag => (
                      <li
                        className="tag-default tag-pill tag-outline"
                        key={tag}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <Link to={`article/${article.slug}`} className="preview-link">
                    {article.tagList.map(tag => (
                      <li
                        className="tag-default tag-pill tag-outline"
                        key={tag}
                      >
                        {tag}
                      </li>
                    ))}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </a>

        <div className="info">
          <a className="author">{article.author.username}</a>
          <span className="date">
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>

        <div className="pull-xs-right">
          <div class="card-panel">
            <button
              class="btn waves-effect waves{article.favoritesCount}-Green"
              type="Submit"
            >
              Submit
              {/* <i class="material-icons right">Submit</i> */}
            </button>
            <button class="btn waves-effect waves-light red disabled" type="">
              Cancel
              {/* <i class="material-icons right">Touch this</i> */}
            </button>
          </div>
        </div>
      </div>

      <Link to={`article/${article.slug}`} className="preview-link">
        <h5>{article.title}</h5>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-last">
          {article.tagList.map(tag => (
            <li className="tag-default tag-pill tag-outline" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
};

export default ArticlePreview;
