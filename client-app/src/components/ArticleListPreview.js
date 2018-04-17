import React from "react";
import { Link } from "react-router-dom";

const ArticlePreview = ({ article }) => {
  // const article = props.article;
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a>
          {/* <img src={article.author.image} alt="avatar" /> */}

          <div class="row">
            <div class="col s12 lg12">
              <div class="card">
                <div class="card-content black-text">
                  <a>
                    <div class="card-content black-text">
                      <img src={article.author.image} alt="Avatar" />
                    </div>
                  </a>
                  <div className="info">
                    <a className="author">{article.author.username}</a>
                    <span className="date">
                      {new Date(article.createdAt).toDateString()}
                    </span>
                  </div>
                  <h5>{article.title}</h5>
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
                  <Link
                    to={`article/${article.slug}`}
                    className="preview-link blue-text"
                  >
                    {article.tagList.map(tag => (
                      <li
                        className="tag-default tag-pill tag-outline"
                        key={tag}
                      >
                        {tag}
                      </li>
                    ))}
                  </Link>
                  <br />
                  <Link
                    to={`article/${article.slug}`}
                    className="preview-link black-text"
                  >
                    <span>Read more...</span>
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
            {/* <button */}
            {/* class="btn waves-effect waves{article.favoritesCount}-Green" */}
            {/* type="Submit" > Submit */}
            {/* <i class="material-icons right">Submit</i> */}
            {/* </button> */}
            {/* <button class="btn waves-effect waves-light red disabled" type="">
              Cancel
              {/* <i class="material-icons right">Touch this</i> */}
            {/* </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
